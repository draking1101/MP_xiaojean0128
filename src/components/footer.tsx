import React from 'react';
import { FOOTER } from '@/styles/const';

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/* Footer Bottom Text */}
            <div style={styles.footerBottom}>
                <p>本站由 龍嘯天 所設計 ・ Powered by React @ 2024</p>
            </div>
        </footer>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        backgroundColor: FOOTER.backgroundColor,
        color: '#fff',
        padding: '20px 0',
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column', // 垂直排列
        justifyContent: 'flex-start',
        alignItems: 'flex-start', // 讓所有內容靠左
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    footerBottom: {
        // borderTop: '1px solid #ccc',
        paddingTop: '10px',
        // marginTop: '20px',
        fontSize: '0.85rem',
        color: '#ccc',
        textAlign: 'center'
    },
    title: {
        marginBottom: '5px'
    },
};

