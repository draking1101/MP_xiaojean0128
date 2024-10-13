import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Styles
import { HEADER } from '@/styles/const';
import '@/styles/header.css';  // 導入CSS
// Components
import { TEXT } from '@/components/const'
import { SwtichLanguageButton } from '@/components/switch_language_button';

export const Header = () => {
    const [language, setLanguage] = useState<'en' | 'zh'>('zh'); // 狀態管理語言，默認為中文

    function changeLanguage() {
        setLanguage(language === 'zh' ? 'en' : 'zh')
    }

    return (
        <header style={styles.header}>
            {/* LOGO 部分 */}
            <div style={styles.logoContainer} className='logoContainer'>
                <Link to="/" style={styles.logoLink}>
                    <img src={require('@/assets/xiaojean/A.無分類/003-小靜.png')} alt="Logo" style={styles.logo} />
                    <span style={styles.logoText}>小靜しずか</span>
                </Link>
            </div>

            {/* 導航欄 */}
            <nav style={styles.nav} className='nav'>
                <ul style={styles.navList}>
                    <li>
                        <Link to="/" style={styles.navLink}>{TEXT[language].header.home}</Link>
                    </li>
                    <li>
                        <Link to="/news" style={styles.navLink}>{TEXT[language].header.news}</Link>
                    </li>
                    <li>
                        <Link to="/merch" style={styles.navLink}>{TEXT[language].header.merch}</Link>
                    </li>
                    <li>
                        <Link to="/about" style={styles.navLink}>{TEXT[language].header.about}</Link>
                    </li>
                    <li>
                        <Link to="/rule" style={styles.navLink}>{TEXT[language].header.rule}</Link>
                    </li>
                </ul>
            </nav>

            {/* 切換語言按鈕 */}
            <SwtichLanguageButton
                language={language}
                onClick={changeLanguage}
            />
        </header>
    );
};

// 樣式
const styles: { [key: string]: React.CSSProperties } = {
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: HEADER.height,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: HEADER.backgroundColor,
        color: '#fff',
        width: '100%',
        zIndex: 100,
    },
    logoContainer: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
    },
    logoLink: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    logo: {
        height: HEADER.height,
        cursor: 'pointer',
    },
    logoText: {
        fontSize: HEADER.logoFontSize,
        fontWeight: 'bold',
        color: '#ffd3e4',
    },
    nav: {
        flex: '2',
        textAlign: 'right',
        paddingRight: '20px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    navLink: {
        color: HEADER.navTextColor,
        textDecoration: 'none',
        fontSize: HEADER.navTextFontSize,
        fontWeight: '500',
    }
};

// export default Header;
