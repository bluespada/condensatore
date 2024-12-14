/**
 * Copyright (C) 2024 Condensatore Contributor
 * Copyright (C) 2024 Bluespada <pentingmain@gmail.com>
 *
 * This file is part of Condensatore.
 *
 * Condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 * You should have received a copy of the MIT License along with Condensatore.
 *
 * If not, see <https://mit-license.org/>.
 *
*/

import React from 'react';
import { LuDot } from 'react-icons/lu';
import { ZodSchema, ZodIssue } from 'zod';

export interface IInputValidator {
    schema?: ZodSchema
}

export type InputProps = IInputValidator & React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
};

export function Input(props: InputProps) : React.ReactNode {
    const [validationError, setValidationError] = React.useState<ZodIssue[]>([]);
    const validateInput = () => {
        if(!props.schema) return;
        const res = props.schema.safeParse(props.value);
        if(!res.success){
            setValidationError(res.error.errors);
        }else{
            setValidationError([]);
        }
    }
    return (<>
        <div className="w-full flex flex-col gap-2">
            <label
                className="text-sm font-semibold"
                htmlFor={props.name}
            >
                { props.label }
            </label>
            <div className={`rounded-lg border ${validationError.length == 0 ? 'dark:border-gray-300/20 border-gray-300' : 'border-red-500'} px-3 py-1.5`}>
                <input
                    className="text-sm w-full"
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    value={props.value}
                    required={props.required}
                    onBlur={validateInput}
                    onChange={(e) => {
                        if(props.onChange) props.onChange(e);
                        // add validation on changes
                        validateInput();
                    }}
                />
            </div>
            <ul>
                { validationError.map((i, k) => (<li 
                    key={`error-key-${k}`}
                    className="text-red-500 text-xs flex flex-row items-center"
                    style={{fontFamily: "Geist Sans"}}
                >
                    <LuDot size={16}/>
                    { i.message }
                </li>)) }
            </ul>
        </div>
    </>)
}
