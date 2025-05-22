import Image from "next/image";
import styles from "./style.module.css";
import Product  from "../../../utils/apiUtils/ProductUtil"



const Brands = async () => {
   
    return (
        <div className={styles.pageWrapper}>
       
            <div className={styles.leftSidebar}>
                <h2>TOP BRANDS</h2>
                <div className={styles.brandList}>
                    <Image src="/brands/versace.png" alt="Brand 1" width={150} height={60} />
                    <Image src="/brands/prada.png" alt="Brand 2" width={150} height={60} />
                    <Image src="/brands/gucci.png" alt="Brand 3" width={150} height={60} />
                    <Image src="/brands/calvin.png" alt="Brand 4" width={150} height={60} />
                    <Image src="/brands/zara.png" alt="Brand 5" width={150} height={60} />
                </div>
            </div>

           
          

          
            <div className={styles.rightSidebar}>
                <h2>TOP BRANDS</h2>
                <div className={styles.brandList}>
                    <Image src="/brands/versace.png" alt="Brand 1" width={150} height={60} />
                    <Image src="/brands/prada.png" alt="Brand 2" width={150} height={60} />
                    <Image src="/brands/gucci.png" alt="Brand 3" width={150} height={60} />
                    <Image src="/brands/calvin.png" alt="Brand 4" width={150} height={60} />
                    <Image src="/brands/zara.png" alt="Brand 5" width={150} height={60} />
                </div>
            </div>
        </div>
    );
};

export default Brands;
