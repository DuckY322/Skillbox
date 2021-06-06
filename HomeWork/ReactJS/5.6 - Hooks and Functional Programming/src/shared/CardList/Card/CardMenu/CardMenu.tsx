import React from 'react';
import styles from './cardMenu.css'
import {Dropdown} from "../../../Dropdown";
import {CardMenuButton} from "./CardMenuButton";
import {GenericList} from "../../../GenericList";
import {generateRandomString} from "../../../../utils/react/generaterandomIndex";

const CardMenuItem = [
    {text: 'Скрыть'},
    {text: 'Пожаловаться'},
    {text: 'Закрыть'}
]

export function CardMenu() {
    const handleItemClick = (text: string, id: string) => {
        console.log(text + ' | ID: ' + id);
    }

    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
            <Dropdown
                // onOpen={() => console.log('Menu is opened')}
                // onClose={() => console.log('Menu is closed')}
                isOpen={isOpen}
                button={<CardMenuButton/>}>
                    <GenericList list={CardMenuItem.map((item) => (
                        {
                            ...item,
                            id: generateRandomString(32),
                            onClick: handleItemClick,
                            // As: "li"
                        }
                    ))}/>
            </Dropdown>
        </div>
    );
}
