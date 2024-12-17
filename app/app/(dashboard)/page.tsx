"use server";
import React from 'react';
import client from '@shd/capac';

export default async function AppDashboard(){

    const res = await client.rawCall("Users.Read", []);
    return (<>
        <span>result: {JSON.stringify(res)}</span>
    </>);
}
