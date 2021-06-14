import React from "react";
import styles from "./icon.css"
import classNames from "classnames"
import {
    CardMenuIcon,
    CommentIcon,
    ControlsKarmaIcon,
    ControlsSaveIcon,
    ControlsShareIcon,
    HideIcon,
    ReportIcon,
    SaveIcon,
    ShareIcon
} from "../Icons";

export enum EIcons {
    CardMenu = 'CardMenuIcon',
    Comment = 'CommentIcon',
    ControlsKarma = 'ControlsKarmaIcon',
    ControlsSave = 'ControlsSaveIcon',
    ControlsShare = 'ControlsShareIcon',
    Hide = 'HideIcon',
    Report = 'ReportIcon',
    Save = 'SaveIcon',
    Share = 'ShareIcon',

}

type TIconSize = 5 | 10 | 12 | 14 | 16 | 19 | 20;

type TIconMargin = 4 | 5 | 6;

interface IIconProps {
    name: EIcons;
    sizeX?: TIconSize;
    sizeY?: TIconSize;
    mobileSizeX?: TIconSize;
    mobileSizeY?: TIconSize;
    tabletSizeX?: TIconSize;
    tabletSizeY?: TIconSize;
    desktopSizeX?: TIconSize;
    desktopSizeY?: TIconSize;
    mr?: TIconMargin;
    mMr?: TIconMargin;
    tMr?: TIconMargin;
    dMr?: TIconMargin;
}

export function Icon(props: IIconProps) {
    const {
        name,
        sizeX = 14,
        sizeY = 14,
        mobileSizeX,
        mobileSizeY,
        tabletSizeX,
        tabletSizeY,
        desktopSizeX,
        desktopSizeY,
        mr,
        mMr,
        tMr,
        dMr,
    } = props;

    const classes = classNames(
        styles[`sX${sizeX}`],
        styles[`sY${sizeY}`],
        {[styles[`mX${mobileSizeX}`]]: mobileSizeX},
        {[styles[`mY${mobileSizeY}`]]: mobileSizeY},
        {[styles[`tX${tabletSizeX}`]]: tabletSizeX},
        {[styles[`tY${tabletSizeY}`]]: tabletSizeY},
        {[styles[`dX${desktopSizeX}`]]: desktopSizeX},
        {[styles[`dY${desktopSizeY}`]]: desktopSizeY},
        {[styles[`mr${mr}`]]: mr},
        {[styles[`mMr${mMr}`]]: mMr},
        {[styles[`tMr${tMr}`]]: tMr},
        {[styles[`dMr${dMr}`]]: dMr},
    );

    switch (name) {
        case EIcons.CardMenu: {
            return (
                <CardMenuIcon style={classes}/>
            )
        }
        case EIcons.Comment: {
            return (
                <CommentIcon style={classes}/>
            )
        }
        case EIcons.ControlsKarma: {
            return (
                <ControlsKarmaIcon style={classes}/>
            )
        }
        case EIcons.ControlsSave: {
            return (
                <ControlsSaveIcon style={classes}/>
            )
        }
        case EIcons.ControlsShare: {
            return (
                <ControlsShareIcon style={classes}/>
            )
        }
        case EIcons.Hide: {
            return (
                <HideIcon style={classes}/>
            )
        }
        case EIcons.Report: {
            return (
                <ReportIcon style={classes}/>
            )
        }
        case EIcons.Save: {
            return (
                <SaveIcon style={classes}/>
            )
        }
        case EIcons.Share: {
            return (
                <ShareIcon style={classes}/>
            )
        }
    }
}