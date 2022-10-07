import { saveLogMessage, saveActionButtonsOptions, write } from '../utils';
import { SERVICE_FILE } from '../consts';

/**
 * Следит за редактированием сообщений пользователя.
 * Получает, записывает в файл,
 * преобразует HTML и показывает пользователю.
 */

const editMessage = (bot) => {
  return bot.on('edited_message', (ctx) => {
    const user = ctx.update.edited_message.from;
    saveLogMessage('edit', user);

    const data = ctx.update.edited_message.text;
    write(SERVICE_FILE, data);

    return ctx.reply(data, saveActionButtonsOptions);
  });
};

export default editMessage;
