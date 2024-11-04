import { ContentWrapper, H1, P, Ul, Li } from "@/pages/news_details/news_tempates";

export const News1 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <H1>{selectedNews.contentTitle1}</H1>
            <P>{selectedNews.content}</P>
            <ul className="ul-noType">
                <li>項目 A</li>
                <li>項目 B</li>
            </ul>
        </ContentWrapper>
    )
}

export const News2 = ({ selectedNews }) => {
    return (
        <ContentWrapper>
            <H1>{selectedNews.contentTitle1}</H1>
            <P>{selectedNews.content}</P>
            <ul className="ul-noType">
                <li>項目 A</li>
                <li>項目 B</li>
            </ul>
        </ContentWrapper>
    )
}
