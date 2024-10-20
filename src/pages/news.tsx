import React from 'react';
import { HEADER } from '@/styles/const';

export const News = () => {
    return (
        <div style={styles.news}>
            <h1>
                Hello, news!
            </h1>
        </div>

    )
}

const styles: { [key: string]: React.CSSProperties } = {
    news: {
        marginTop: HEADER.height,
        height: 1000,
    }
}
