import styles from "./styles.module.css"
import React from "react";


export default function Responsivecontainer({isMobile, children}) {
 return <div className={isMobile ? styles.isMobile : styles.isDesktop}>
{children}
 </div>
}