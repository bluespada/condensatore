import  type { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';
import { Portal } from 'solid-js/web';


export const router : RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("@app/src/app/dashboard/DashboardViews"))
    },
    {
        path: "/signin",
        component: lazy(() => import("@app/src/app/signin/signin"))
    }
];
