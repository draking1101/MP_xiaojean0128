import React from 'react';
import { HEADER } from '@/styles/const';

export const Merch = () => {
    return (
        <div style={styles.merch}>
            <h1>
                Hello, merch!
            </h1>
        </div>

    )
}

const styles: { [key: string]: React.CSSProperties } = {
    merch: {
        marginTop: HEADER.height,
        height: 1000,
    }
}
