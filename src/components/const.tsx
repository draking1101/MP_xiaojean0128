// 網站資訊
import packageJson from "../../package.json";

// 變數
const version = packageJson.version;

export const WEB_DETAILS = {
    version: `Ver.${version}` // 網站版本
}

export const images = {
    merch: {
        default: require('@/assets/xiaojean/A.無分類/010-揮金如土.png'),
        limit: {
        },
        regular: {
            lineSitcker: require('@/assets/xiaojean/B.周邊/007-Lline貼圖(去背).png'),
            lineEmoji: require('@/assets/xiaojean/B.周邊/008-Lline表情符號(去背).png'),
        },
        discontinued: {
            thousandSub: require('@/assets/xiaojean/B.周邊/002-千訂回饋周邊.png'),
            ff43: require('@/assets/xiaojean/B.周邊/006-FF43周邊.jpg'),
            anniversary_1st: require('@/assets/xiaojean/B.周邊/001-一周年回饋.png'),
            anniversary_2nd: require('@/assets/xiaojean/B.周邊/005-二周年回饋.png'),
            crowdfunding_designVersion_2: require('@/assets/xiaojean/B.周邊/003-2.0募資限定周邊.jpg'),
        },
    },
    design: {
        historyDesign: {
            "0.0": require('@/assets/xiaojean/F.形象圖/A00.png'),
        }
    }
}

