import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

function PizzaList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The Best Pizza In Your Town</h1>
            <p className={styles.desc}>
            Pizza, favored by all ages, dates back to 1889. Pizza, garnished with Mozzarella and tomatoes, was normally known as the dish for poor people until it became a famous dish for the wealthy when Queen Margherita had it as a meal as well.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
                <PizzaCard></PizzaCard>
            </div>
        </div>
    )
}

export default PizzaList
