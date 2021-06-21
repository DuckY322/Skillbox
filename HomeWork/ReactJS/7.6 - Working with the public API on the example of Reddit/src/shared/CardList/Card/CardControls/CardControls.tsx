import React from 'react';
import styles from './cardControls.css'
import {EIcons, Icon} from "../../../Icon";

export function CardControls() {
    return (
        <div className={styles.controls}>
            <div className={styles.karmaCounter}>
                <button className={styles.up}>
                    <Icon name={EIcons.ControlsKarma} sizeX={19} sizeY={10}/>
                </button>
                <span className={styles.karmaValue}>234</span>
                <button className={styles.down}>
                    <Icon name={EIcons.ControlsKarma} sizeX={19} sizeY={10}/>
                </button>
            </div>

            <button className={styles.commentsButton}>
                <Icon name={EIcons.Comment}/>
                <span className={styles.commentsNumber}>13</span>
            </button>

            <div className={styles.actions}>
                <button className={styles.shareButton}>
                    <Icon name={EIcons.ControlsShare} sizeX={20} sizeY={20}/>
                </button>
                <button className={styles.saveButton}>
                    <Icon name={EIcons.ControlsSave} sizeX={20} sizeY={20}/>
                </button>
            </div>
        </div>
    );
}
