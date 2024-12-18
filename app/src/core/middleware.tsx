import {
    Component,
    createContext,
    onMount,
    useContext,
} from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';

/**
 * Middleware Context
 */
const MiddlewareContext = createContext();

/**
 * Middleware context for the application.
 * Contains next and redirect functions that can be used by middleware.
 */
export interface MiddlewareContext {
    /**
    * Function to proceed to the next middleware.
    */
    next: () => void;
    /**
    * Function to redirect to another URL.
    * @param url URL to redirect to.
    */
    redirect: (url: string) => void;
}

/**
 * Type for middleware function.
 * Middleware function should return Promise<void> or void.
 */
export type IMiddleware = ((ctx: MiddlewareContext) => Promise<void> | void);

/**
 * Renderer component responsible for rendering a component with middleware.
 * @param Props component to render and middleware to execute.
 */
const Renderer = (Props: { component: Component; middleware: IMiddleware[] }) => {
    const [state, context] = useContext(MiddlewareContext) as any;

    const navigate = useNavigate();

    /**
    * Redirect function that will redirect to another URL.
    * @param url URL to redirect to.
    */
    context.redirect = (url: string) => navigate(url, { replace: true });

    /**
    * Function that will be executed when the component is mounted.
    */
    onMount(async () => {
        context.next();
        Props.middleware.forEach(async (m) => {
            await m(context);
        })
    });

    return (<>
        { state.allowed ? <Props.component/> : (<>fallback</>) }
    </>)
};

/**
 * useWrap function that wraps a component with middleware.
 * @param component component to wrap.
 * @param middleware middleware to execute.
 */
export const useWrap = (component: Component, middleware?: IMiddleware[]) => {
    const [state, setState] = createStore<{ allowed: boolean; redirect: string | null }>({
        allowed: false,
        redirect: null,
    });

    const value = [
        state,
        {
            next: () => setState({ allowed: true }),
        } as MiddlewareContext,
    ];

    return () => {
        return (
            <>
                <MiddlewareContext.Provider value={value}>
                    <Renderer component={component} middleware={middleware ?? []} />
                </MiddlewareContext.Provider>
            </>
        );
    };
};

