import styles from './Support.module.css';
import FiveStar from '../../assets/fivestar.svg';
import FourStar from '../../assets/fourstar.svg';
import PublishingIcon from '../../assets/publishingIcon.svg';
import AnalyticsIcon from '../../assets/analyticsIcon.svg';
import EngagementIcon from '../../assets/engagementIcon.svg';

export default function Support() {
    return (
        <section className={styles.support}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2>How we support our partner all over the world</h2>
                    <p>
                        SaaS has become a common delivery model for many business
                        applications, including office software, messaging software,
                        payroll processing software, DBMS software, management software
                    </p>

                    <div className={styles.ratings}>
                        <div className={styles.ratingItem}>
                            <div className={styles.stars}>
                                <img src={FiveStar} alt="five-star" />
                            </div>
                            <div>
                                <strong>4.9</strong> / 5 rating
                                <div className={styles.source}>databricks</div>
                            </div>
                        </div>
                        <div className={styles.ratingItem}>
                            <div className={styles.stars}>
                                <img src={FourStar} alt="four-star" />
                            </div>
                            <div>
                                <strong>4.8</strong> / 5 rating
                                <div className={styles.source}>Chainalysis</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.card}>
                        <img className={styles.icon} src={PublishingIcon} alt='publishing-icon' />
                        <div>
                            <h3>Publishing</h3>
                            <p>Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src={AnalyticsIcon} alt='analytics-icon' />
                        <div>
                            <h3>Analytics</h3>
                            <p>Analyze your performance and create gorgeous report</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.icon} src={EngagementIcon} alt='engagement-icon' />
                        <div>
                            <h3>Engagement</h3>
                            <p>Quickly navigate you and engage with your audience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}