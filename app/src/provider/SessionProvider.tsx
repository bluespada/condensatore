import { createSignal, createContext, createEffect,useContext, JSX } from 'solid-js';
import { createStore } from 'solid-js/store';

export const SessionContext = createContext();

export default function SessionProvider(props: any) {
    const [session, setSession] = createStore({
        id: 0,
        name: ""
    });
    const value = [
        session,
        {
            set(value: { id:number, name: string }){
                setSession(value);
            }
        }
    ]
    createEffect(() => console.log(value), [value])
    return (
        <SessionContext.Provider value={value}>
            {props.children}
        </SessionContext.Provider>
    );
}

export const useSession = () => useContext(SessionContext)
