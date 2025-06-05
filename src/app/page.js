import Image from "next/image";
import styles from "./page.module.css";
import Promotion from "@/components/user/Promotion/Promotion";
import Brands from "@/components/user/Brands/Brands";

import HomeProducts from "@/components/user/HomeProducts/HomeProducts";
import BestSellerProducts from "@/components/user/BestSellerProducts/BestSellerProducts";
import HappyCustomers from "@/components/user/HappyCustomers/HappyCustomers";

export default function Home() {
  return (
   <div>
    
    <Promotion/>
    <Brands/>
    <HomeProducts/>
    <BestSellerProducts/> 
    <HappyCustomers/>
   </div>
  );
}
