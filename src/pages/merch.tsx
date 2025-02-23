import React, { useState } from 'react';
// Styles
import '@/styles/merch.css';
// Components
import { images, links, TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
import { MerchItemProps } from '@/components/interface';

export const Merch = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].merch;
    const defaultImg = images.merch.default
    const merch = images.merch;

    // 新增狀態來控制模態框的顯示
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const MerhcItem = ({
        category,
        showLink,
        imgSrc,
        title,
        link
    }: MerchItemProps) => {
        return (
            <li className='merch-item'>
                <img src={imgSrc} alt="Lost" />
                <p className="merch-item-title">{title}</p>
                <button onClick={() => openModal(imgSrc || defaultImg)}>{language === 'zh' ? '檢視圖片' : 'View Image'}</button>
                {showLink && (
                    <a className='merch-item-link' href={link} target="_blank" rel="noreferrer">
                        {currentText.link.default}
                    </a>
                )}
            </li>
        )
    }


    const MerchItem = [{
        category: 'discontinued',
        showLink: false,
        imgSrc: merch.birthday2025,
        title: currentText.title.birthday2025
    }]

    return (
        <div className="page-body">
            <div className="merch-body">
                <div className="merch-area">
                    {/* 限時周邊 */}
                    <h1 className='merch-area-title'>{currentText.category.title1}</h1>
                    <ul className='merch-item-container'>
                        {/* <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.commingSoon}</p>
                            <button onClick={() => openModal(defaultImg)}>檢視圖片</button>
                            <a href=' ' className='merch-item-link' target="_blank" rel="noreferrer"><p>{currentText.link.commingSoon}</p></a>
                        </li> */}
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.birthday2025}
                            title={currentText.title.birthday2025}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.co_branding_Tshirt_black}
                            title={currentText.title.co_branded_Tshirt.A}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.co_branding_Tshirt_white}
                            title={currentText.title.co_branded_Tshirt.B}
                        />
                    </ul>
                </div>
                {/* 常駐周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>{currentText.category.title2}</h1>
                    <ul className='merch-item-container'>
                        <MerhcItem
                            category='regular'
                            showLink={true}
                            imgSrc={merch.regular.lineSitcker}
                            title={currentText.title.lineSticker}
                        />
                        <MerhcItem
                            category='regular'
                            showLink={true}
                            imgSrc={merch.regular.lineEmoji}
                            title={currentText.title.lineEmoji}
                        />
                        <MerhcItem
                            category='regular'
                            showLink={true}
                            imgSrc={merch.regular.lineEmoji}
                            title={currentText.title.lineEmoji}
                        />
                        <MerhcItem
                            category='regular'
                            showLink={true}
                            imgSrc={merch.regular.lineEmoji}
                            title={currentText.title.lineEmoji}
                        />
                        {/* <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <button onClick={() => openModal(defaultImg)}>檢視圖片</button>
                            <a className='merch-item-link' href="/#" target="_blank"  rel="noreferrer"><p>《敬請期待》</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 絕版周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>{currentText.category.title3}</h1>
                    <ul className='merch-item-container'>
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.anniversary_1st}
                            title={currentText.title.anniversary_1st}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.thousandSub}
                            title={currentText.title.thousandSub}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.crowdfunding_designVersion_2}
                            title={currentText.title.anniversary_2nd_crowdfunding}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.crowdfunding_designVersion_2}
                            title={currentText.title.anniversary_2nd_crowdfunding}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.crowdfunding_designVersion_2}
                            title={currentText.title.anniversary_2nd_crowdfunding}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.anniversary_2nd}
                            title={currentText.title.anniversary_2nd}
                        />
                        <MerhcItem
                            category='discontinued'
                            showLink={false}
                            imgSrc={merch.discontinued.ff43}
                            title={currentText.title.ff43}
                        />
                        {/* <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <button onClick={() => openModal(defaultImg)}>檢視圖片</button>
                            <p className="merch-item-text"></p>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* 模態框 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalImage} alt="Modal View" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            )}
        </div >

    )
}
