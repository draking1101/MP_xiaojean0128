import React from 'react';
import { HEADER } from '@/styles/const';

const Home = () => {
    return (
        <div style={styles.home}>
            <h1>
                Hello, home!
            </h1>
        </div>
    )
}

export default Home;

const styles: { [key: string]: React.CSSProperties } = {
    home: {
        marginTop: HEADER.height,
        height: 1000,
    }
}
