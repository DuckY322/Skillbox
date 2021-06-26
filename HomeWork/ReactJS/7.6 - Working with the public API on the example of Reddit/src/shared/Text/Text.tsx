import React from "react";
import styles from "./text.css"
import classNames from "classnames"

export enum EColor {
    black = 'black',
    orange = 'orange',
    green = 'green',
    white = 'white',
    greyF4 = 'greyF4',
    greyF3 = 'greyF3',
    greyD9 = 'greyD9',
    greyC4 = 'greyC4',
    grey99 = 'grey99',
    grey66 = 'grey66',

}

type TTextSize = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3'| 'h4' | 'p' | 'div';
    color?: EColor;
    children: React.ReactNode;
    size: TTextSize;
    mobileSize?: TTextSize;
    tabletSize?: TTextSize;
    desktopSize?: TTextSize;
    bold?: boolean;
}

export function Text(props: ITextProps) {
    const {
        As = 'span',
        color = EColor.black,
        children,
        size,
        mobileSize,
        tabletSize,
        desktopSize,
        bold = false,
    } = props;

    const classes = classNames(
        styles[`s${size}`],
        styles[color],
        {[styles[`m${mobileSize}`]]: mobileSize},
        {[styles[`t${tabletSize}`]]: tabletSize},
        {[styles[`d${desktopSize}`]]: desktopSize},
        {[styles.bold]: bold},
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
    
}