import React, { createContext, useContext, useState, ReactNode } from 'react';

// 定義語言類型
type LanguageType = 'en' | 'zh';

interface LanguageContextType {
    language: LanguageType;
    changeLanguage: () => void;
}

// 創建 context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<LanguageType>('zh'); // 默認為中文

    const changeLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'zh' ? 'en' : 'zh'));
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 自定義 hook 用來使用 LanguageContext
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage 必須在 LanguageProvider 內使用');
    }
    return context;
};
