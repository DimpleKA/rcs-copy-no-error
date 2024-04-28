import React from 'react';
import Image from 'next/image';
import styles from './CSS/Portfolio.module.css'; // Import CSS module for styling

function Portfolio() {
  return (
    <div>
      <div className="row">
        <div className="text-2xl text-red-500 p-5">Portfolio</div>
      </div>

      <div className={`row sm:flex lg:flex justify-center ${styles.portfolioContainer}`}>

{/* card one starts */}
        <div className={`col m-5 sm:w-full sm:h-96 lg:w-96 lg:h-96 p-5 flex ${styles.portfolioItem}`}>
          <div className={`${styles.leftSide} ${styles.red}`}>
            div
          </div>
          <div className={`${styles.rightSide}`}>
            <Image className="w-full h-full" src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
{/* card one ends */}

       {/* card one starts */}
       <div className={`col m-5 sm:w-full sm:h-96 lg:w-96 lg:h-96 p-5 flex ${styles.portfolioItem}`}>
          <div className={`${styles.leftSide} ${styles.red}`}>
            div
          </div>
          <div className={`${styles.rightSide}`}>
            <Image className="w-full h-full" src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
{/* card one ends */}

       {/* card one starts */}
       <div className={`col m-5 sm:w-full sm:h-96 lg:w-96 lg:h-96 p-5 flex ${styles.portfolioItem}`}>
          <div className={`${styles.leftSide} ${styles.red}`}>
            div
          </div>
          <div className={`${styles.rightSide}`}>
            <Image className="w-full h-full" src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
{/* card one ends */}


      </div>
    </div>
  );
}

export default Portfolio;
