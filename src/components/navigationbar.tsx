import styles from './styles/navigationbar.module.css';

const NavigationBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/admin">Admin</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;