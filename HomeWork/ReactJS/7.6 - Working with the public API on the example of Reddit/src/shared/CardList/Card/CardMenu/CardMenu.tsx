import React from 'react';
import styles from './cardMenu.css'
import {Dropdown} from "../../../Dropdown";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/react/generaterandomIndex";
import {EIcons, Icon} from "../../../Icon";

const CardMenuItem = [
    {
        text: 'Комментарии',
        img: <Icon name={EIcons.Comment} mr={6}/>
    },
    {
        text: 'Поделиться',
        img: <Icon name={EIcons.Share} sizeX={12} mr={6}/>
    },
    {
        text: 'Скрыть',
        img: <Icon name={EIcons.Hide} mobileSizeX={12} mobileSizeY={12} mr={5} mMr={6}/>
    },
    {
        text: 'Сохранить',
        img: <Icon name={EIcons.Save} mr={5}/>
    },
    {
        text: 'Пожаловаться',
        img: <Icon name={EIcons.Report} sizeX={16} mobileSizeX={14} mobileSizeY={12} mr={5} mMr={4}/>
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
                        <Icon name={EIcons.CardMenu} sizeX={5} sizeY={20}/>
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
