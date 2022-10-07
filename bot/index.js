import { Telegraf } from 'telegraf';
import start from './actions/start';
import showPrettyMessage from './actions/showPrettyMessage';
import showHtmlMessage from './actions/showHtmlMessage';
import sendTestMessage from './actions/sendTestMessage';
import saveMessage from './actions/saveMessage';
import removeMessage from './actions/removeMessage';
import watchMessage from './actions/watchMessage';
import editMessage from './actions/editMessage';
import { cronSendMessage, cronRestart } from './cron';
import { BOT_API_TOKEN } from './consts';

const bot = new Telegraf(BOT_API_TOKEN);

start(bot);
showPrettyMessage(bot);
showHtmlMessage(bot);
sendTestMessage(bot);
saveMessage(bot);
removeMessage(bot);
watchMessage(bot);
editMessage(bot);

cronSendMessage(bot);
cronRestart();

bot.launch();
