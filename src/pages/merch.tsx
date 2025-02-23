import React, { useState } from 'react';
// Styles
import '@/styles/merch.css';
// Components
import { images, TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
// Interface
import { MerchItemProps } from '@/components/interface';

export const Merch = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].merch;
    const defaultImg = images.merch.default
    const merch = images.merch;

    // 新增狀態來控制模態框的顯示
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const merchCategory = [currentText.category.limited, currentText.category.regular, currentText.category.discontinued]

    const MerchItem = [{
        // 2025生日周邊
        id: 8,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.birthday2025,
        title: currentText.title.birthday2025
    }, {
        // 聯名T恤短袖
        id: 9,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.co_branding_Tshirt_black,
        title: currentText.title.co_branded_Tshirt.A
    }, {
        // 聯名T恤短袖
        id: 10,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.co_branding_Tshirt_white,
        title: currentText.title.co_branded_Tshirt.B
    }, {
        // Line貼圖
        id: 6,
        category: currentText.category.regular,
        showLink: true,
        imgSrc: merch.regular.lineSitcker,
        title: currentText.title.lineSticker
    }, {
        // Line表情符號
        id: 7,
        category: currentText.category.regular,
        showLink: true,
        imgSrc: merch.regular.lineEmoji,
        title: currentText.title.lineEmoji
    }, {
        // 一周年回饋
        id: 1,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.discontinued.anniversary_1st,
        title: currentText.title.anniversary_1st
    }, {
        // 千人訂閱
        id: 2,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.discontinued.thousandSub,
        title: currentText.title.thousandSub
    }, {
        // 二周年募資限定
        id: 3,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.discontinued.crowdfunding_designVersion_2,
        title: currentText.title.anniversary_2nd_crowdfunding
    }, {
        // 二周年
        id: 4,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.discontinued.anniversary_2nd,
        title: currentText.title.anniversary_2nd
    }, {
        // FF43
        id: 5,
        category: currentText.category.discontinued,
        showLink: false,
        imgSrc: merch.discontinued.ff43,
        title: currentText.title.ff43
    }]

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const MerchContainer = ({
        category
    }) => {
        return (
            <div className="merch-area">
                <h1 className='merch-area-title'>{category}</h1>
                <ul className='merch-item-container'>
                    {MerchItem
                        .filter((item) => item.category === category)
                        .sort((a, b) => a.id - b.id)
                        .map((item) => (
                            <MerhcItem
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                showLink={item.showLink}
                                imgSrc={item.imgSrc}
                                title={item.title}
                            />
                        ))}
                    {/* 如果限定類別沒商品，則顯示Coming Soon */}
                    {category === currentText.category.limited && MerchItem.filter((item) => item.category === category.limited).length === 0 && (
                        <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.commingSoon}</p>
                            <button onClick={() => openModal(defaultImg)}>{language === 'zh' ? '檢視圖片' : 'View Image'}</button>
                        </li>
                    )}
                </ul>
            </div>
        )
    };

    const MerhcItem = ({
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

    return (
        <div className="page-body">
            <div className="merch-body">
                {merchCategory.map((category) => (
                    <MerchContainer key={category} category={category} />
                ))}
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
