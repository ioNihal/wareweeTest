import styles from './Footer.module.css';

const lists = [
    {
        title: 'Support',
        links: ['Help centre', 'Account information', 'About', 'Contact us'],
    },
    {
        title: 'Help and Solution',
        links: ['Talk to support', 'Support docs', 'System status', 'Covid responde'],
    },
    {
        title: 'Product',
        links: ['Update', 'Security', 'Beta test', 'Pricing product'],
    }
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>Biccas</h2>
                    <p>Get started now try our product</p>
                    <form className={styles.inputWrapper} autoComplete="off">
                        <input type="text" autoComplete='off' placeholder='Enter your email here' />
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    {lists.map((list, i) => (
                        <ul className={styles.list} key={i}>
                            <h4>{list.title}</h4>
                            {list.links?.map((link, _) => (
                                <li key={_}>{link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <p className={styles.footerText}>
                <span>&copy; 2022 Biccas Inc. Copyright and rights reserved</span>
                <span>Terms and Condtions · Privacy Policy</span>
            </p>
        </footer>
    );
}