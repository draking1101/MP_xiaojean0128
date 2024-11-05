import React from 'react';
import { FOOTER } from '@/styles/const';
import { TEXT, WEB_DETAILS } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const Footer = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].footer;

    return (
        <footer style={styles.footer}>
            {/* Footer Bottom Text */}
            <div style={styles.footerBottom}>
                <p>{currentText.text}</p>
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
        color: '#D4EDFF',
        textAlign: 'center'
    },
    title: {
        marginBottom: '5px'
    },
};

