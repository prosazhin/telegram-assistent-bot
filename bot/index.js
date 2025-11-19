const { Telegraf } = require('telegraf');
const start = require('./actions/start');
const showPrettyMessage = require('./actions/showPrettyMessage');
const showHtmlMessage = require('./actions/showHtmlMessage');
const sendTestMessage = require('./actions/sendTestMessage');
const saveMessage = require('./actions/saveMessage');
const removeMessage = require('./actions/removeMessage');
const watchMessage = require('./actions/watchMessage');
const editMessage = require('./actions/editMessage');
const { cronSendMessage, cronRestart } = require('./cron');
const { BOT_API_TOKEN } = require('./consts');

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

module.exports = bot;
