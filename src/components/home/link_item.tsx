import { styles } from "@/pages/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight as RegularCircleRight } from '@fortawesome/free-regular-svg-icons'

export const LinkItem = ({ href, imgSrc, imgAlt, title, subtitle }) => (
    <li style={styles.section1LinkItem}>
        <a style={styles.section1LinkContainer} target="_blank" title="在新分頁開啟連結" href={href} rel="noreferrer">
            <img style={styles.section1LinkItemImage} src={imgSrc} alt={imgAlt} />
            <div style={styles.section1LinkItemContentContainer}>
                <h1 style={styles.section1LinkItemContentTitle}>{title}</h1>
                {/* <p style={styles.section1LinkItemContentSubtitle}>{subtitle}</p> */}
            </div>
            <FontAwesomeIcon style={styles.section1LinkItemIcon} color='#ccccff' className="FontAwesomeIcon" size='2x' icon={RegularCircleRight} />
        </a>
    </li>
);
