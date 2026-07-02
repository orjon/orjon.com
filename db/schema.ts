import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

const codeColumns = {
  descriptionTop: text('description_top'),
  descriptionBottom: text('description_bottom'),
  note: text('note'),
  repo: text('repo'),
  www: text('www'),
  responsive: integer('responsive'),
}

const designColumns = {
  image: text('image'),
}

const electronicsColumns = {
  // to be defined
}

export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  type: text('type').notNull(), // 'code' | 'design' | 'electronics'
  order: integer('order').notNull().default(0),
  archived: integer('archived').notNull().default(0),
  createdAt: integer('created_at').notNull(),
  updatedAt: integer('updated_at').notNull(),
  ...codeColumns,
  ...designColumns,
  ...electronicsColumns,
})

export const projectImages = sqliteTable('project_images', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  projectId: integer('project_id').notNull().references(() => projects.id),
  filename: text('filename').notNull(),
  path: text('path').notNull(),
  width: integer('width'),
  height: integer('height'),
  order: integer('order').notNull().default(0),
})

export const technologies = sqliteTable('technologies', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  label: text('label').notNull(),
})

export const projectTechnologies = sqliteTable('project_technologies', {
  projectId: integer('project_id').notNull().references(() => projects.id),
  technologyId: integer('technology_id').notNull().references(() => technologies.id),
})
