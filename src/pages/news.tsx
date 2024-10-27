import React, { useState } from 'react';
// Styles
import '@/styles/news.css';
import { useLanguage } from '@/components/LanguageContext';
import { TEXT } from '@/components/const';

export const News = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].news;
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to filter news items by category
    const filterNews = () => {
        if (selectedCategory === 'All') return currentText.newsItem;
        return currentText.newsItem.filter((news) => news.category === selectedCategory);
    };

    // Click handler to change category
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div style={{ height: 1000 }} className="page-body">
            <div className='news-body'>
                <h1 className='news-body-title'>{currentText.newsBody.title}</h1>
                <div className="category-wrap">
                    <span
                        className={`category ${selectedCategory === 'All' ? 'active category' : 'category'}`}
                        onClick={() => handleCategoryClick('All')}
                    >
                        {currentText.newsBody.category.latest}
                    </span>
                    <span
                        className={`category ${selectedCategory === 'Activity' ? 'active category' : 'category'}`}
                        onClick={() => handleCategoryClick('Activity')}
                    >
                        {currentText.newsBody.category.activity}
                    </span>
                    <span
                        className={`category ${selectedCategory === 'Stream' ? 'active category' : 'category'}`}
                        onClick={() => handleCategoryClick('Stream')}
                    >
                        {currentText.newsBody.category.stream}
                    </span>
                </div>
                <div className="news-list">
                    {filterNews().map((news, index) => (
                        <div key={index} className="news-item">
                            <img src={news.image} alt={news.title} className="news-image" />
                            <div className="news-content">
                                <h2 className='news-content-title'>{news.title}</h2>
                                <p className='news-content-description'>{news.description}</p>
                                <span className="news-content-date">{news.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
