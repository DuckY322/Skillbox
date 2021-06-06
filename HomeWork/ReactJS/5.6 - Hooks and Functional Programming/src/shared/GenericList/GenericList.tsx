import React from 'react';

interface IItem {
    id: string;
    text: string;
    onClick?: (text: string, id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => {}

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'div', text, onClick= noop, className, id, href}) => (
                <As
                    className={className}
                    onClick={() => onClick(text,id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    );
}
