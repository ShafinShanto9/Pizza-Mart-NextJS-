import Image from "next/image"
import styles from "../styles/Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" height="32" width="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}> ORDER NOW</div>
                    <div className={styles.text}>017 456 11085</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}> Homepage</li>
                    <li className={styles.listItem}> Product</li>
                    <li className={styles.listItem}> Menu</li>
                    <Image src="/img/pizzalogo.png" alt="" width="90px" height="100px" />
                    <li className={styles.listItem}> Events</li>
                    <li className={styles.listItem}> Blog</li>
                    <li className={styles.listItem}> Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className="cart">
                <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
