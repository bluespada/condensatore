/**
 * copyright (c) 2024 condensatore contributor
 * copyright (c) 2024 bluespada <pentingmain@gmail.com>
 * 
 * this file is part of condensatore.
 * 
 * condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the mit license.
 * 
 * you should have received a copy of the mit license along with condensatore.
 * if not, see <https://mit-license.org/>.
 * 
*/

"use server";
import { cookies } from 'next/headers';
import { IThemeMode } from '@app/utils/themes/types';

export interface IResultThemes {
    value: IThemeMode,
    setTo: (val: IThemeMode) => void
}

export async function useThemes() {
    const sessionCookies = await cookies();
    const value : string = sessionCookies.get("theme")?.value??"light";
    
    const themeSwitcher = async (value: IThemeMode) => {
        sessionCookies.set("theme", value);
    }

    return {
        value,
        setTo: themeSwitcher
    }
}

// The Action to Switch Theme
export async function ActionSwitchTheme(formData: FormData) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setTo } = await useThemes();
    const newValue : IThemeMode = (formData.get("theme") as IThemeMode)??"light";
    setTo(newValue);
}
