import styles from './Pricing.module.css';
import GreenTick from '../../assets/greenTick.svg';


const plans = [
    {
        name: 'Free',
        subtitle: `Have a go and test your superpowers`,
        price: '0',
        features: ['2 Users', '2 Files', 'Public Share & Comments', 'Chat Support', 'New income apps'],
        buttonText: 'Signup for free',
        highlighted: false,
    },
    {
        name: 'Pro',
        subtitle: 'Experiment the power of infinite possibilities',
        price: '8',
        features: ['4 Users', 'All apps', 'Unlimited editable exports', 'Folders and collaboration', 'All incoming apps'],
        buttonText: 'Go to pro',
        highlighted: true,
        extra: 'Save $50 a year'
    },
    {
        name: 'Business',
        subtitle: 'Unveil new superpowers and join the Design League',
        price: '16',
        features: ['All the features of pro plan', 'Account success Manager', 'Single Sign-On (SSO)', 'Co-conception program', 'Collaboration-Soon'],
        buttonText: 'Go to Business',
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section className={styles.pricing}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2>Choose Plan<br /> That's Right For You</h2>
                    <p>Choose plan that works best for you, feel free to contact us</p>
                    <div className={styles.actions}>
                        <button className={styles.monthlyBtn}>Bill&nbsp;Monthly</button>
                        <button className={styles.yearlyBtn}>Bill&nbsp;Yearly</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    {plans.map(plan => (
                        <div
                            key={plan.name}
                            className={`${styles.card} ${plan.highlighted ? styles.highlighted : ''}`}
                        >
                            <h3 className={styles.title}>{plan.name}</h3>
                            <p className={styles.subtitle}>{plan.subtitle}</p>
                            <div className={styles.price}>
                                <span>$</span>{plan.price}
                            </div>
                            {plan.extra && <span className={styles.extra}>{plan.extra}</span>}
                            <ul className={styles.features}>
                                {plan.features.map(f => <li key={f}><img width={20} height={20} src={GreenTick} alt='green-tick' />{f}</li>)}
                                <button className={styles.button}>{plan.buttonText}</button>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}