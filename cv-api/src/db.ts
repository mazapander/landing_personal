import { Pool } from 'pg'
import { config } from './config.js'

export const pool = new Pool({
  connectionString: config.databaseUrl,
})

export async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS cv_requests (
      id text PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL,
      company text NOT NULL,
      linkedin text,
      reason text NOT NULL,
      privacy_accepted boolean NOT NULL DEFAULT false,
      request_ip text,
      user_agent text,
      token_hash text NOT NULL UNIQUE,
      token_expires_at timestamptz NOT NULL,
      download_count integer NOT NULL DEFAULT 0,
      max_downloads integer NOT NULL DEFAULT 1,
      email_sent_at timestamptz,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `)

  await pool.query(`
    CREATE INDEX IF NOT EXISTS cv_requests_created_at_idx
    ON cv_requests (created_at DESC)
  `)
}
