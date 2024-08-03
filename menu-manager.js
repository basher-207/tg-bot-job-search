export const quit = (bot, chatId) => {
  bot.telegram.sendMessage(chatId, "Huh, ok... I'll be waiting for you!", {
    reply_markup: {
      remove_keyboard: true,
    },
  });
};
