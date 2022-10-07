import { saveLogMessage, read } from '../utils';
import { MESSAGE_FILE } from '../consts';

/**
 * Показывает сообщение в формате HTML пользователю.
 */

const showHtmlMessage = (bot) => {
  return bot.action('showHtmlMessage', (ctx) => {
    const user = ctx.update.callback_query.from;
    saveLogMessage('showHtmlMessage', user);

    return ctx.reply(read(MESSAGE_FILE));
  });
};

export default showHtmlMessage;
