import { saveLogMessage, saveActionButtonsOptions, write } from '../utils';
import { SERVICE_FILE } from '../consts';

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

export default watchMessage;
