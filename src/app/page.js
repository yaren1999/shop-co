import Image from "next/image";
import styles from "./page.module.css";
import Promotion from "@/components/user/Promotion/Promotion";
import Brands from "@/components/user/Brands/Brands";
import Header from "@/components/user/Header/Header";

export default function Home() {
  return (
   <div>
    <Header/>
    <Promotion/>
    <Brands/>
   </div>
  );
}
