import * as React from "react";

interface IIconProps {
    style?: string;
}

export function ControlsKarmaIcon({style}: IIconProps) {
    return (
        <svg
            className={style}
            width="100%"
            height="100%"
            viewBox="0 0 19 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
        </svg>
    );
}
