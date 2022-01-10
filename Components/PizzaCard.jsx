import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"
function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500"></Image>
            <h2 className={styles.title}>FIORI DI ZUCCA</h2>
            <span className={styles.price}>19.05</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio.
            </p>
        </div>
    )
}

export default PizzaCard
