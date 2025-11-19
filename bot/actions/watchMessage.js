const { saveLogMessage, saveActionButtonsOptions, write } = require('../utils');
const { SERVICE_FILE } = require('../consts');

/**
 * Следит за отправкой сообщений пользователя.
 * Получает, записывает в файл,
 * преобразует HTML и показывает пользователю.
 */

const watchMessage = (bot) => {
  return bot.on('message', (ctx) => {
    const user = ctx.message.from;
    saveLogMessage('watch', user);

    const data = ctx.message.text;
    write(SERVICE_FILE, data);

    return ctx.reply(data, saveActionButtonsOptions);
  });
};

module.exports = watchMessage;
