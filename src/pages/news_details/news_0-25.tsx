// Components
import { ContentWrapper, H1, P, Ul, Li } from "@/pages/news_details/news_tempates";
import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const News0 = ({ selectedNews }) => {
    const { language } = useLanguage();
    const journeyText = TEXT[language].news.newsItem[0].journey;

    const episodeList = [
        { title: journeyText.episode1, url: "https://www.youtube.com/embed/Q-wmmlCssRE?si=ATH1j_IjZe_283X-" },
        { title: journeyText.episode2, url: "https://www.youtube.com/embed/OIBhgtH8SHQ?si=6RcqicnE8G5cdc-p" },
        { title: journeyText.episode3, url: "https://www.youtube.com/embed/ipKDyPPL_W8?si=T-HWtm0M_7ow_Bfi" },
        { title: journeyText.episode4, url: "https://www.youtube.com/embed/QXXlgIZg4tQ?si=D6ifXPp6fJAgLJo0" },
        { title: journeyText.episode5, url: "https://www.youtube.com/embed/V2DIcU2ev0Q?si=HgZALOW0Zczri9RW" },
        { title: journeyText.episode6, url: "https://youtu.be/rL3GatKd3zA?si=UTNQYsh4XZYu1Z1w" },
        { title: journeyText.episode7, url: "https://youtu.be/W6kN4_eH-RE?si=hZi1ns8IWI-Vq0qs" },
    ];

    const EpisodeItem = ({ episodes }) => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 10,
                width: '100%',
            }}>
                <H1>{journeyText.rankVideoTitle}</H1>
                <div style={{ lineHeight: 1.75 }}>
                    {episodes.map((episode: any, index: any) => (
                        <a style={{ color: '#D4EDFF' }} href={episode.url} target="_blank" rel="noreferrer">
                            <p key={index}>{episode.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <ContentWrapper>
            <P>{selectedNews.content}</P><br />
            <P>{selectedNews.content2}</P><br />
            <P>{selectedNews.content3}
                <img style={{ width: 28, height: 28 }} src="https://cdn.discordapp.com/emojis/1211065179161231461.webp?size=44&quality=lossless" alt="Missing Image" />
            </P><br />
            <EpisodeItem episodes={episodeList} />
        </ContentWrapper>
    )
}

export const News1 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <P>{selectedNews.content}</P><br />
            <P>{selectedNews.content2}</P><br />
            <P>{selectedNews.content3}</P><br />
            <P>{selectedNews.content4}</P><br />
            <P>{selectedNews.content5}</P><br />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <a style={{ fontSize: '18px' }} href="https://youtube.com/playlist?list=PLiJk1NbL7YBLjA7u9iUFOTmML9PMJUljS&si=SjKCyBGMkLgoGLhC">
                    {selectedNews.text}
                </a>
            </div>
        </ContentWrapper>
    )
}
