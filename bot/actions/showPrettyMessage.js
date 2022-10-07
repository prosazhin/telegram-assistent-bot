import { saveLogMessage, startActionButtonsOptions, read } from '../utils';
import { MESSAGE_FILE } from '../consts';

/**
 * Отправляет пользователю
 * преобразованное из HTML сообщение.
 */

const showPrettyMessage = (bot) => {
  return bot.action('showPrettyMessage', (ctx) => {
    const user = ctx.update.callback_query.from;
    saveLogMessage('showPrettyMessage', user);

    return ctx.reply(read(MESSAGE_FILE), startActionButtonsOptions);
  });
};

export default showPrettyMessage;
