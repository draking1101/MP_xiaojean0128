import React, { useState } from 'react';
// Styles
import '@/styles/design.css';
// Components
import { TEXT, images } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const Design = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].design;
    const designImage = images.design.historyDesign;
    // 添加旋转状态
    const [imageRotation, setImageRotation] = useState(0);

    // 添加Modal状态控制
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [showRotateButton, setShowRotateButton] = useState(false);

    // 添加Modal控制函数
    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setImageRotation(0);
        setIsModalOpen(false);
    };

    // 添加旋转处理函数
    const rotateImage = () => {
        setImageRotation(prev => (prev + 90) % 360);
    };

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
                    <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', justifyContent: 'center', alignItems: 'center' }}>
                        <li className='design-Container'>
                            <img src={designImage['0.0']} alt='Missing' className='design-image' />
                            <p>{currentText.historyDesign.item1}</p>
                            <button onClick={() => {
                                openModal(designImage['0.0']);
                                setShowRotateButton(false);
                            }}>
                                {language === 'zh' ? '檢視圖片' : 'View Image'}
                            </button>
                        </li>
                        <li className='design-Container'>
                            <img src={designImage['1.0&2.0']} alt='Missing' className='design-image' />
                            <p>{currentText.historyDesign.item2}</p>
                            <button onClick={() => {
                                openModal(designImage['1.0&2.0']);
                                setShowRotateButton(true);
                            }}>
                                {language === 'zh' ? '檢視圖片' : 'View Image'}
                            </button>
                        </li>
                    </ul>
                </section>
            </div>

            {/* 添加Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <img
                            src={modalImage}
                            alt="Modal View"
                            style={{
                                width: imageRotation % 180 === 90 ? '160%' : '100%',
                                height: imageRotation % 180 === 90 ? '100%' : '100%',
                                transform: `rotate(${imageRotation}deg)`,
                                transition: 'transform 0.3s ease, width 0.3s ease, height 0.3s ease',
                                objectFit: 'contain',
                                maxHeight: imageRotation % 180 === 90 ? '85vh' : '70vh'
                            }}
                        />
                        <div className="modal-controls">
                            {showRotateButton && (
                                <button
                                    className="rotate-button"
                                    onClick={rotateImage}
                                    style={{
                                        borderColor: imageRotation % 180 === 90 ? '#143753' : '#ffd3e4',
                                    }}
                                >
                                    {language === 'zh' ? '旋轉' : 'Rotate'}
                                </button>
                            )}
                            <button
                                className="close"
                                onClick={closeModal}
                                style={{
                                    borderColor: imageRotation % 180 === 90 ? '#143753' : '#ffd3e4',
                                }}
                            >
                                &times;
                            </button>

                            {/* <button className="close" onClick={closeModal}>&times;</button> */}
                        </div>
                    </div>
                </div>
            )}
        </main >
    )
}
