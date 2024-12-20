// Styles
import '@/styles/merch.css';
// Components
import { images, links, TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const Merch = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].merch;
    const defaultImg = images.merch.default
    const merch = images.merch;

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
                            <a href=' ' className='merch-item-link' target="_blank" rel="noreferrer"><p>{currentText.link.commingSoon}</p></a>
                        </li> */}
                        <li className='merch-item'>
                            <img src={merch.birthday2025 || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.birthday2025}</p>
                            {/* <a className='merch-item-link' href='' target="_blank" rel="noreferrer"><p>{currentText.link.default}</p></a> */}
                        </li>
                        <li className='merch-item'>
                            <img src={merch.co_branding_Tshirt_black || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.co_branded_Tshirt.A}</p>
                            <a className='merch-item-link' href={links.merch.co_branding_Tshirt.birthday2025_short} target="_blank" rel="noreferrer"><p>{currentText.link.default}</p></a>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.co_branding_Tshirt_white || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.co_branded_Tshirt.B}</p>
                            <a className='merch-item-link' href={links.merch.co_branding_Tshirt.birthday2025_long} target="_blank" rel="noreferrer"><p>{currentText.link.default}</p></a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={merch || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.birthday2025}</p>
                            <a className='merch-item-link' href={links.merch.co_branding_Tshirt.birthday2025} target="_blank"  rel="noreferrer"><p>{currentText.link.commingSoon}</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 常駐周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>{currentText.category.title2}</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={merch.regular.lineSitcker || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.lineSticker}</p>
                            <a className='merch-item-link' href={currentText.link.lineSitcker} target="_blank" rel="noreferrer">
                                {currentText.link.default}
                            </a>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.regular.lineEmoji || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.lineEmoji}</p>
                            <a className='merch-item-link' href={currentText.link.lineEmoji} target="_blank" rel="noreferrer">
                                {currentText.link.default}
                            </a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="/#" target="_blank"  rel="noreferrer"><p>《敬請期待》</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 絕版周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>{currentText.category.title3}</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={merch.discontinued.anniversary_1st || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_1st}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.discontinued.thousandSub || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.thousandSub}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.discontinued.crowdfunding_designVersion_2 || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_2nd_crowdfunding}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.discontinued.anniversary_2nd || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_2nd}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={merch.discontinued.ff43 || defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.ff43}</p>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div >

    )
}
