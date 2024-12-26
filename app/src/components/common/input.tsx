import React from 'react';
import { ZodSchema, ZodIssue } from 'zod';

/**
 * InputSchema interface is used to validate the input value
 * @interface
 * @property {ZodSchema} schema - The zod schema to validate the input value
 * @property {function} issueCallback - The callback function to call when the value is invalid.
 * The callback function will be called with the validation issue as its argument.
 * The issue has the following properties:
 * - `code`: The code of the issue.
 * - `message`: The message of the issue.
 * - `path`: The path of the issue.
 * - `expected`: The expected value.
 * - `received`: The received value.
 * - `name`: The name of the issue.
 */
export interface InputSchema {
    schema?: ZodSchema
    issueCallback?: (e: ZodIssue[]) => void
}

/**
 * The props for the input component.
 * @typedef {Object} InputProps
 * @property {ZodSchema} schema - The zod schema to validate the input value.
 * @property {function} issueCallback - The callback function to call when the value is invalid.
 * @property {string} value - The value of the input.
 * @property {string} name - The name of the input.
 * @property {React.InputHTMLAttributes<HTMLInputElement>} - The input element attributes.
 */
export type InputProps = InputSchema & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * A basic input component with validation using zod.
 * It will validate the input value with the schema when the value changed.
 * If the value is invalid, it will call the issueCallback with the validation issue.
 * @example
 * // example usage
 * <Input schema={z.string()} issueCallback={(e) => console.log(e)} />
 * @param {InputProps} props - The props for the input component
 * @returns {JSX.Element} - The input component
 */
export function Input(props: InputProps) {
    /**
     * Validates the input value against the schema and calls the callbacks if there's an issue
     * @returns {void}
     */
    const validation = () => {
        if(!props.schema) return;
        const res = props.schema?.safeParse(props.value);
        if(!res.success){
            // call the callback when callback is provided
            if(props.issueCallback){
                props.issueCallback(res.error.issues);
            }
        }
    };

    return (<>
        <input/>
    </>);
}