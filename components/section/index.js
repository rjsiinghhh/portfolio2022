import Image from "next/image";
import React from "react";


export default function Section({name, description, number, image, buttonText, onClick, children}) {
 return <div className="section">
<div>
   <h2>{ number && <span> {number}. </span>}{name}</h2> 
   {description &&<p>{description}</p>}
   {image&&<Image width={200} height={200} src={image}></Image>}
</div>

{buttonText && <button onClick={onClick}>{buttonText}</button>}
{children}
 </div>}