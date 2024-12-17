
import React from "react";
import styles from "./ScoreBar.module.css";

const ScoreBar = ({ percentage }) => {
   //percentage between 0 and 100
   const safePercentage = Math.min(100, Math.max(0, percentage));

   // Calculate the triangle rotation based on percentage
   const rotation = -90 + (safePercentage * 1.8); // 180° semi-circle movement
 
   return (
     <div className={styles.container}>
       {/* SVG Semi-Circle with Gradient */}
       <svg viewBox="0 0 100 50" className={styles.arc}>
         <defs>
           <linearGradient id="gradient" >
             <stop offset="0%" stopColor="red" />
             <stop offset="60%" stopColor="yellow" />
             <stop offset="120%" stopColor="green" />
           </linearGradient>
         </defs>
         <path
           d="M 10 50 A 40 40 0 0 1 90 50"
           stroke="url(#gradient)"
           strokeWidth="4"
           fill="#EBEDF5"
         />
       </svg>
 
       {/* Dynamic Triangle Pointer */}
       <div
         className={styles.pointer}
         style={{ transform: `rotate(${rotation}deg)` }}
       >
       
       </div>
 
       {/* Percentage Display */}
       <div className={styles.percentage}>{safePercentage}%</div>
     </div>
   );
 };
 

export default ScoreBar;