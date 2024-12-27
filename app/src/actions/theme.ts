"use server";
import { cookies } from 'next/headers';

export async function ActionSwitch(formData: FormData){
    const c = await cookies();
    const theme = c.get("theme")?.value || "light";
    if(theme == "light"){
        c.set("theme", "dark");
    }else{
        c.set("theme", "light");
    }
}
