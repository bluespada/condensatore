import {  } from 'solid-js';
import '@app/src/assets/main.scss';
import { Router } from '@solidjs/router';
import { router } from '@app/src/router';

export default function App() {
    return (<>
        <Router>{router}</Router>
    </>)
}
