import React from 'react';
import styles from './cardMenu.css'
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/react/generaterandomIndex";
import {MenuIcon, CommentIcon, ShareIcon, HideIcon, SaveIcon, ReportIcon } from '../../../Icons';

const CardMenuItem = [
    {
        text: 'Комментарии',
        img: <CommentIcon style={styles.menuItemImage}/>
    },
    {
        text: 'Поделиться',
        img: <ShareIcon style={styles.menuItemImage}/>
    },
    {
        text: 'Скрыть',
        img: <HideIcon style={styles.menuItemImage}/>
    },
    {
        text: 'Сохранить',
        img: <SaveIcon style={styles.menuItemImage}/>
    },
    {
        text: 'Пожаловаться',
        img: <ReportIcon style={styles.menuItemImage}/>
    },
    {
        text: 'Закрыть'
    }
]

interface ICardMenuProps {
    postId: string;
}

export function CardMenu({postId}: ICardMenuProps) {
    const handleItemClick = (text: string, id: string) => {
        console.log(text + ' | ID: ' + id);
        console.log('Post: ' + postId)
    }

    return (
        <div className={styles.menu}>
            <Dropdown
                button={
                    <button className={styles.menuButton}>
                        <MenuIcon/>
                    </button>
                }>
                    <GenericList list={CardMenuItem.map((item) => (
                        {
                            ...item,
                            id: generateRandomString(32),
                            onClick: handleItemClick,
                            className: styles.menuItem,
                        }
                    ))}/>
            </Dropdown>
        </div>
    );
}
