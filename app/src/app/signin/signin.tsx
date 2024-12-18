import {} from 'solid-js';
import { useWrap } from '@app/src/core/middleware';

export const SignInViews = () => {
    return (<>
        <span>Sign In Pages</span>
    </>)
}

export default useWrap(
    SignInViews,
);
