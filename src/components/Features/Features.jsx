import styles from './Features.module.css';
import CollabCard from '../../assets/collabCard.svg';
import CloudCard from '../../assets/cloudCard.svg';
import DailyCard from '../../assets/dailyCard.svg';

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2>Our Features you can get</h2>
                    <p>
                        We offer a variety of interesting features that you can help increase yor productivity at work and manage your project easly
                    </p>
                    <button className={styles.startBtn}>Get Started</button>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.cardWrapper}>
                        <img src={CollabCard} alt="collab-card" />
                        <div>
                            <strong>Collaborations Teams</strong>
                            <p>Here you can handle projects together with team virtually</p>
                        </div>
                    </div>
                    <div className={styles.cardWrapper}>
                        <img src={CloudCard} alt="cloud-card" />
                        <div>
                            <strong>Cloud Storage</strong>
                            <p>No need to worry about storage because we provide storage up to 2TB</p>
                        </div>
                    </div>
                    <div className={styles.cardWrapper}>
                        <img src={DailyCard} alt="daily-card" />
                        <div>
                            <strong>Daily Analytics</strong>
                            <p>We always provide usefull information to make it easier for you every day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}