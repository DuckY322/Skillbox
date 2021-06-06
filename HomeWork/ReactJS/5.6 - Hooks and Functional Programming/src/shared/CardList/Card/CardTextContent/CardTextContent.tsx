import React from 'react';
import styles from './cardTextContent.css'

export function CardTextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://cdn.dribbble.com/users/5559401/avatars/normal/3e6b68e0fff9649e21cc2a5495f605a9.jpg"
                        alt="avatar"/>
                    <a href="#user-irl" className={styles.username}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}>
                        <span className={styles.publishedLabel}>
                            опубликованно
                        </span>
                         4 часа назад
                    </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>
                    Следует отметить, что новая модель организованной деятельности. Следует отметить, что новая
                    модель организованной деятельности
                </a>
            </h2>
        </div>
    );
}
