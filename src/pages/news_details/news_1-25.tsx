import { ContentWrapper, H1, P, Ul, Li } from "@/pages/news_details/news_tempates";
// Images
export const News1 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <H1>{selectedNews.contentTitle1}</H1>
            <P>{selectedNews.content}</P><br />
            <P>{selectedNews.content2}</P><br />
            <P>{selectedNews.content3}<img style={{ width: 28, height: 28 }} src="https://cdn.discordapp.com/emojis/1211065179161231461.webp?size=44&quality=lossless" /></P>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <iframe style={{ borderRadius: 10, marginBottom: 10 }} width="90%" height="285" src="https://www.youtube.com/embed/rL3GatKd3zA?si=WXIGwaThLtzjgypC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>特戰英豪就是一款恐怖遊戲，特戰超凡之旅#6 </p>
            </div>
        </ContentWrapper>
    )
}
