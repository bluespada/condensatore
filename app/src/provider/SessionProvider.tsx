import {
    createContext,
    useContext
} from 'solid-js';
import { createStore } from 'solid-js/store';

const SessionContext = createContext();


export default function SesionProvider(props: any){
    return (<>
        <SessionContext.Provider value={{}}>
            {props.children}
        </SessionContext.Provider>
    </>)
}
