// Components
import { ContentWrapper, H1, P, Ul, Li } from "@/pages/news_details/news_tempates";

export const News0 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <P>{selectedNews.content}</P><br />
            <P>{selectedNews.content2}</P><br />
            <P>{selectedNews.content3}
                <img style={{ width: 28, height: 28 }} src="https://cdn.discordapp.com/emojis/1211065179161231461.webp?size=44&quality=lossless" alt="Missing Image" />
            </P><br />
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <a style={{ fontSize: '18px' }} href="https://youtube.com/playlist?list=PLc-iMbctKKIzEGiaV2WCHxpnjkSMKyKaI&si=zPxCs2L7fj54dWgb" target="_blank" rel="noreferrer">
                    {selectedNews.linkText}
                </a>
            </div>
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
                <a style={{ fontSize: '18px' }} href="https://youtube.com/playlist?list=PLiJk1NbL7YBLjA7u9iUFOTmML9PMJUljS&si=SjKCyBGMkLgoGLhC" target="_blank" rel="noreferrer">
                    {selectedNews.linkText}
                </a>
            </div>
        </ContentWrapper>
    )
}
