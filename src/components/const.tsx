import defaultImage from "@/assets/xiaojean/A.無分類/008-rainyDoll.png"  // 預設圖片 
import xiaojeanJail from "@/assets/xiaojean/A.無分類/011-坐牢靜.png"  // News 1 封面
import richXiaoJean from "@/assets/xiaojean/A.無分類/010-揮金如土.png"  // 預設圖片
import lineSitcker from '@/assets/xiaojean/B.周邊/007-Lline貼圖(去背).png' // Line貼圖
import emoji from '@/assets/xiaojean/B.周邊/008-Lline表情符號(去背).png' // Line表情符號
import anniversary_1st from '@/assets/xiaojean/B.周邊/001-一周年周邊套組.png' // 一周年周邊套組
import thousandSub from '@/assets/xiaojean/B.周邊/002-千訂回饋周邊.png' // 千訂回饋周邊
import anniversary_2nd_crowdfunding_01 from '@/assets/xiaojean/B.周邊/003-二周年募資限定周邊_吊飾and飯友.jpg' // 二周年募資限定周邊 - 吊飾 & 飯友
import anniversary_2nd_crowdfunding_02 from '@/assets/xiaojean/B.周邊/004-二周年募資限定周邊_特殊悠遊卡and卡套.jpg' // 二周年募資限定周邊 - 特殊悠遊卡 & 卡套
import anniversary_2nd_crowdfunding_03 from '@/assets/xiaojean/B.周邊/005-二周年回饋周邊_Q版立牌(多邊框+Logo).png' // 二周年募資限定周邊 - Q版立牌
import ff43_01 from '@/assets/xiaojean/B.周邊/006-FF43周邊.jpg'  // FF43周邊
import packageJson from "../../package.json";
const version = packageJson.version;

export const WEB_DETAILS = {
    version: `Ver.${version}` // 網站版本
}

