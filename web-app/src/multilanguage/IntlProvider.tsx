import React, { Fragment, useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages_it from './translation/it.json';
import messages_en from './translation/en.json';
import { isSupportedLanguage, SET_CALENDAR_LOCALE, CALENDAR_EN } from './supported-languages';
import { MultiLanguageState } from '../interface/common/MultiLanguageState';
import log from '../configurations/LogLevel';


const IntlProviderWrapper = (props: any) => {
    const { children } = props;

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

    const switchToLanguage = (locale: string) => {
        return SET_CALENDAR_LOCALE(locale)
    };

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

    const [languageState, setLanguageState] = useState<MultiLanguageState>({
        locale: userLanguage.userLang,
        messages: userLanguage.messages,
        switchToLanguage: switchToLanguage(userLanguage.userLang),
        textComponent: Fragment,
        calendar: userLanguage.calendar
    })

    return (
        <IntlProvider key={languageState.locale}
            locale={languageState.locale}
            messages={languageState.messages}
            defaultLocale="en"
            textComponent={languageState.textComponent}
        >
            {children}
        </IntlProvider>
    );

}

export { IntlProviderWrapper }
