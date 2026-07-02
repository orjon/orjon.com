import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { config } from "dotenv"
import { technologies } from "./schema"
import { Technology } from "@/app/types/technologies"

config({ path: ".env.local" })

const sqlite = new Database(process.env.DATABASE_URL!)
const db = drizzle(sqlite)

const technologyData = Object.entries(Technology).map(([slug, label]) => ({
  slug,
  label,
}))

async function seed() {
  await db.insert(technologies).values(technologyData)
  console.log(`Seeded ${technologyData.length} technologies`)
  sqlite.close()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
