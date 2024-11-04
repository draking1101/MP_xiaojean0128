import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Images
import logo from "@/assets/xiaojean/A.無分類/003-小靜.png"  // Logo
// Styles
import { HEADER } from '@/styles/const';
import '@/styles/header.css';  // 導入CSS
// Components
import { TEXT } from '@/components/const'
import { SwtichLanguageButton } from '@/components/switch_language_button';
import { useLanguage } from '@/components/LanguageContext';

export const Header = () => {
    const { language, changeLanguage } = useLanguage();
    const [openMenu, setOpenMenu] = useState(false); // 漢堡選單狀態

    useEffect(() => {
        // 當視窗寬度低於720px時，如果關閉漢堡選單在將視窗寬度恢復到 > 720px 會發生 導覽列消失的狀況
        // 因此添加監聽器監控寬度變化，當 > 720px 恢復顯示導覽列
        const handleResize = () => {
            const navList = document.getElementById("nav-list");
            if (window.innerWidth >= 720) {
                navList.style.display = "flex";
            } else {
                navList.style.display = "none";
            }
        };

        handleResize();

        // 添加視窗大小監聽器
        window.addEventListener("resize", handleResize);

        // 在組件卸載後，清除監聽器
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 開關漢堡選單
    function toggleMenu() {
        const headerbody = document.getElementById("header-body")
        const nav = document.getElementById("nav")
        const navList = document.getElementById("nav-list")

        if (!openMenu) {
            nav.style.display = "flex"
            headerbody.style.height = "550px"
            navList.style.display = "flex"
        } else {
            headerbody.style.height = "70px"
            navList.style.display = "none"
            window.scrollTo({ top: 0, behavior: 'smooth' }); // 回到頁首
        }
        setOpenMenu(!openMenu);
    }

    return (
        <header id='header-body'>
            {/* 漢堡選單 */}
            <div id="burger-menu-button" onClick={toggleMenu}>
                <div>{(openMenu === true) ? "✖︎" : "☰"}</div>
            </div>
            {/* LOGO 部分 */}
            <div className='logoContainer'>
                <Link to="/" style={styles.logoLink}>
                    <img src={logo} alt="Logo" style={styles.logo} />
                    <span style={styles.logoText}>小靜しずか</span>
                </Link>
            </div>

            {/* 導航欄 */}
            <nav id='nav' className='nav'>
                <ul id='nav-list'>
                    <li onClick={toggleMenu}>
                        <Link to="/" style={styles.navLink}>{TEXT[language].header.home}</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to="/news" style={styles.navLink}>{TEXT[language].header.news}</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to="/merch" style={styles.navLink}>{TEXT[language].header.merch}</Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link to="/about" style={styles.navLink}>{TEXT[language].header.about}</Link>
                    </li>
                    <li onClick={toggleMenu}>
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
