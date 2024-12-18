import {  } from 'solid-js';
import '@fontsource/geist-sans';
import '@fontsource/plus-jakarta-sans';
import '@app/src/assets/main.scss';
import { Router } from '@solidjs/router';
import { router } from '@app/src/router';
import SessionProvider from '@app/src/provider/SessionProvider';

export default function App() {
    return (<>
        <SessionProvider>
            <Router>{router}</Router>
        </SessionProvider>
    </>)
}
