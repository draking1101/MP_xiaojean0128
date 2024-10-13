export interface SwitchLanguageButtonProps {
    language: 'zh' | 'en';  // 限定只接受 'zh' 或 'en'
    onClick: () => void;    // 傳遞一個點擊處理函數
}
