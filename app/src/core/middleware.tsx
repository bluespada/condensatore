import { Component, createContext, onMount, createSignal, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';

const MiddlewareContext = createContext();

export type IMiddleware = ((ctx: any) => Promise<void> | void)

export interface MiddlewareContext {
    next: () => void
    redirect: (url: string) => void
}

const Renderer = (Props: { component: Component, middleware: IMiddleware[] }) => {
    const [state, context] = useContext(MiddlewareContext) as any;

    const navigate = useNavigate();

    context.redirect = (url: string) => navigate(url, { replace: true });
    
    onMount(async () => {
        if(Props.middleware.length == 0) context.next();
        for(const mid of Props.middleware){
            await mid(context);
        }
    });
    return (<>
        { state.allowed ? <Props.component/> : null }
    </>)
}


export const useWrap = (component: Component, middleware?: IMiddleware[]) => {
    const [state, setState] = createStore<{allowed: boolean, redirect: string | null}>({ allowed: false, redirect: null })
    const value = [
        state,
        {
            next: () => setState({ allowed: true }),
        } as MiddlewareContext,
    ]
    return () => {
        return (<>
            <MiddlewareContext.Provider value={value}>
                <Renderer component={component} middleware={middleware??[]}/>
            </MiddlewareContext.Provider>
        </>);
    };
}


