import React from 'react';
import styles from './content.css'

interface iContentProps {
    children?: React.ReactNode;
}

export function Content({children}: iContentProps) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    );
}
