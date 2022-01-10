import Image from "next/image"
import { useState } from "react"
import styles from "../../styles/Product.module.css"
function Product() {
    const [size,setSize] = useState(0)
    const pizza = {
        id: 1,
        img:"/img/pizza.png",
        name:"CAMPAGNOLA",
        price:[19.50, 22.50, 24.50],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    }      
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" alt=""></Image>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}> {pizza.desc}</p>
                <h3 className={styles.chose}>Chose your Pizza Size</h3>
                <div className={styles.sizes}>
                <div className={styles.size} onClick={()=> setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>
                            Small
                        </span>
                    </div>
                    <div className={styles.size} onClick={()=> setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>
                            Medium
                        </span>
                    </div>
                    <div className={styles.size} onClick={()=> setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt=""></Image>
                        <span className={styles.number}>
                            Large
                        </span>
                    </div>
                </div>
                <h3 className={styles.chose}>Chose Additional Ingeradience</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input type="checkbox" 
                        id="double"
                        name="double"
                        className={styles.checkbox}
                        />
                        <label htmlFor="double">Double Ingradients</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" 
                        id="Cheese"
                        name="Cheese"
                        className={styles.checkbox}
                        />
                        <label htmlFor="Cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" 
                        id="spicy"
                        name="spicy"
                        className={styles.checkbox}
                        />
                        <label htmlFor="spicy">Spicy Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input type="checkbox" 
                        id="garlic"
                        name="garlic"
                        className={styles.checkbox}
                        />
                        <label htmlFor="garlic">Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number"  defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
