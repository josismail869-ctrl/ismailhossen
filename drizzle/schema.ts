import {
  bigint,
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const members = mysqlTable("members", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 120 }).notNull(),
  tier: varchar("tier", { length: 20 }).notNull().default("reader"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const agentSessions = mysqlTable("agent_sessions", {
  id: varchar("id", { length: 36 }).primaryKey(),
  memberId: bigint("member_id", { mode: "number" }).notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  agent: varchar("agent", { length: 20 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("queued"),
  model: varchar("model", { length: 60 }).notNull(),
  tokens: int("tokens").notNull().default(0),
  durationMin: int("duration_min").notNull().default(0),
  summary: text("summary"),
  startedAt: timestamp("started_at").defaultNow().notNull(),
});

export const knowledgeEntries = mysqlTable("knowledge_entries", {
  id: varchar("id", { length: 36 }).primaryKey(),
  memberId: bigint("member_id", { mode: "number" }).notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  kind: varchar("kind", { length: 20 }).notNull().default("note"),
  excerpt: text("excerpt"),
  tags: text("tags"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
