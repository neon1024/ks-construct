"use client";

import { Locale } from "@/i18n/config";
import { Context, createContext, ReactNode } from "react";

import { useContext } from "react";

type AppContextProviderProps = {
    locale: Locale;
    translations: any;
    children: ReactNode;
};

type AppContextType = {
    locale: Locale | null;
    translations: Translations | null;
};

type Translations = {
    navigation: {
        header: { home: string; projects: string; contact: string };
        footer: { location: string; contact: string };
    };
};

const defaultValue: AppContextType = {
    locale: null,
    translations: null,
};

const AppContext: Context<AppContextType> = createContext(defaultValue);

const useAppContext = () => {
    return useContext(AppContext);
};

export function AppContextProvider(props: AppContextProviderProps) {
    const value = {
        locale: props.locale,
        translations: props.translations,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}

export default useAppContext;
