import parse from 'html-react-parser'; // 安裝 html-react-parser 套件

interface NewsDetailsProps {
    selectedNews: any;
    closeNewsDetails: () => void;
}

export const NewsDetails: React.FC<NewsDetailsProps> = ({ selectedNews, closeNewsDetails }) => {
    const NewsContent = newsContentMap[selectedNews.title] || DefaultContent;

    return (
        <div className="news-details-body">
            <div className="news-details-container">
                {/* 標題 */}
                <h2 className='news-details-title'>{selectedNews.title}</h2>
                {/* 日期 */}
                <p className='news-details-date'>{selectedNews.date}</p>
                {/* 內容 */}
                {/* <p className='news-details-content'>{selectedNews.content}</p> */}
                <NewsContent />
                {/* <img style={{}} src={selectedNews.image} alt={selectedNews.title} /> */}
                <button onClick={closeNewsDetails}>關閉</button>
            </div>
        </div>
    )
}

const DefaultContent = () => <p className='news-details-content'>No content available</p>;

// const ContentWrapper: React.FC<{ content: any }> = ({ content }) => (
//     <p className="news-details-content">{content}</p>
// );
const ContentWrapper: React.FC<{ content: string }> = ({ content }) => {
    return <div className="news-details-content">{parse(content)}</div>;
};
const newsContentMap: { [key: string]: React.FC } = {
    測試標題: () => (
        <ContentWrapper
            content={`
            <h1>測試標題</h1>
            <p>這是測試內容</p>
            <ul className="ul-noType">
              <li>項目 1</li>
              <li>項目 2</li>
            </ul>
          `}
        />
    ),
    Test2: () => <ContentWrapper content="Test 2 Content" />,
};