import { useEffect, useState } from 'react'
import { useAnalytics } from '../../hooks/useAnalytics'

interface DayData {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface GitHubHeatmapProps {
  username: string
  fallbackData?: DayData[]
  githubToken?: string
  includePrivate?: boolean
}

const FALLBACK_HEATMAP: DayData[] = generateFallbackData()

function generateFallbackData(): DayData[] {
  const data: DayData[] = []
  const today = new Date()

  for (let i = 365; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]

    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const random = Math.random()

    let count = 0
    let level: 0 | 1 | 2 | 3 | 4 = 0

    if (!isWeekend && random > 0.3) {
      count = Math.floor(Math.random() * 8) + 1
      if (count >= 1 && count <= 2) level = 1
      else if (count >= 3 && count <= 5) level = 2
      else if (count >= 6 && count <= 7) level = 3
      else level = 4
    }

    data.push({ date: dateStr, count, level })
  }

  return data
}

const LEVEL_COLORS = [
  '#ebedf0',
  '#9be9a8',
  '#40c463',
  '#30a14e',
  '#216e39',
]

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string | undefined

export default function GitHubHeatmap({ username, fallbackData }: GitHubHeatmapProps) {
  const [data, setData] = useState<DayData[]>(fallbackData || FALLBACK_HEATMAP)
  const [loading, setLoading] = useState(!fallbackData)
  const [isFromApi, setIsFromApi] = useState(false)
  const [tooltip, setTooltip] = useState<{ date: string; count: number; x: number; y: number } | null>(null)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    async function fetchCommits() {
      try {
        const endpoint = includePrivate
          ? `https://api.github.com/users/${username}/events?per_page=100`
          : `https://api.github.com/users/${username}/events/public?per_page=100`

        const headers: HeadersInit = {
          'Accept': 'application/vnd.github.v3+json',
        }

        const token = githubToken || GITHUB_TOKEN
        if (token) {
          headers['Authorization'] = `Bearer ${token}`
        }

        const response = await fetch(endpoint, { headers })

        if (!response.ok) throw new Error(`HTTP ${response.status}`)

        const events = await response.json()
        const commitsByDate: Record<string, number> = {}

        events
          .filter((e: { type: string }) => e.type === 'PushEvent')
          .forEach((event: { created_at: string }) => {
            const dateStr = event.created_at.split('T')[0]
            commitsByDate[dateStr] = (commitsByDate[dateStr] || 0) + 1
          })

        const today = new Date()
        const heatmapData: DayData[] = []

        for (let i = 364; i >= 0; i--) {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          const dateStr = date.toISOString().split('T')[0]
          const count = commitsByDate[dateStr] || 0

          let level: 0 | 1 | 2 | 3 | 4 = 0
          if (count === 0) level = 0
          else if (count <= 2) level = 1
          else if (count <= 5) level = 2
          else if (count <= 8) level = 3
          else level = 4

          heatmapData.push({ date: dateStr, count, level })
        }

        setData(heatmapData)
        setIsFromApi(true)
      } catch {
        setIsFromApi(false)
      } finally {
        setLoading(false)
      }
    }

    if (!fallbackData) {
      fetchCommits()
    }
  }, [username, fallbackData, githubToken, includePrivate])

  const handleMouseEnter = (day: DayData, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    setTooltip({
      date: day.date,
      count: day.count,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    })
  }

  const handleMouseLeave = () => {
    setTooltip(null)
  }

  const handleClick = () => {
    trackEvent('click_github_heatmap', { username })
  }

  const weeks: DayData[][] = []
  let currentWeek: DayData[] = []

  data.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay()

    if (index === 0) {
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: '', count: 0, level: 0 })
      }
    }

    currentWeek.push(day)

    if (dayOfWeek === 6 || index === data.length - 1) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, level: 0 })
      }
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  const totalCommits = data.reduce((sum, d) => sum + d.count, 0)
  const longestStreak = calculateLongestStreak(data)
  const currentStreak = calculateCurrentStreak(data)

  const monthLabels: { month: string; weekIndex: number }[] = []
  let lastMonth = -1

  weeks.forEach((week, weekIndex) => {
    const firstDay = week.find(d => d.date)
    if (firstDay) {
      const date = new Date(firstDay.date)
      const month = date.getMonth()
      if (month !== lastMonth) {
        monthLabels.push({ month: MONTHS[month], weekIndex })
        lastMonth = month
      }
    }
  })

  return (
    <div className="github-heatmap">
      <div className="github-heatmap-header">
        <svg viewBox="0 0 24 24" fill="currentColor" className="github-icon">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        <span>Contribuciones</span>
        {!isFromApi && <span className="github-heatmap-badge">Demo</span>}
      </div>

      <div className="github-heatmap-stats">
        <div className="github-heatmap-stat">
          <span className="github-heatmap-stat-value">{totalCommits}</span>
          <span className="github-heatmap-stat-label">commits</span>
        </div>
        <div className="github-heatmap-stat">
          <span className="github-heatmap-stat-value">{longestStreak}</span>
          <span className="github-heatmap-stat-label">racha más larga</span>
        </div>
        <div className="github-heatmap-stat">
          <span className="github-heatmap-stat-value">{currentStreak}</span>
          <span className="github-heatmap-stat-label">racha actual</span>
        </div>
      </div>

      {loading ? (
        <div className="github-heatmap-loading">Cargando...</div>
      ) : (
        <>
          <div className="github-heatmap-grid-container">
            <div
              className="github-heatmap-months"
              style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}
            >
              {monthLabels.map(({ month, weekIndex }) => (
                <span
                  key={`${month}-${weekIndex}`}
                  className="github-heatmap-month"
                  style={{ gridColumn: weekIndex + 1 }}
                >
                  {month}
                </span>
              ))}
            </div>
            <div className="github-heatmap-grid-wrapper">
              <div className="github-heatmap-days">
                {DAYS.map(d => <span key={d} className="github-heatmap-day">{d}</span>)}
              </div>
              <div className="github-heatmap-grid">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="github-heatmap-week">
                    {week.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="github-heatmap-cell"
                        style={{ backgroundColor: day.date ? LEVEL_COLORS[day.level] : 'transparent' }}
                        onMouseEnter={(e) => day.date && handleMouseEnter(day, e)}
                        onMouseLeave={handleMouseLeave}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="github-heatmap-legend">
            <span>Menos</span>
            {LEVEL_COLORS.map((color, i) => (
              <div key={i} className="github-heatmap-legend-cell" style={{ backgroundColor: color }} />
            ))}
            <span>Más</span>
          </div>
        </>
      )}

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="github-heatmap-footer"
      >
        Ver perfil en GitHub
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>

      {tooltip && (
        <div
          className="github-heatmap-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          <strong>{tooltip.count} commits</strong>
          <span>{formatDate(tooltip.date)}</span>
        </div>
      )}
    </div>
  )
}

function calculateLongestStreak(data: DayData[]): number {
  let maxStreak = 0
  let currentStreak = 0

  for (const day of data) {
    if (day.count > 0) {
      currentStreak++
      maxStreak = Math.max(maxStreak, currentStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

function calculateCurrentStreak(data: DayData[]): number {
  let streak = 0

  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i].count > 0) {
      streak++
    } else {
      break
    }
  }

  return streak
}