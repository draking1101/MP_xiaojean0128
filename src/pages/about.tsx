import React from 'react';
import { HEADER } from '@/styles/const';

export const About = () => {
    return (
        <div style={styles.about}>
            <h1>
                Hello, about!
            </h1>
        </div>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    about: {
        marginTop: HEADER.height,
        height: 1000,
    }
}
