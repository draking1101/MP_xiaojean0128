import React, { useState } from 'react';
// Styles
import '@/styles/news.css';
import { useLanguage } from '@/components/LanguageContext';
import { TEXT } from '@/components/const';
import { NewsDetails } from './news-templates/news-tempates';

export const News = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].news;
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedNews, setSelectedNews] = useState(null); // 存儲被點擊的新聞內容

    // Function to filter news items by category
    const filterNews = () => {
        if (selectedCategory === 'All') {
            return currentText.newsItem;
        } else {
            // Select items whose category equals selectedCategory
            return currentText.newsItem.filter((news) => news.category === selectedCategory);
        }
    };

    // Click handler to change category
    function handleCategoryClick(category: string) {
        setSelectedCategory(category);
    };

    // 點擊新聞項目時顯示詳細內容
    function openNewsDetails(news) {
        setSelectedNews(news); // 存儲所選的新聞內容
    }

    // 關閉詳細內容視窗
    function closeNewsDetails() {
        setSelectedNews(null); // 重置為空，隱藏詳細內容
    }


    return (
        <div style={{ height: 1000 }} className="page-body">
            <div className='news-body'>
                <h1 className='news-body-title'>{currentText.newsBody.title}</h1>
                <div className="category-wrap">
                    <span
                        className={`category ${selectedCategory === 'All' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('All')}
                    >
                        {currentText.newsBody.category.latest}
                    </span>
                    <span
                        className={`category ${selectedCategory === 'Activity' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Activity')}
                    >
                        {currentText.newsBody.category.activity}
                    </span>
                    <span
                        className={`category ${selectedCategory === 'Stream' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Stream')}
                    >
                        {currentText.newsBody.category.stream}
                    </span>
                </div>

                <div className="news-list">
                    {filterNews().map((news, index) => (
                        <div
                            key={index}
                            className="news-item"
                            onClick={() => openNewsDetails(news)}
                        >
                            <img src={news.demoImage} alt={news.title} className="news-image" />
                            <div className="news-content">
                                <h2 className='news-content-title'>{news.title}</h2>
                                <p className='news-content-description'>{news.description}</p>
                                <span className="news-content-date">{news.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 詳細內容模態框 */}
                {selectedNews && (
                    <NewsDetails
                        selectedNews={selectedNews}
                        closeNewsDetails={closeNewsDetails}
                    />
                )}
            </div>
        </div>
    );
};
