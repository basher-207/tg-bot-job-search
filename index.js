import { Telegraf } from "telegraf";
import "dotenv/config";

import { quit } from "./menu-manager.js";
import { findOffers } from "./search.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const chatId = ctx.chat.id;
  bot.telegram.sendMessage(
    chatId,
    "Wellcome! Click on the button below to find job offers",
    {
      reply_markup: {
        keyboard: [["Start a search"], ["Quit"]],
      },
    }
  );
});

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;
  const message = ctx.message.text;

  switch (message) {
    case "Start a search":
      await findOffers(ctx);
      break;
    case "Quit":
      quit(bot, chatId);
      break;

    default:
      ctx.reply("I do not understand you... Please try again");
      break;
  }
});

bot.launch();
