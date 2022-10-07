import { saveLogMessage, htmlPreviewOptions, read } from '../utils';
import { CHAT_ID, MESSAGE_FILE, SEND_MESSAGE } from '../consts';

/**
 * Отправляет сообщение в чат.
 */

const sendTestMessage = (bot) => {
  return bot.action('sendTestMessage', async (ctx) => {
    const user = ctx.update.callback_query.from;
    saveLogMessage('sendTestMessage', user);

    await bot.telegram.sendMessage(CHAT_ID, read(MESSAGE_FILE), htmlPreviewOptions);
    return ctx.reply(SEND_MESSAGE);
  });
};

export default sendTestMessage;
