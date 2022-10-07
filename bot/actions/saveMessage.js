import { saveLogMessage, startActionButtonsOptions, read, write } from '../utils';
import { MESSAGE_FILE, SERVICE_FILE, FAIL_SAVE_MESSAGE, EMTY_MESSAGE, SUCCESS_SAVE_MESSAGE } from '../consts';

/**
 * Сохраняет сообщение из временного файла
 * в документ для крона.
 */

const saveMessage = (bot) => {
  return bot.action('saveMessage', async (ctx) => {
    const user = ctx.update.callback_query.from;
    saveLogMessage('save', user);

    const data = read(SERVICE_FILE);
    if (!data) return ctx.reply(FAIL_SAVE_MESSAGE);

    write(MESSAGE_FILE, data);
    write(SERVICE_FILE, EMTY_MESSAGE);

    return ctx.reply(SUCCESS_SAVE_MESSAGE, startActionButtonsOptions);
  });
};

export default saveMessage;
