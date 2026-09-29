import { z } from "zod";
import { PAYMENT_BENEFICIARY, PAYMENT_METHODS } from "../shared/siteConfig";
import { publicProcedure, router } from "./_core/trpc";
import {
  dailyPosts,
  freePredictions,
  games,
  latestResults,
  plans,
  vipPredictionPreview,
} from "./data";

export const appRouter = router({
  results: router({
    latest: publicProcedure.query(() =>
      games.map((game) => ({
        game,
        result: latestResults.find((r) => r.gameKey === game.key) ?? null,
      }))
    ),
  }),
  predictions: router({
    free: publicProcedure.query(() => freePredictions),
    vipPreview: publicProcedure.query(() => vipPredictionPreview),
  }),
  posts: router({
    published: publicProcedure
      .input(
        z
          .object({ game: z.string().trim().optional() })
          .optional()
      )
      .query(({ input }) => {
        const published = dailyPosts.filter((p) => p.visibility === "free");
        if (!input?.game || input.game === "all") return published;
        return published.filter((p) => p.gameKey === input.game);
      }),
  }),
  plans: router({
    list: publicProcedure.query(() => plans),
  }),
  payments: router({
    methods: publicProcedure.query(() => ({
      beneficiary: PAYMENT_BENEFICIARY,
      methods: PAYMENT_METHODS,
    })),
  }),
});

export type AppRouter = typeof appRouter;
