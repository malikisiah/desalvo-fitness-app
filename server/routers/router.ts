// server/api/routers/router.ts

import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const myRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.text}`;
    }),
});


