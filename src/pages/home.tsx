import React, { useState } from 'react';
// style
import { GLOBAL, HEADER } from '@/styles/const';
import '@/styles/home.css';  // 導入CSS
// Components
import { ReactTyped } from 'react-typed';
import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight as RegularCircleRight } from '@fortawesome/free-regular-svg-icons'

export const Home = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].home;

    // State to keep track of the current video URL
    const [currentVideoUrl, setCurrentVideoUrl] = useState("https://www.youtube.com/embed/Q-wmmlCssRE?si=ATH1j_IjZe_283X-");

    // List of episode URLs (you can add more)
    const episodeList = [
        { title: [currentText.episode1], url: "https://www.youtube.com/embed/Q-wmmlCssRE?si=ATH1j_IjZe_283X-" },
        { title: [currentText.episode2], url: "https://www.youtube.com/embed/OIBhgtH8SHQ?si=6RcqicnE8G5cdc-p" },
        { title: [currentText.episode3], url: "https://www.youtube.com/embed/ipKDyPPL_W8?si=T-HWtm0M_7ow_Bfi" },
        { title: [currentText.episode4], url: "https://www.youtube.com/embed/QXXlgIZg4tQ?si=D6ifXPp6fJAgLJo0" },
        { title: [currentText.episode5], url: "https://www.youtube.com/embed/V2DIcU2ev0Q?si=HgZALOW0Zczri9RW" },
    ];

    // Function to handle episode click
    const handleEpisodeClick = (url: string) => {
        setCurrentVideoUrl(url);
    };

    return (
        <div style={styles.home}>
            <div className='home-banner'>
                <ReactTyped
                    strings={[currentText.banner.bannerTitle1]}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={0} // 文字出現的延遲
                />
                <br />
                <ReactTyped
                    strings={[currentText.banner.bannerTitle2]}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={1500}
                />
                <br />
                <ReactTyped
                    strings={[currentText.banner.bannerTitle3]}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={2500}
                />
                <br />
                <ReactTyped
                    strings={[currentText.banner.bannerTitle4]}
                    typeSpeed={40}
                    showCursor={false}
                    startDelay={3500}
                />
                <br />
                <a className='home-followButton' href='https://www.youtube.com/watch?v=-34xIBbxBn8'>
                    <ReactTyped
                        strings={[currentText.banner.buttonText]}
                        typeSpeed={40}
                        showCursor={false}
                        startDelay={4500}
                    />
                </a>
            </div>

            <section className='home-section'>
                <div style={styles.section1Container} className='home-section1Container'>
                    <div className='home-section1IntroArea'>
                        <img src={require('@/assets/xiaojean/A.無分類/003-小靜.png')} alt="Logo" style={styles.section1Image} />
                        <p style={styles.section1Title}>小靜しずか</p>
                        <p>
                            <ul style={styles.section1content}>
                                <li>{currentText.section1.intro.age}</li>
                                <li>{currentText.section1.intro.birthday}</li>
                                <li>{currentText.section1.intro.favoriteFood}</li>
                                <li>{currentText.section1.intro.hobby}</li>
                                <li>{currentText.section1.intro.favoriteGame}</li>
                                <li>{currentText.section1.intro.notice1}</li>
                                <li>{currentText.section1.intro.notice2}</li>
                                <li>{currentText.section1.intro.notice3}</li>
                            </ul>
                        </p>
                    </div>
                    <div className='home-section1LinkArea'>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href="https://reurl.cc/zrE8L7" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}

                                    src={require("@/assets/xiaojean/C.社群網站的icon/Marshmallow-white.png")}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.marshmallow.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.marshmallow.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href="https://www.twitch.tv/xiaojean0128" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require("@/assets/xiaojean/C.社群網站的icon/Twitch-white.png")}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.twitch.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.twitch.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結"
                                href="https://www.instagram.com/xiaojean.0128?igshid=YmMyMTA2M2Y%3D" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require('@/assets/xiaojean/C.社群網站的icon/Instagram-white.png')}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.instagram.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.instagram.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href="https://www.youtube.com/@xiaojean0128" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require('@/assets/xiaojean/C.社群網站的icon/Youtube-white.png')}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.youtube.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.youtube.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href="https://x.com/xiaojean0128" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require("@/assets/xiaojean/C.社群網站的icon/Twitter-white.png")}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.twitter.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.twitter.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href="https://discord.gg/wyCzz4MJnh" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require("@/assets/xiaojean/C.社群網站的icon/Discord-white.png")}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.discord.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.discord.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                        <li style={styles.section1LinkItem}>
                            <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結"
                                href="https://www.facebook.com/xiaojean0128/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" rel="noreferrer">
                                <img
                                    style={styles.section1LinkItemImage}
                                    src={require("@/assets/xiaojean/C.社群網站的icon/Facebook-white.png")}
                                    alt="圖片丟失，請聯繫嘯天"
                                />
                                <div style={styles.section1LinkItemContentContainer}>
                                    <h1 style={styles.section1LinkItemContentTitle}>{currentText.section1.linkItem.facebook.title}</h1>
                                    <p style={styles.section1LinkItemContentSubtitle}>{currentText.section1.linkItem.facebook.subtitle}</p>
                                </div>
                                <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
                            </a>
                        </li>
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    home: {
        marginTop: HEADER.height,
        height: 'auto',
        padding: '0 0 15px',
        backgroundColor: GLOBAL.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // section 1 - introduction
    section1Container: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
    },
    section1Image: {
        height: '160px',
        width: '160px',
        borderRadius: '50%',
        border: '2px solid #ffd3e4',
        marginBottom: '10px'
    },
    section1Title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffd3e4',
        marginBottom: '5px'
    },
    section1content: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#D4EDFF',
    },
    // section1 - link item
    section1LinkItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: 'auto',
        marginBottom: '8px',
        borderRadius: '10px',
        padding: '10px 20px',
    },
    section1LinkContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    section1LinkItemImage: {
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section1LinkItemContentContainer: {
        width: '100%',
    },
    section1LinkItemContentTitle: {
        color: '#ffd3e4',
    },
    section1LinkItemContentSubtitle: {
        color: '#D4EDFF',
    },
};
