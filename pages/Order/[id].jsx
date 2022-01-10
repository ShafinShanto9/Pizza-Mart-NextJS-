import Image from "next/image";
import styles from "../../styles/Order.module.css";

function Order() {
    const status = 0; 
    const statusClass =(index) =>{
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.unDone
    }
    return (
        <div className={styles.container}>
            <div className ={styles.left}>
                <div className={styles.row}>
                <table className={styles.table}>
                   <tr className={styles.tr}>
                       <th>Order ID</th>
                       <th>Custome</th>
                       <th>Address</th>
                       <th>Total</th>
                   </tr>
                   <tr>
                       <td>
                           <span className={styles.id}>54545321</span>
                       </td>
                       <td>
                       <span className={styles.name}>
                          Dummy Name
                       </span>
                       </td>
                       <td>
                       <span className={styles.address}>
                          Dummy Address 10102
                       </span>
                       </td>
                       <td>
                           <span className={styles.total}>39.80</span>
                       </td>
                   </tr>
               </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/paid.png" width={30} height={30} alt=""></Image>
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""></Image>
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png" width={30} height={30} alt=""></Image>
                        <span>Prepare</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""></Image>
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/bike.png" width={30} height={30} alt=""></Image>
                        <span>On The Way</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""></Image>
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png" width={30} height={30} alt=""></Image>
                        <span>Deliverd</span>
                        <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt=""></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className ={styles.right}>
            <div className={styles.wrapper}>
                   <h2 className={styles.title}>Cart Total</h2>
                   <div className={styles.totlaText}>
                       <b className={styles.totalTextTitle}> SubTotal:</b>79.60
                   </div>
                   <div className={styles.totlaText}>
                       <b className={styles.totalTextTitle}> Discount:</b>00.00
                   </div>
                   <div className={styles.totlaText}>
                       <b className={styles.totalTextTitle}> Total:</b>79.60
                   </div>
                   <button disabled className={styles.button}>PAID</button>
               </div>
            </div>
        </div>
    )
}

export default Order
