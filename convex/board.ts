import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

const images = [
  "placeholders/1.svg",
  "placeholders/2.svg",
  "placeholders/3.svg",
  "placeholders/4.svg",
  "placeholders/5.svg",
  "placeholders/6.svg",
  "placeholders/7.svg",
  "placeholders/8.svg",
  "placeholders/9.svg",
  "placeholders/10.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized");
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      orgId: args.orgId,
      title: args.title,
      authorId: identity.subject,
      authorName: identity.name ?? "Anonymous",
      imageUrl: randomImage,
    });

    return board;
  },
});

export const remove = mutation({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject;

    // const existingFavorite = await ctx.db
    //   .query("userFavorites")
    //   .withIndex("by_user_board", (q) =>
    //     q.eq("userId", userId).eq("boardId", args.id)
    //   )
    //   .unique();

    // if (existingFavorite) {
    // await ctx.db.delete(existingFavorite._id);
    // }

    await ctx.db.delete(args.id);
  },
});
