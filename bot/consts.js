const CRON_VALUE_TIME = '50 9 * * 1-5';
const CRON_RESTART_TIME = '00 05-20 * * 1-5';

const BOT_API_TOKEN = '';
const CHAT_ID = '';

const HELLOW_FILE = './bot/html/hellow.html';
const MESSAGE_FILE = './bot/html/message.html';
const SERVICE_FILE = './bot/html/service.html';
const LOGS_FILE = './logs.txt';

const SHOW_MESSAGE_BUTTON_TITLE = 'Сообщение';
const SHOW_HTML_BUTTON_TITLE = 'HTML';
const SEND_BUTTON_TITLE = 'Отправить';
const REMOVE_BUTTON_TITLE = 'Удалить';
const SAVE_BUTTON_TITLE = 'Сохранить';

const FAIL_SAVE_MESSAGE = 'Нет временных файлов. Начего сохранять.';
const SUCCESS_SAVE_MESSAGE = 'Последнее отредактированное сообщение сохранилось! Временные файлы удалены. Можешь начать сначала...';
const FAIL_REMOVE_MESSAGE = 'Нет временных файлов. Начего удалять.';
const SUCCESS_REMOVE_MESSAGE = 'Временные файлы удалены. Можешь начать сначала...';
const SEND_MESSAGE = 'Сообщение успешно отправлено!';

const EMTY_MESSAGE = 'Привет! Я пустой :)';

module.exports = {
  CRON_VALUE_TIME,
  CRON_RESTART_TIME,
  BOT_API_TOKEN,
  CHAT_ID,
  HELLOW_FILE,
  MESSAGE_FILE,
  SERVICE_FILE,
  LOGS_FILE,
  SHOW_MESSAGE_BUTTON_TITLE,
  SHOW_HTML_BUTTON_TITLE,
  SEND_BUTTON_TITLE,
  REMOVE_BUTTON_TITLE,
  SAVE_BUTTON_TITLE,
  FAIL_SAVE_MESSAGE,
  SUCCESS_SAVE_MESSAGE,
  FAIL_REMOVE_MESSAGE,
  SUCCESS_REMOVE_MESSAGE,
  SEND_MESSAGE,
  EMTY_MESSAGE,
};
