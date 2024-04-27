import React from 'react';
import styles from './CSS/CommonNavig.module.css';

const CommonNavig = (props) => {
  return (
    <div className={styles.CommonNavig}>
      {/* Outer row */}
      <div className="w-full h-full">
        <div className="w-full p-5">
          {/* First column */}
          <div className="w-1/2 p-5 flex items-center">
            <h2 className="text-base "> <span className='text-red-500'>Home</span> <span className="mx-1">&gt;</span>{props.page} </h2>
          </div>
          {/* Second column */}
          <div className="w-1/2 p-5 flex items-center">
            <h2 className="text-2xl">{props.page}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonNavig;
