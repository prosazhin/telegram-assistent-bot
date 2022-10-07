import fs from 'fs';
import dayjs from 'dayjs';

import { LOGS_FILE, SHOW_MESSAGE_BUTTON_TITLE, SHOW_HTML_BUTTON_TITLE, SEND_BUTTON_TITLE, REMOVE_BUTTON_TITLE, SAVE_BUTTON_TITLE } from './consts';

/**
 * Функция собирает сообщение для логов.
 */

const logMessage = (action, user) => {
  return `
${dayjs().format('YYYY-MM-DD HH:mm:ss')} / ${action} / ${user.first_name} ${user.last_name} (id: ${user.id}, username: ${user.username})`;
};

/**
 * Функция для сохранения лога.
 */

export const saveLogMessage = (type, user) => {
  return fs.appendFileSync(LOGS_FILE, logMessage(type, user), 'utf8');
};

/**
 * Чтение файла.
 */

export const read = (file) => {
  return fs.readFileSync(file, 'utf8');
};

/**
 * Запись файла.
 */

export const write = (file, value) => {
  return fs.writeFileSync(file, value, 'utf8');
};

/**
 * Параметры для преобразования HTML в сообщении.
 */

export const htmlPreviewOptions = {
  parse_mode: 'HTML',
  disable_web_page_preview: true,
};

/**
 * Параметры для преобразования HTML в сообщении.
 * Плюс кнопки просмотра сообщения.
 */

export const startActionButtonsOptions = {
  parse_mode: 'HTML',
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: SHOW_MESSAGE_BUTTON_TITLE, callback_data: 'showPrettyMessage' },
        { text: SHOW_HTML_BUTTON_TITLE, callback_data: 'showHtmlMessage' },
        { text: SEND_BUTTON_TITLE, callback_data: 'sendTestMessage' },
      ],
    ],
  },
};

/**
 * Параметры для преобразования HTML в сообщении.
 * Плюс кнопки сохранения сообщения.
 */

export const saveActionButtonsOptions = {
  parse_mode: 'HTML',
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: REMOVE_BUTTON_TITLE, callback_data: 'removeMessage' },
        { text: SAVE_BUTTON_TITLE, callback_data: 'saveMessage' },
      ],
    ],
  },
};