export const TEXT = {
    en: {
        header: {
            logoText: "Xiaojean",
            home: 'Home',
            news: 'News',
            merch: 'Merch',
            about: 'About',
            rule: 'Rules',
        },
        home: {
            banner: {
                bannerTitle1: 'Welcome to Xiaojean Gang ♡',
                bannerTitle2: "I love playing games, drawing, and singing ♡",
                bannerTitle3: "My simple wish is to",
                bannerTitle4: 'bring joy to you during my stream time ♡',
                buttonText: '《Go to watch Virtual skin Debut》',
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: 'Regular streams and live event updates',
                    },
                    youtube: {
                        title: 'YouTube',
                        subtitle: 'Live streams, highlights, covers, and shorts',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: 'Event announcements and appreciation posts',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: 'Event posts, daily stories, and reels',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: 'Thoughts and casual posts',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: 'Event posts and artwork',
                    },
                    discord: {
                        title: 'Discord',
                        subtitle: 'Daily chats and interactions with the community',
                    },
                }
            },
            tear: {
                1: "這是我的粉絲形象心結",
                2: "縮寫跟我的名字XJ一樣",
                3: "肚子上是我的星座水瓶符號",
                4: "因為常常跟大家心結又愛哭",
                5: "所以是淚滴加上心結的元素",
            },
            section2: {
                donate: "Donate",
                item1: "If you like me and want to support, feel free to donate!",
                item2: "Donations will go towards upgrading equipment and commissioning artwork.",
                item3: "Please make sure to eat well and donate within your means.",
                item4: "If you donate, let me know so I can thank you properly!",
                item5: "You can view the history of donation gifts here.",
                item6A: "[Greenworld Technology] ",
                item6B: " [PayPal] ",
                item6C: " [O'Pay]",
            },
            section3: {
                content1: "This is the sponsor of our member Minecraft server. They’re my friends, and if anyone needs to rent a server for gaming, feel free to check them out! They offer different levels of servers to choose from, and if you have any questions, you can ask in their",
                content2: "discord community",
                content3: ". Use my promo code 'xiaojean' for a 5% discount. I hope everyone can support them!",
            },
            rankVideoTitle: 'Valorant Extraordinary Journey',
            episodeTitle: 'Select episode',
            episode1: 'Ep.1 - The opponents never give an ACE😭',
            episode2: 'Ep.2 - Reyna 1v4 Clutch Situation in rank',
            episode3: 'Ep.3 - Losing streak in Platinum ranked games😭',
            episode4: 'Ep.4 - Encountered a cheater in ranked again?!',
            episode5: 'Ep.5 - Facing multiple opponents in clutch situation with Reyna again!',
        },
        news: {
            newsBody: {
                title: 'Latest News',
                category: {
                    all: 'All News',
                    activity: 'Activity News',
                    announcement: 'Announcement News',
                }
            }
            , newsItem: [
                {
                    id: "1",
                    category: 'Stream',
                    demoImage: xiaojeanJail,
                    title: "About the Extraordinary Journey and Streaming Schedule",
                    description: "I've been working hard to rank up in the Extraordinary Journey but the time pressure is really intense...",
                    content: "I’ve been putting in a lot of effort to rank up in the Extraordinary Journey but due to time constraints, the pressure is intense. If I can't achieve my goal by the end of Act 9, this series might come to the end ( I’ll still be ranking, just not as intensively).",
                    content2: "However, I'll continue to work hard on my youtube channel with stream highlights, shorts, covers, and similar content.",
                    content3: "So… if you haven’t watched the latest episode, go check it out! I need your support and love. Love you all!",
                    date: "2024/10/27",
                },
            ]
        },
        merch: {
            category: {
                title1: "Limited Edition Merchandise",
                title2: "Regular Merchandise",
                title3: "Discontinued Merchandise",
            },
            img: {
                default: richXiaoJean,
                lineSitcker: lineSitcker,
                lineEmoji: emoji,
                thousandSub: thousandSub,
                ff43_01: ff43_01,
                anniversary_1st: anniversary_1st,
                anniversary_2nd_crowdfunding_01: anniversary_2nd_crowdfunding_01,
                anniversary_2nd_crowdfunding_02: anniversary_2nd_crowdfunding_02,
                anniversary_2nd_crowdfunding_03: anniversary_2nd_crowdfunding_03,
            },
            title: {
                commingSoon: '《Coming Soon》',
                lineSticker: "Line Stickers",
                lineEmoji: "Line Emojis",
                thousandSub: '1K Subscribers',
                ff43_01: 'FF43 Merchandise',
                anniversary_1st: '1st Anniversary',
                anniversary_2nd_crowdfunding_01: '2nd Anniversary Crowdfunding',
                anniversary_2nd_crowdfunding_02: '2nd Anniversary Crowdfunding',
                anniversary_2nd_crowdfunding_03: '2nd Anniversary Crowdfunding',
            },
            subTitle: {
                default: '',
                lineSticker: "",
                lineEmoji: "",
                thousandSub: 'Includes mouse pad, double-sided pillow',
                ff43_01: 'Signed wall scroll, postcard, canvas bag',
                anniversary_1st: 'Includes standee, fan buddy, keychain',
                anniversary_2nd_crowdfunding_01: 'Keychain & fan buddy',
                anniversary_2nd_crowdfunding_02: 'Special EasyCard & card holder',
                anniversary_2nd_crowdfunding_03: 'Chibi standee',
            },
            link: {
                commingSoon: '《Coming Soon》',
                default: '《See More Details》',
                lineSitcker: 'https://store.line.me/stickershop/product/25838548/zh-Hant?utm_source=gnsh_stickerDetail',
                lineEmoji: "https://store.line.me/emojishop/product/65d99d86357e3d15ccfcf4be/zh-Hant?lang=zh-Hant&utm_source=gnsh_sticonDetail",
            }
        },
        about: {
            basicInfo: {
                title: 'Xiaojean',
                category: "Basic Information",
                height: 'Height：158',
                birthday: 'Birthday: 1/28',
                favoriteFood: 'Favorite Food: Curry',
                hobby: 'Hobbies: Singing, drawing, gaming',
                favoriteGame: 'Games: Mainly Valorant, occasionally trying other games',
                notice1: 'Currently working a full-time job, not a full-time VTuber',
                notice2: 'Please don’t fall for me; I only show favoritism towards girls',
                notice3: 'Collab invites 💌: xiaojean0128@gmail.com',
            },
            milestone: {
                1: "2022.09.13 Started Streaming ✓",
                2: "2022.09.22 Streaming Affiliate ✓",
                3: "2022.09.26 100 Followers ✓",
                4: "2023.01.28 First Driving Stream / Level 4 Vehicle",
                5: "2023.02.08 1000 Followers ✓",
                6: "2023.11.27 1000 Subscribers ✓ Special thanks to Xizhu ♥",
                7: "2024.01.28 Vtuber Debut Stream / Level 16 Vehicle",
                8: "2024.07.30 Twitch Partners ✓",
            },
        },
        footer: {
            text: `This website was designed by Xiaotian ${WEB_DETAILS.version} ・ Powered by React @ 2024`,
        }
    },
    zh: {
        header: {
            logoText: "小靜しずか",
            home: '首頁',
            news: '最新消息',
            merch: '周邊',
            about: '關於我',
            rule: '粉絲守則',
        },
        home: {
            banner: {
                bannerTitle1: "歡迎加入心結幫 ♡",
                bannerTitle2: "我喜歡玩遊戲、畫畫、唱歌 ♡",
                bannerTitle3: "簡單的心願就是",
                bannerTitle4: '希望能在直播的時間讓你們感到快樂 ♡',
                buttonText: '《前往觀看V皮初配信》',
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: '常駐直播、直播活動限動',
                    },
                    youtube: {
                        title: 'Youtube',
                        subtitle: '直播、精華、翻唱、短片',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: '活動貼文、感謝貼文',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: '活動貼文、日常限動、短片',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: '想說的話、日常廢文',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: '活動貼文、繪圖作品',
                    },
                    discord: {
                        title: 'Discord',
                        subtitle: '心結幫日常聊天互動',
                    }
                }
            },
            tear: {
                1: "這是我的粉絲形象心結",
                2: "縮寫跟我的名字XJ一樣",
                3: "肚子上是我的星座水瓶符號",
                4: "因為常常跟大家心結又愛哭",
                5: "所以是淚滴加上心結的元素",
            },
            section2: {
                donate: "抖內",
                item1: "喜歡我想支持我的話可以斗內我喔~",
                item2: "斗內的錢會拿來升級設備及委託圖",
                item3: "想斗內的話請先讓自己吃飽並量力而為 ",
                item4: "有斗內的記得告訴我讓我好好感謝",
                item5: "這裡可以看歷史的斗內贈禮名單",
                item6A: "【綠界科技】",
                item6B: "【PAYPAL】",
                item6C: "【歐富寶】",
            },
            section3: {
                content1: "這是我們會員麥塊伺服器的贊助商，他們是我的朋友，如果大家有需要租伺服器遊玩的話不妨去參考看看，有不同等級主機可以選擇，有問題也可以在他們的",
                content2: "dc群",
                content3: "詢問，使用我的優惠碼 xiaojean還能打95折，希望大家支持他們一下",
            },
            rankVideoTitle: '特戰超凡之旅',
            episodeTitle: '選擇集數',
            episode1: '第1集 - 對手永遠不給ACE😭',
            episode2: '第2集 - 排位蕾娜1打4殘局！',
            episode3: '第3集 - 白金場排位連輸心態爆炸😭',
            episode4: '第4集 - 排位又遇外掛?!照樣1發拿下MVP😎',
            episode5: '第5集 - 蕾娜再次一打多殘局',
        },
        news: {
            newsBody: {
                title: '最新消息',
                category: {
                    all: '所有消息',
                    activity: '活動消息',
                    announcement: '公告訊息',
                }
            }
            , newsItem: [
                {
                    id: "1",
                    category: 'Stream',
                    demoImage: xiaojeanJail,
                    title: "關於超凡之旅與直播時間",
                    description: "超凡之旅我很努力爬分了，但礙於時間問題壓力真的很大...",
                    content: "近期因為超凡之旅爬得很坐牢，加上10月私下爬分時的設定沒調整好，以至於那段時間的素材都不能用很可惜，所以這系列結束前需要多花點時間在爬分(結束時會再另外做影片跟各位報告!)",
                    content2: "平日不太開假日則盡量開4小時的台，除非臨時有事或身體不適會再提前告知，上班時會減少出現在群組的時間(上班時間為平日早八晚五有1小時午休)",
                    content3: "下班後有機會出現在會員語音聊聊天，還有承諾各位加班倒數完前不會主動找聯動，將會把加班時間拿來陪大家聊天玩遊戲~",
                    date: "2024/10/27",
                },
            ]
        },
        merch: {
            category: {
                title1: "限時周邊",
                title2: "常駐周邊",
                title3: "絕版周邊",
            },
            img: {
                default: richXiaoJean,
                lineSitcker: lineSitcker,
                lineEmoji: emoji,
                thousandSub: thousandSub,
                ff43_01: ff43_01,
                anniversary_1st: anniversary_1st,
                anniversary_2nd_crowdfunding_01: anniversary_2nd_crowdfunding_01,
                anniversary_2nd_crowdfunding_02: anniversary_2nd_crowdfunding_02,
                anniversary_2nd_crowdfunding_03: anniversary_2nd_crowdfunding_03,
            },
            title: {
                commingSoon: '敬請期待',
                lineSticker: "小靜Line貼圖",
                lineEmoji: "小靜Line表情符號",
                thousandSub: '千訂回饋周邊',
                ff43_01: 'FF43 周邊',
                anniversary_1st: '一周年周邊套組',
                anniversary_2nd_crowdfunding_01: '二周年募資限定周邊',
                anniversary_2nd_crowdfunding_02: '二周年募資限定周邊',
                anniversary_2nd_crowdfunding_03: '二周年募資限定周邊',
            },
            subTitle: {
                default: '',
                lineSitcker: "",
                lineEmoji: "",
                thousandSub: '含滑鼠墊、雙面抱枕',
                ff43_01: '簽名掛軸、明信片、帆布袋',
                anniversary_1st: '含立牌、飯友、吊飾',
                anniversary_2nd_crowdfunding_01: '吊飾 & 飯友',
                anniversary_2nd_crowdfunding_02: '特殊悠遊卡 & 卡套',
                anniversary_2nd_crowdfunding_03: 'Q版立牌',
            },
            link: {
                commingSoon: '《敬請期待》',
                default: '《點擊前往周邊》',
                lineSitcker: 'https://store.line.me/stickershop/product/25838548/zh-Hant?utm_source=gnsh_stickerDetail',
                lineEmoji: "https://store.line.me/emojishop/product/65d99d86357e3d15ccfcf4be/zh-Hant?lang=zh-Hant&utm_source=gnsh_sticonDetail",
            }
        },
        about: {
            basicInfo: {
                title: '小靜しずか',
                category: "基本資料",
                height: '身高：158',
                birthday: '生日：1/28',
                favoriteFood: '食物：咖哩',
                hobby: '興趣：唱歌畫畫遊戲',
                favoriteGame: '遊戲：特戰為主，偶爾嘗試其他遊戲',
                notice1: '目前有正職，為非全職套皮實況主',
                notice2: '請勿暈船，我只對妹子有差別待遇',
                notice3: '聯動邀約💌：xiaojean0128@gmail.com',
            },
            milestone: {
                1: "2022.09.13 開始實況✓",
                2: "2022.09.22 實況盟友✓",
                3: "2022.09.26 100追隨✓",
                4: "2023.01.28 第1次開車/車車4級",
                5: "2023.02.08 1000追隨✓",
                6: "2023.11.27 1000訂閱✓特別感謝惜竹♥",
                7: "2024.01.28 V皮初配信/車車16級",
                8: "2024.07.30 合作夥伴✓",
            }
        },
        footer: {
            text: `本站由 龍嘯天 所設計 ${WEB_DETAILS.version} ・ Powered by React @ 2024`
        }
    },
};


