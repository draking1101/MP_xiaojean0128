import { ContentWrapper, H1, P, Ul, Li } from "@/pages/news_details/news_tempates";
// Images
export const News1 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <P>{selectedNews.content}</P><br />
            <P>{selectedNews.content2}</P><br />
            <P>{selectedNews.content3}<img style={{ width: 28, height: 28 }} src="https://cdn.discordapp.com/emojis/1211065179161231461.webp?size=44&quality=lossless" alt="Missing Image" /></P>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
                <iframe style={{ borderRadius: 10, marginBottom: 10 }} width="90%" height="285" src="https://www.youtube.com/embed/W6kN4_eH-RE?si=vB5Gm9l6RDIEvGjH" title="特戰超凡之旅#7" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p>邊回聊天室還能邊背閃?，特戰超凡之旅#7 </p>
            </div>
        </ContentWrapper>
    )
}
