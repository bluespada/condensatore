import { Component } from 'solid-js';
import { useWrap } from '@app/src/core/middleware';
import auth from '@app/src/middleware/auth';

const DashboardViews : Component = ({ res }: any) => {
    return (<>
        <span>
            This is dashboard
        </span>
    </>)
}

export default useWrap(
    DashboardViews,
    [auth]
);
