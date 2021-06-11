import React from 'react';
import { CommentIcon, ControlsKarmaIcon, ControlsSaveIcon, ControlsShareIcon } from '../../../Icons';
import styles from './cardControls.css'

export function CardControls() {
    return (
        <div className={styles.controls}>
            <div className={styles.karmaCounter}>
                <button>
                    <ControlsKarmaIcon style={styles.up}/>
                </button>
                <span className={styles.karmaValue}>234</span>
                <button>
                    <ControlsKarmaIcon style={styles.down}/>
                </button>
            </div>

            <button className={styles.commentsButton}>
                <CommentIcon style={styles.commentsIcon}/>
                <span className={styles.commentsNumber}>13</span>
            </button>

            <div className={styles.actions}>
                <button className={styles.shareButton}>
                    <ControlsShareIcon/>
                </button>
                <button className={styles.saveButton}>
                    <ControlsSaveIcon/>
                </button>
            </div>
        </div>
    );
}
