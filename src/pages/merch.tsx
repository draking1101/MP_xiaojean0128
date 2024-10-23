// Styles
import '@/styles/merch.css';

export const Merch = () => {
    return (
        <div className="page-body">
            <div className="merch-body">
                <div className="merch-area">
                    {/* 限時周邊 */}
                    <h1 className='merch-area-title'>限時周邊</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/A.無分類/003-小靜.png')} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' target="_blank" rel="noreferrer"><p>《敬請期待》</p></a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/A.無分類/003-小靜.png')} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="/#" target="_blank"  rel="noreferrer"><p>《敬請期待》</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 常駐周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>常駐周邊</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/007-Lline貼圖(去背).png')} alt="Lost" />
                            <p className="merch-item-title">小靜Line貼圖</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="https://store.line.me/stickershop/product/25838548/zh-Hant?utm_source=gnsh_stickerDetail" target="_blank" rel="noreferrer">
                                《點擊前往周邊》
                            </a>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/008-Lline表情符號(去背).png')} alt="Lost" />
                            <p className="merch-item-title">小靜Line表情符號</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="https://store.line.me/emojishop/product/65d99d86357e3d15ccfcf4be/zh-Hant?lang=zh-Hant&utm_source=gnsh_sticonDetail" target="_blank" rel="noreferrer">
                                《點擊前往周邊》
                            </a>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/A.無分類/003-小靜.png')} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                            <a className='merch-item-link' href="/#" target="_blank"  rel="noreferrer"><p>《敬請期待》</p></a>
                        </li> */}
                    </ul>
                </div>
                {/* 絕版周邊 */}
                <div className="merch-area">
                    <h1 className='merch-area-title'>絕版周邊</h1>
                    <ul className='merch-item-container'>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/001-一周年周邊套組.png')} alt="Lost" />
                            <p className="merch-item-title">一周年周邊套組</p>
                            <p className="merch-item-text">含立牌、飯友、吊飾</p>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/002-千訂回饋周邊.png')} alt="Lost" />
                            <p className="merch-item-title">千訂回饋周邊</p>
                            <p className="merch-item-text">含滑鼠墊 & 雙面抱枕</p>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/003-二周年募資限定周邊_吊飾and飯友.jpg')} alt="Lost" />
                            <p className="merch-item-title">二周年募資限定周邊</p>
                            <p className="merch-item-text">吊飾 & 飯友</p>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/004-二周年募資限定周邊_特殊悠遊卡and卡套.jpg')} alt="Lost" />
                            <p className="merch-item-title">二周年募資限定周邊</p>
                            <p className="merch-item-text">特殊悠遊卡 & 卡套</p>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/005-二周年回饋周邊_Q版立牌(多邊框+Logo).png')} alt="Lost" />
                            <p className="merch-item-title">二周年回饋周邊</p>
                            <p className="merch-item-text">Q版立牌</p>
                        </li>
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/006-FF43周邊.jpg')} alt="Lost" />
                            <p className="merch-item-title">FF43 周邊</p>
                            <p className="merch-item-text">簽名掛軸、明信片、帆布袋</p>
                        </li>
                        {/* <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/003-小靜.png')} alt="Lost" />
                            <p className="merch-item-title">敬請期待</p>
                            <p className="merch-item-text"></p>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div >

    )
}
