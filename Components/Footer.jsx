import Image from "next/image"
import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src = "/img/bg.png" objectFit="cover" alt="" layout="fill"/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH Yes we Did Best Pizza In Your Town
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}> FIND OUR RETUARENTS</h1>
                    <p className={styles.text}>
                        MOllPARA, BASHTOLA
                        <br /> JASHORE SADAR
                        <br /> 045 456 110
                    </p>
                    <p className={styles.text}>
                        BEJPARA, AKBOR MOR
                        <br />JASHORE SADAR
                        <br /> 045 456 110
                    </p>
                    <p className={styles.text}>
                        SHANKARPUR, CHOPDARPARA
                        <br /> JASHORE SADAR
                        <br />045 456 110
                    </p>
                    <p className={styles.text}>
                        RN ROAD
                        <br />  JASHORE SADAR
                        <br /> 045 456 110
                    </p>
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}> WORKING HOURS</h1>
                <p className={styles.text}>
                        MONDAY UNTILL FRIDAY
                        <br />  09:00AM - 10:00PM      
                    </p>
                    <p className={styles.text}>
                        STAURDAY TO SUNDAY
                        <br />  11:00AM - 11:59PM      
                    </p>
                </div>
                </div> 
        </div>
    )
}

export default Footer
