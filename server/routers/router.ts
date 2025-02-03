

import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";


export const myRouter = createTRPCRouter({
  hello: publicProcedure
    .query(async ({ ctx }) => {
      const res = await ctx.db.from('myTable').select()
      return res
    }),
});


