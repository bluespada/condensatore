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
export type InputProps = InputSchema & React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
};

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
        <div
            className="flex flex-col gap-1"
        >
            <label htmlFor={props.name}>{props.label}</label>
            <div
                className={`rounded-lg border dark:border-gray-600 border-gray-300 px-2 py-1.5 flex flex-col gap-2`}
            >
                <input className={`rounded-lg bg-transparent w-full hover:border-none hover:outline-none focus:outline-none focus:border-none`} {...props} />
            </div>
        </div>
    </>);
}

/**
 * The props for the textarea component.
 * @typedef {Object} TextAreaProps
 * @property {string} label - The label of the textarea.
 * @property {ZodSchema} schema - The zod schema to validate the textarea value.
 * @property {function} issueCallback - The callback function to call when the value is invalid.
 * The callback function will be called with the validation issue as its argument.
 * The issue has the following properties:
 * - `code`: The code of the issue.
 * - `message`: The message of the issue.
 * - `path`: The path of the issue.
 * - `expected`: The expected value.
 * - `received`: The received value.
 * - `name`: The name of the issue.
 * @property {React.TextareaHTMLAttributes<HTMLTextAreaElement>} - The textarea element attributes.
 */
export type TextAreaProps = InputSchema & React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
}

/**
 * TextArea component is a wrapper around html textarea element.
 * It validates the value of the textarea with the given schema.
 * If the value is invalid, it calls the issueCallback function with the validation issues.
 * @example
 * <TextArea
 *     label="Description"
 *     name="description"
 *     schema={z.string().min(10, { message: 'Your description is too short.' })}
 *     issueCallback={(issues) => {
 *         console.error(issues);
 *     }}
 * />
 * @param {TextAreaProps} props - The props for the textarea component.
 * @returns {JSX.Element} - The input component
 */
export function TextArea(props: TextAreaProps){
    return (<>
        <div
            className="flex flex-col gap-1"
        >
            <label htmlFor={props.name}>{props.label}</label>
            <div
                className={`rounded-lg border dark:border-gray-600 border-gray-300 px-2 py-1.5 flex flex-col gap-2`}
            >
                <textarea className={`rounded-lg bg-transparent w-full hover:border-none hover:outline-none focus:outline-none focus:border-none`} {...props} />
            </div>
        </div>
    </>)
}

export interface SelectionAttribute<T> {
    label?: string
    prefix?: React.ReactNode
    options: T[]
};

export type SelectionProps<T> = InputSchema & SelectionAttribute<T> & React.InputHTMLAttributes<HTMLInputElement>;

export function Selection<T>(props: SelectionProps<T>){
    return (<>
        <div
            className="flex flex-col gap-1"
        >
            <label htmlFor={props.name}>{props.label}</label>
            <div
                className={`flex flex-row items-center cursor-pointer gap-2 rounded-lg border dark:border-gray-600 border-gray-300 px-2 py-1.5`}
            >
                {props.prefix}
                <input
                    className={`rounded-lg bg-transparent cursor-pointer w-full hover:border-none hover:outline-none focus:outline-none focus:border-none`} 
                    readOnly
                    defaultValue={""}
                    {...props} 
                />

            </div>
        </div>
    </>);
}
