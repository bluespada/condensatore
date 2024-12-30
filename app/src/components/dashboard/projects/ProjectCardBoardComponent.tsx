import React from 'react';

/** 
 * ProjectCardBoardComponentProps 
 * @typedef {Object} ProjectCardBoardComponentProps
 * @property {string} name - Projects name
 */
export interface ProjectCardBoardComponentProps {
    name?: string
}

/**
 * ProjectCardBoardComponent
 */
export default function ProjectCardBoardComponent(props: ProjectCardBoardComponentProps){
    return (<>
        <div
            className="card"
        >

        </div>
    </>);
}
