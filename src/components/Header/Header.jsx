import { useState } from 'react';
import styles from './Header.module.css';
import hamburger from '../../assets/hamburger.svg';

export default function Header() {

    const [open, setOpen] = useState(false);
   
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

            {/* mobile drawer */}

            <button className={styles.hamburger} onClick={() => setOpen(prev => !prev)}>
                <img width={32} height={32} src={hamburger} alt='hamburger' />
            </button>


            <div className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
                onClick={() => setOpen(false)} aria-hidden={!open} />
            <aside
                id="mobile-drawer"
                className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
                aria-hidden={!open}
            >
                <div className={styles.drawerHeader}>
                    <h2 className={styles.drawerTitle}>Menu</h2>
                    <button className={styles.closeBtn}
                        onClick={() => setOpen(false)}
                        aria-label="Close menu">×</button>
                </div>

                <nav className={styles.drawerNav}>
                    <ul>
                        <li>
                            <a href="#" className={styles.drawerLink} onClick={() => setOpen(false)}>Home</a>
                        </li>
                        <li>
                            <a href="#" className={styles.drawerLink} onClick={() => setOpen(false)}>Product</a>
                        </li>
                        <li>
                            <a href="#" className={styles.drawerLink} onClick={() => setOpen(false)}>FAQ</a>
                        </li>
                        <li>
                            <a href="#" className={styles.drawerLink} onClick={() => setOpen(false)}>Blog</a>
                        </li>
                        <li>
                            <a href="#" className={styles.drawerLink} onClick={() => setOpen(false)}>About Us</a>
                        </li>
                    </ul>

                    <div className={styles.drawerActions}>
                        <button className={styles.loginBtn} onClick={() => setOpen(false)}>Login</button>
                        <button className={styles.signupBtn} onClick={() => setOpen(false)}>Sign Up</button>
                    </div>
                </nav>
            </aside>
        </header>
    );
}