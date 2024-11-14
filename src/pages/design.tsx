import React from 'react';
// Styles
import '@/styles/design.css';
// Components
import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const Design = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].design;

    const designImage = {
        0: require('@/assets/xiaojean/F.形象圖/A00.png'),
        1: require('@/assets/xiaojean/F.形象圖/A01.png'),
    }

    return (
        <main className="page-body">
            <div className='design-body'>
                <section className='design-section'>
                    <h1 className='title'>
                        {currentText.derivativeWork.title}
                    </h1>
                    <ul className='rule-list' style={{ display: 'flex', flexDirection: 'column' }}>
                        <li>{currentText.derivativeWork.item1}</li>
                        <li>{currentText.derivativeWork.item2}</li>
                        <li>{currentText.derivativeWork.item3}</li>
                    </ul>
                </section>
                <section className='design-section'>
                    <h1 className='title'>
                        {currentText.historyDesign.title}
                    </h1>
                    <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', justifyContent: 'center' }}>
                        <li className='design-Container'>
                            <img src={designImage[0]} alt='Missing' className='design-image' />
                            <p>{currentText.historyDesign.item1}</p>
                        </li>
                    </ul>
                </section>
            </div>
        </main >
    )
}
