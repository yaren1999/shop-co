import Link from 'next/link';
import styles from './style.module.css';
import Image from 'next/image';

const Promotion = () => {
    return (
        <div className={styles.container}>
            {/* Sol boş alan - yıldız koymak için */}
            <div className={styles.colorWaveOverImage}></div> {/* Renk dalgası image'ın üstünde */}
            <div className={styles.leftSpace}>
                <img src="/promotion/vector.png" className={styles.star} style={{ top: '30px', left: '20px' }} />
                <img src="/promotion/vectorr.png" className={styles.star} style={{ top: '120px', left: '40px' }} />
                <img src="/promotion/vector.png" className={styles.star} style={{ top: '200px', left: '10px' }} />
                
            </div>

            {/* Sol içerik */}
            <div className={styles.textWrapper}>
                <div className={styles.textContainer}>
                    <h1>FIND CLOTHES</h1>
                    <h1>THAT MATCHES</h1>
                    <h1>YOUR STYLE</h1>

                    <Link href="" className={styles.shopButton}>Buy Now</Link> 
                   

                    <div className={styles.totals}>
                        <Image src="/promotion/Frame54.png" width={90} height={50} alt="img" />
                        <Image src="/promotion/Frame55.png" width={90} height={50} alt="img" />
                        <Image src="/promotion/Frame56.png" width={90} height={50} alt="img" />
                    </div>
                </div>
            </div>
            <Image src="/promotion/vectorr.png" width={100} height={80} alt="img" /> 
            {/* Arka plan resmi */}
            <div className={styles.imageWrapper}>
                <Image src="/promotion/Poses.png" alt="Poses" fill className={styles.posesImage} />
            </div>
        </div>
    )
};

export default Promotion;
