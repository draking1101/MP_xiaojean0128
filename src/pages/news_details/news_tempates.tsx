import React from 'react';
// Components
import parse from 'html-react-parser'; // 使HTML標籤能被當變數傳遞
import { newsContentMap } from '@/pages/news_details/news_map';

interface NewsDetailsProps {
    selectedNews: any;
    closeNewsDetails: () => void;
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const NewsDetails: React.FC<NewsDetailsProps> = ({ selectedNews, closeNewsDetails }) => {
    return (
        <div className="news-details-body">
            <div className="news-details-container">
                {/* 標題 */}
                <h2 className='news-details-title'>{selectedNews.title}</h2>
                {/* 日期 */}
                <p className='news-details-date'>{selectedNews.date}</p>
                {/* 動態內容 */}
                <DynamicNewsContent selectedNews={selectedNews} />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={closeNewsDetails}>關閉</button>
                </div>
            </div>
        </div>
    );
};

const DynamicNewsContent: React.FC<{ selectedNews: any }> = ({ selectedNews }) => {
    // 從 newsContentMap 中取得對應的組件，若無則使用 DefaultContent
    const NewsContent = newsContentMap[selectedNews.id];
    return <NewsContent selectedNews={selectedNews} />;
};

export const ContentWrapper: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <div className="news-details-content-container">
            {children}
        </div>
    );
};

export const H1: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <h1 style={{ color: 'white' }}>
            {children}
        </h1>
    );
};

export const P: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <p>
            {children}
        </p>
    );
};

export const Ul: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <ul className="ul-noType">
            {children}
        </ul>
    );
};

export const Li: React.FC<ChildrenProps> = ({ children }) => {
    return (
        <li>
            {children}
        </li>
    );
};