const newsDetails = {
    category: {
        1: 'All',
        2: 'Activity',
        3: 'Announce',
    },
    date: {
        id0: '2024/10/27',
        id1: '2024/11/7',
    },
    demoImage: {
        id0: require('@/assets/xiaojean/A.無分類/011-坐牢靜.png'),
        id1: require('@/assets/xiaojean/A.無分類/012-我才.png'),
    }
}
export const TEXT = {
    en: {
        header: {
            logoText: "XiaoJean",
            home: 'Home',
            news: 'News',
            merch: 'Merch',
            about: 'About',
            rule: 'Rules',
            design: "Design",
            commission: "Commission",
        },
        home: {
            banner: {
                bannerTitle1: "Hi! I'm XiaoJean ～",
                bannerTitle2: "I loves drawing, singing, and gaming.",
                bannerTitle3: "My simple wish is to bring you lots of happiness.",
                bannerTitle4: "Feel free to scroll down to learn more about me ♡",
                buttonText: "《Go to Virtual Debut Stream》",
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: 'Regular Streams, Event Stories',
                    },
                    youtube: {
                        title: 'YouTube',
                        subtitle: 'Live Videos, Song Covers',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: 'Thanks Post, Daily Post',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: 'Thoughts, Casual Posts',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: 'Highlight Clips, Daily Post',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: 'Artwork, Event Posts',
                    },
                    discord: {
                        title: 'Discord',
                        subtitle: 'Daily chats and interactions with the community',
                    },
                }
            },
            tear: {
                1: "This is my fan mascot, XinJie.",
                2: "The abbreviation is the same as my name, XJ.",
                3: "The symbol on its belly represents my Aquarius sign.",
                4: "It's often teary-eyed because of the 'heart ties' I have with everyone and my tendency to cry.",
                5: "So, it combines a teardrop with elements of a heart tie.",
            },
            section2: {
                donate: "Donate",
                item1: "If you’d like to support me, feel free to donate!",
                item2: "But please make sure you’ve eaten and donate within your means.",
                item3: "List of Past Donation Gifts.",
                Link1: "【Greenworld】",
                Link2: "【O’Pay】",
                Link3: "【PAYPAL】",
            },
            section3: {
                content1: "This is the sponsor of our member Minecraft server. They’re my friends, and if anyone needs to rent a server for gaming, feel free to check them out! They offer different levels of servers to choose from, and if you have any questions, you can ask in their",
                content2: "discord community",
                content3: ". Use my promo code 'xiaojean' for a 5% discount. I hope everyone can support them!",
            },
        },
        news: {
            newsBody: {
                title: 'Latest News',
                category: {
                    all: newsDetails.category[1],
                    activity: newsDetails.category[2],
                    announcement: newsDetails.category[3],
                }
            }
            , newsItem: [
                {
                    id: "0",
                    category: newsDetails.category[3],
                    demoImage: newsDetails.demoImage.id0,
                    title: "About Extended Streaming Hours",
                    description: "I’ve been putting in a lot of effort to rank up in the Extraordinary Journey but due to time constraints...",
                    date: newsDetails.date.id0,
                    content: "I’ve been putting in a lot of effort to rank up in the Extraordinary Journey but due to time constraints, the pressure is intense. If I can't achieve my goal by the end of Act 9, this series might come to the end ( I’ll still be ranking, just not as intensively).",
                    content2: "However, I'll continue to work hard on my youtube channel with stream highlights, shorts, covers, and similar content.",
                    content3: "So… if you haven’t watched the latest episode, go check it out! I need your support and love. Love you all!",
                    linkText: "Click Me to Extraordinary Journey",
                },
                {
                    id: "1",
                    category: newsDetails.category[3],
                    demoImage: newsDetails.demoImage.id1,
                    title: "About the Recent Condition of My Throat",
                    description: "After seeing the doctor, I've decided to let my throat rest and sing a bit less...",
                    date: newsDetails.date.id1,
                    content: "After seeing the doctor, I've decided to let my throat rest and sing a bit less.",
                    content2: "If you want to hear some songs recently, feel free to subscribe to Yefeng!",
                    content3: "He’ll be updating clips from the 520 and celebration song streams.",
                    content4: "I’ll check the comments when I have time.",
                    content5: "Feel free to leave your compliments or thoughts in the comments!",
                    linkText: "Click Me to Song List",
                }
            ]
        },
        merch: {
            category: {
                title1: "Limited",
                title2: "Regular",
                title3: "Discontinued",
            },
            title: {
                commingSoon: '《Coming Soon》',
                lineSticker: "Line Stickers",
                lineEmoji: "Line Emojis",
                thousandSub: '1K Subscribers',
                ff43: 'FF43',
                anniversary_1st: '1st Anniversary',
                anniversary_2nd: '2nd Anniversary',
                anniversary_2nd_crowdfunding: '2.0 Crowdfunding',
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
                title: 'XiaoJean',
                category: "Basic Information",
                height: 'Height：158',
                birthday: 'Birthday: 1/28',
                favoriteFood: 'Favorite Food: Curry',
                hobby: 'Hobbies: Singing, drawing, gaming',
                favoriteGame: 'Games: Mainly Valorant, occasionally trying other games',
                notice1: 'Currently working a full-time job, not a full-time VTuber.',
                notice2: 'Please don’t fall for me; I only show favoritism towards girls.',
                notice3: '💌 xiaojean0128@gmail.com',
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
            derivativeWork: {
                1: "Any character illustration may be used for commissions or fan art.",
                2: "Use of images for profit or feeding into AI is prohibited.",
                3: "• No R18 content; R16 borderline content is acceptable.",
            },
        },
        design: {
            derivativeWork: {
                title: 'Fan Art & Commission Rules',
                item1: 'Any character illustrations can be used for commissions or fan art.',
                item2: 'Use of images for profit or feeding into AI is prohibited.',
                item3: 'No R18 content; borderline R16 content is acceptable.',
            },
            historyDesign: {
                title: 'Character Design Showcase',
                item1: 'Version 0.0',
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
            design: "形象展示",
            commission: "委託相關",
        },
        home: {
            banner: {
                bannerTitle1: "嗨嗨！我是小靜しずか ～",
                bannerTitle2: "一個愛畫畫.唱歌.玩遊戲的普通人",
                bannerTitle3: "簡單的心願是想帶給你們許多快樂",
                bannerTitle4: '歡迎下滑了解更多關於我的事 ♡',
                buttonText: '《前往觀看V皮初配信》',
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: '常駐直播、活動限動',
                    },
                    youtube: {
                        title: 'Youtube',
                        subtitle: '直播影片、歌曲翻唱',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: '感謝貼文、日常貼文',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: '想說的話、日常廢文',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: '精華短片、日常限動',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: '繪圖作品、活動貼文',
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
                donate: "斗內",
                item1: "想支持我的話歡迎斗內",
                item2: "不過請吃飽並量力而為",
                item3: "歷史斗內贈禮名單",
                Link1: "【綠界】",
                Link2: "【歐富寶】",
                Link3: "【PAYPAL】",
            },
            section3: {
                content1: "這是我們會員麥塊伺服器的贊助商，他們是我的朋友，如果大家有需要租伺服器遊玩的話不妨去參考看看，有不同等級主機可以選擇，有問題也可以在他們的",
                content2: "dc群",
                content3: "詢問，使用我的優惠碼 xiaojean還能打95折，希望大家支持他們一下",
            },
        },
        news: {
            newsBody: {
                title: '最新消息',
                category: {
                    all: '所有',
                    activity: '活動',
                    announcement: '公告',
                }
            }
            , newsItem: [
                {
                    id: "0",
                    category: newsDetails.category[3],
                    demoImage: newsDetails.demoImage.id0,
                    title: "關於直播加班時間",
                    description: "近期因為超凡之旅爬得很坐牢，加上10月私下爬分時的設定沒調整好...",
                    date: newsDetails.date.id0,
                    content: "近期因為超凡之旅爬得很坐牢，加上10月私下爬分時的設定沒調整好，以至於那段時間的素材都不能用很可惜，所以這系列結束前需要多花點時間在爬分(結束時會再另外做影片跟各位報告!)",
                    content2: "平日不太開假日則盡量開4小時的台，除非臨時有事或身體不適會再提前告知，上班時會減少出現在群組的時間(上班時間為平日早八晚五有1小時午休)",
                    content3: "下班後有機會出現在會員語音聊聊天，還有承諾各位加班倒數完前不會主動找聯動，將會把加班時間拿來陪大家聊天玩遊戲~",
                    linkText: "點我前往超凡之旅",
                },
                {
                    id: "1",
                    category: newsDetails.category[3],
                    demoImage: newsDetails.demoImage.id1,
                    title: "關於近期喉嚨狀態 ",
                    description: "看了醫生後決定讓喉嚨休養少唱點歌近期想聽歌的可以去訂閱夜楓呦...",
                    date: newsDetails.date.id1,
                    content: "看了醫生後決定讓喉嚨休養少唱點歌",
                    content2: "近期想聽歌的可以去訂閱夜楓呦",
                    content3: "他會陸續更新520及過勾歌回的剪輯",
                    content4: "而且留言我有空的話都會去看的",
                    content5: "歡迎留言留下你的讚美或看法",
                    linkText: "點我前往歌單",
                }
            ]
        },
        merch: {
            category: {
                title1: "限時周邊",
                title2: "常駐周邊",
                title3: "絕版周邊",
            },
            title: {
                commingSoon: '敬請期待',
                lineSticker: "小靜Line貼圖",
                lineEmoji: "小靜Line表情符號",
                thousandSub: '千訂回饋',
                ff43: 'FF43',
                anniversary_1st: '一週年回饋',
                anniversary_2nd: '二週年回饋',
                anniversary_2nd_crowdfunding: '2.0募資限定',
            },
            link: {
                commingSoon: '《敬請期待》',
                default: '《點擊前往》',
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
                favoriteFood: '最愛的食物：咖哩',
                hobby: '興趣：唱歌畫畫遊戲',
                favoriteGame: '遊戲：特戰為主，偶爾嘗試其他遊戲',
                notice1: '目前有正職，為非全職套皮實況主',
                notice2: '請勿暈船，我只對妹子有差別待遇',
                notice3: '💌 xiaojean0128@gmail.com',
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
            },
            derivativeWork: {
                1: "可使用任何形象立繪委託或二創",
                2: "禁止將圖拿來盈利或投餵AI使用",
                3: "禁止R18創作，R16擦邊圖可接受",
            },
        },
        design: {
            derivativeWork: {
                title: '二創委託規則',
                item1: '可使用任何形象立繪委託或二創',
                item2: '禁止將圖拿來盈利或投餵AI使用',
                item3: '禁止R18創作，R16擦邊圖可接受',
            },
            historyDesign: {
                title: '歷代立繪展示',
                item1: '0.0版'
            },
        },
        footer: {
            text: `本站由 龍嘯天 所設計 ${WEB_DETAILS.version} ・ Powered by React @ 2024`
        }
    },
};
