import Image from "next/image"
import styles from "../styles/Fetaured.module.css"
function Featured() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.bannerText}>
                <div className={styles.text}>
                       50% OFF
                    </div>
                    <div className={styles.text}>
                        PIZZA MART
                    </div>
                    <div className={styles.text}>
                    Pizza, favored by all ages, dates back to 1889. Pizza, garnished with Mozzarella and tomatoes, was normally known as the dish for poor people until it became a famous dish for the wealthy when Queen Margherita had it as a meal as well. Pizza,
                    </div>
                </div>
                    <div className={styles.imgContainer} >
                    <Image src="/img/featured3.png" 
                    height="500"
                    width="800"
                    alt="" />
                    </div>              
           </div>
        </div>
    )
}

export default Featured
