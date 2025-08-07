import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Biccas</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li className={styles.navItem}>Home</li>
                    <li className={styles.navItem}>Product</li>
                    <li className={styles.navItem}>FAQ</li>
                    <li className={styles.navItem}>Blog</li>
                    <li className={styles.navItem}>About Us</li>
                </ul>
            </nav>
            <div className={styles.actions}>
                <button className={styles.loginBtn}>Login</button>
                <button className={styles.signupBtn}>Sign Up</button>
            </div>
        </header>
    );
}