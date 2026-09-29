import { z } from "zod";
import { MEMBERSHIP_TIERS } from "../shared/const";
import { publicProcedure, router } from "./_core/trpc";
import {
  activity,
  currentMembership,
  knowledgeEntries,
  sessions,
  usageSeries,
  workspaceStats,
} from "./data";

export const appRouter = router({
  membership: router({
    tiers: publicProcedure.query(() => MEMBERSHIP_TIERS),
    current: publicProcedure.query(() => currentMembership),
  }),
  workspace: router({
    overview: publicProcedure.query(() => ({
      stats: workspaceStats,
      usageSeries,
      recentSessions: sessions.slice(0, 5),
      activity,
    })),
    sessions: publicProcedure
      .input(
        z
          .object({
            status: z
              .enum(["all", "running", "completed", "queued", "failed"])
              .default("all"),
          })
          .optional()
      )
      .query(({ input }) => {
        const status = input?.status ?? "all";
        return status === "all"
          ? sessions
          : sessions.filter((session) => session.status === status);
      }),
    knowledge: publicProcedure
      .input(z.object({ search: z.string().trim().optional() }).optional())
      .query(({ input }) => {
        const query = input?.search?.toLowerCase();
        if (!query) return knowledgeEntries;
        return knowledgeEntries.filter((entry) =>
          [entry.title, entry.excerpt, entry.kind, ...entry.tags]
            .join(" ")
            .toLowerCase()
            .includes(query)
        );
      }),
  }),
});

export type AppRouter = typeof appRouter;
