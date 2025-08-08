import Header from '../Header/Header';
import Stats from '../Stats/Stats';
import styles from './Hero.module.css';
import heroCard from '../../assets/hero.webp';
import curvedLine from '../../assets/curvedLine.svg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heroHeading}>
                        We're here to Increase your Productivity
                    </h1>
                    <img className={styles.curvedLine} src={curvedLine} alt='curved-line' />
                    <p className={styles.subText}>
                        Let's make your work more organized and easily using the Taskio Dashboard with many of the latest features in managing work every day.
                    </p>
                    <div className={styles.actions}>
                        <a href="" className={styles.trialBtn}>Try free trial</a>
                        <a href="" className={styles.demoBtn}>
                            <span>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 4.16675C28.7432 4.16675 35.8333 11.2553 35.8333 20.0001C35.8333 28.7448 28.7432 35.8334 20 35.8334C11.2552 35.8334 4.16666 28.7448 4.16666 20.0001C4.16666 11.2553 11.2552 4.16675 20 4.16675Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M25 19.9919C25 18.64 18.0709 14.3152 17.2848 15.0928C16.4988 15.8705 16.4232 24.0401 17.2848 24.891C18.1464 25.7449 25 21.3438 25 19.9919Z" stroke="#191A15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>View Demo</a>
                    </div>
                </div>
                <figure className={styles.imgWrapper}>
                    <img className={styles.heroImage} src={heroCard} alt="heroCard" />
                </figure>
            </div>
            <Stats />
        </section>
    );
}