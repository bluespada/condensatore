import {} from 'solid-js';
import { useWrap } from '@app/src/core/middleware';

export const SignInViews = () => {
    return (<>
        <div class="w-full h-full min-h-screen flex flex-col items-center justify-center">
            <button class="btn btn-sm btn-primary">
                This is from tailwind 
            </button>
        </div>
    </>)
}

export default useWrap(
    SignInViews,
);
