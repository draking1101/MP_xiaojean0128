import FF43_01 from '@/assets/xiaojean/B.周邊/006-FF43周邊.jpg'  // FF43周邊
// Styles
import '@/styles/merch.css';
// Components
import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const Merch = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].merch;

    return (
        <div className="page-body">
            <div className="merch-body">
                <div className="merch-area">
                    {/* 限時周邊 */}
                    <h1 className='merch-area-title'>{currentText.category.title1}</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.commingSoon}</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' target="_blank" rel="noreferrer"><p>{currentText.link.commingSoon}</p></a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="/#" target="_blank"  rel="noreferrer"><p>《敬請期待》</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 常駐周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>{currentText.category.title2}</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={currentText.img.lineSitcker || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.lineSticker}</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href={currentText.link.lineSitcker} target="_blank" rel="noreferrer">
                                {currentText.link.default}
                            </a>
                        </li>
                        <li className='merch-item'>
                            <img src={currentText.img.lineEmoji || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.lineEmoji}</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href={currentText.link.lineEmoji} target="_blank" rel="noreferrer">
                                {currentText.link.default}
                            </a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={currentText.img.default} alt="Lost" />
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
                            <img src={currentText.img.anniversary_1st || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_1st}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={currentText.img.thousandSub || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.thousandSub}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={currentText.img.anniversary_2nd_crowdfunding_01 || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_2nd_crowdfunding_01}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={currentText.img.anniversary_2nd_crowdfunding_02 || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_2nd_crowdfunding_02}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={currentText.img.anniversary_2nd_crowdfunding_03 || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.anniversary_2nd_crowdfunding_03}</p>
                        </li>
                        <li className='merch-item'>
                            <img src={FF43_01 || currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.ff43_01}</p>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={currentText.img.default} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div >

    )
}
