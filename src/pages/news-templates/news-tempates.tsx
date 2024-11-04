import React from 'react';
// Components
import parse from 'html-react-parser'; // 使HTML標籤能被當變數傳遞

interface NewsDetailsProps {
    selectedNews: any;
    closeNewsDetails: () => void;
}

export const NewsDetails: React.FC<NewsDetailsProps> = ({ selectedNews, closeNewsDetails }) => {
    const NewsContent = newsContentMap[selectedNews.id] || DefaultContent;

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
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={closeNewsDetails}>關閉</button>
                </div>
            </div>
        </div>
    )
}

const DefaultContent = () => <p className='news-details-content'>No content available</p>;

const newsContentMap: { [key: string]: React.FC } = {
    1: () => (
        <div className='news-details-content'>
            <h1 style={{ color: 'white' }}>測試標題1</h1>
            <p>這是另一個測試內容</p>
            <ul className="ul-noType">
                <li>項目 A</li>
                <li>項目 B</li>
            </ul>
        </div>
    ),
    2: () => {
        return (
            <div className='news-details-content'>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
                <h1 style={{ color: 'white' }}>測試標題2</h1>
                <p>這是另一個測試內容</p>
                <ul className="ul-noType">
                    <li>項目 A</li>
                    <li>項目 B</li>
                </ul>
            </div>
        );
    },
};