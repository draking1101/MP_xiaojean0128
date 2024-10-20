import React from 'react';
import '@/styles/components/switch_language_button.css';  // 導入CSS
import { SwitchLanguageButtonProps } from '@/components/interface';

export const SwtichLanguageButton: React.FC<SwitchLanguageButtonProps> = ({ language, onClick }) => {

    return (
        <div>
            {/* 切換語言按鈕 */}
            <button
                onClick={onClick}
                className='switch-language-button'
            >
                {language === 'zh' ? 'Switch to English' : '切換為中文'}
            </button>
        </div>
    );
}
