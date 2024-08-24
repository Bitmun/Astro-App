/* eslint-disable @typescript-eslint/no-unused-vars */
interface TelegramWebApp {
  initDataUnsafe: {
    user: {
      language_code: string;
    };
  };
  BackButton: {
    show: () => void;
    onClick: (callback: () => void) => void;
    hide: () => void;
  };
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
