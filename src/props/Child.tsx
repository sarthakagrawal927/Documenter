import React from 'react';

interface ChildProps {
    color : string;
    onClick:  () => void;
}

export const Child = ({color ,onClick} :ChildProps) => {
    return (
        <div>
            <button onClick={onClick}>Click me</button>
            {color}
        </div>
    );
};


export const ChildasFC: React.FC<ChildProps> = ({color}) => {
    return <div>{color}</div>
}