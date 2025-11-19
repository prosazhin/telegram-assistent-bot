const cron = require('node-cron');
const shell = require('shelljs');
const { read } = require('./utils');
const { CRON_VALUE_TIME, CRON_RESTART_TIME, CHAT_ID, MESSAGE_FILE } = require('./consts');

/**
 * Крон таска для отправки сообщения.
 * Отправляется по будням в 9:50.
 * 50 9 * * 1-5
 */

const cronSendMessage = (bot) => {
  return cron.schedule(CRON_VALUE_TIME, () => {
    bot.telegram.sendMessage(CHAT_ID, read(MESSAGE_FILE), {
      parse_mode: 'HTML',
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [[{ text: 'Доска для чаптерных задач', url: 'https://flow.reg.ru/space/245' }], [{ text: 'Редактировать бота', url: 'https://t.me/john_designers_assistant_bot' }]],
      },
    });
  });
};

/**
 * Крон таска для перезагрузки бота.
 * Срабатываем каждый час в 00 минут.
 * 0 * * * *
 */

const cronRestart = () => {
  return cron.schedule(CRON_RESTART_TIME, () => {
    shell.exec('npm run restart');
  });
};

module.exports = {
  cronSendMessage,
  cronRestart,
};
