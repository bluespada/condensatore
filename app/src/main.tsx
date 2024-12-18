import { JSX } from 'solid-js';
import { render } from 'solid-js/web';
import App from '@app/src/App';
// we will remove this warning after condensatore during stable development state
console.log(
    "%c🚧 Condensatore is in development state, it may not work as intended.\nplease report any issue to https://github.com/mathca-labs/condensatore/issues",
    "color: #F8C806; padding: 1px 4px;",
);

render(() => <App/> as JSX.Element, document.getElementById('farad')!);
