import React from 'react';
import { HEADER } from '@/styles/const';

export const Rule = () => {
    return (
        <div style={styles.rule}>
            <h1>
                Hello, rule!
            </h1>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    rule: {
        marginTop: HEADER.height,
        height: 1000,
    }
}
