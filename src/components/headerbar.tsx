import styles from '../styles/headerbar.module.css';

interface HeaderBarProps {
    title: string;
    logo: string;
}


/**
 * HeaderBar component
 * A bar that expands across the top of the page.
 * On the left side of the bat is the page logo and title on the right side of the logo.
 * @param title - The title of the page.
 */
const HeaderBar: React.FC<HeaderBarProps> = ({ title, logo }) => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <h1 className={styles.heading}>{title}</h1>
        </header>
    );
}

export default HeaderBar;
