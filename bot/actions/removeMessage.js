import { saveLogMessage, startActionButtonsOptions, read, write } from '../utils';
import { SERVICE_FILE, FAIL_REMOVE_MESSAGE, EMTY_MESSAGE, SUCCESS_REMOVE_MESSAGE } from '../consts';

/**
 * Удаляет временные файлы.
 */

const removeMessage = (bot) => {
  return bot.action('removeMessage', async (ctx) => {
    const user = ctx.update.callback_query.from;
    saveLogMessage('remove', user);

    const data = read(SERVICE_FILE);
    if (!data) return ctx.reply(FAIL_REMOVE_MESSAGE);

    write(SERVICE_FILE, EMTY_MESSAGE);

    return ctx.reply(SUCCESS_REMOVE_MESSAGE, startActionButtonsOptions);
  });
};

export default removeMessage;
