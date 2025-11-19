const { saveLogMessage, startActionButtonsOptions, read } = require('../utils');
const { HELLOW_FILE } = require('../consts');

/**
 * /start
 * Записывает пользователь в лог,
 * отправляет приветственное сообщение
 * и кнопки для просмотра сообщения.
 */

const start = (bot) => {
  return bot.start((ctx) => {
    const user = ctx.message.from;
    saveLogMessage('start', user);

    return ctx.reply(read(HELLOW_FILE), startActionButtonsOptions);
  });
};

module.exports = start;
