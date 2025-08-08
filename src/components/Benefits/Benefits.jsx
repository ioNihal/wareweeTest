import styles from './Benefits.module.css';
import BenefitsCard from '../../assets/benefitsCard.webp';
import GreenTick from '../../assets/greenTick.svg';

export default function Benefits() {
    return (
        <section className={styles.benefits}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>What Benefit will you get</h2>
                    <ul>
                        <li className={styles.listWrapper}>
                            <img width={32} height={32} src={GreenTick} alt="green-tick" />
                            Free Consulting with expert saving money
                        </li>
                        <li className={styles.listWrapper}>
                            <img width={32} height={32} src={GreenTick} alt="green-tick" />
                            Online Banking
                        </li>
                        <li className={styles.listWrapper}>
                            <img width={32} height={32} src={GreenTick} alt="green-tick" />
                            Investment Report every month
                        </li>
                        <li className={styles.listWrapper}>
                            <img width={32} height={32} src={GreenTick} alt="green-tick" />
                            Saving money for the future
                        </li>
                        <li className={styles.listWrapper}>
                            <img width={32} height={32} src={GreenTick} alt="green-tick" />
                            Online Transactiom
                        </li>
                    </ul>
                </div>
                <figure className={styles.imgWrapper}>
                    <img src={BenefitsCard} alt="benefits-card" />
                </figure>
            </div>
        </section>
    );
}