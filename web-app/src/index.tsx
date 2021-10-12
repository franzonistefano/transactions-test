import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { serviceWorkerInizialized, serviceWorkerUpdate } from './store/action/service-worker';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './assets/theme/custom-theme.scss';
import { AbilityContext } from './abilities/Can';
import ability from './abilities/ability';
import messages_it from './multilanguage/translation/it.json';
import messages_en from './multilanguage/translation/en.json';
import { isSupportedLanguage, SET_CALENDAR_LOCALE, CALENDAR_EN } from './multilanguage/supported-languages';
import { MultiLanguageState } from './interface/common/MultiLanguageState';
import log from './configurations/LogLevel';
import { IntlProvider } from 'react-intl';

const store = configureStore()

const setMessages = (locale: string) => {
  switch (locale) {
      case 'en':
          return messages_en
      case 'it':
          return messages_it
      default:
          return messages_en
  }
}

const defaultLanguage = () => {
  let userLang: any, messages: any, calendar: any = null

  try {
      userLang = navigator.language.split("-")[0]
      let supported = isSupportedLanguage(userLang)
      if (!supported) {
          userLang = 'en'
      }
      messages = setMessages(userLang)
      log.info("LANGUAGE", userLang)
  } catch (error) {
      userLang = "en"
      messages = messages_en
  }

  calendar = SET_CALENDAR_LOCALE(userLang)

  return {
      userLang: userLang,
      messages: messages,
      calendar: calendar
  }
}
const userLanguage = defaultLanguage();

const main = (
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <IntlProvider key={userLanguage.userLang}
            locale={userLanguage.userLang}
            messages={userLanguage.messages}
            defaultLocale="en"
            textComponent={Fragment}
        >
        <AbilityContext.Provider value={ability} >
          <App />
        </AbilityContext.Provider>
      </IntlProvider>
    {/* </React.StrictMode> */}
  </Provider>
)

ReactDOM.render(
  main,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register({
  onSuccess: () => store.dispatch(serviceWorkerInizialized()),
  onUpdate: registration => store.dispatch(serviceWorkerUpdate(registration))
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
