import Image from "next/image";
import styles from "./style.module.css";

const Brands = async () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.topBrandsBar}>
        <h2>TOP BRANDS</h2>
        <div className={styles.brandList}>
          <Image src="/brands/versace.png" alt="Versace" width={120} height={50} />
          <Image src="/brands/prada.png" alt="Prada" width={120} height={50} />
          <Image src="/brands/gucci.png" alt="Gucci" width={120} height={50} />
          <Image src="/brands/calvin.png" alt="Calvin Klein" width={120} height={50} />
          <Image src="/brands/zara.png" alt="Zara" width={120} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Brands;





