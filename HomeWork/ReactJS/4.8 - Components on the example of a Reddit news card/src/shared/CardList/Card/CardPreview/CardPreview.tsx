import React from 'react';
import styles from './cardPreview.css'

export function CardPreview() {
    return (
            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://cdn.dribbble.com/users/5559401/screenshots/15701733/media/933bd8ec91270ad6377fc02086f30a37.jpeg"
                    alt="postImage"/>
            </div>
    );
}
