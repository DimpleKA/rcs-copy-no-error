import React from 'react';

function Portfolio() {
  return (
    <div>
      <div className="row">
        <div className="text-2xl text-red-500 p-5">Portfolio</div>
      </div>

      <div className="row sm:inline-flex lg:flex justify-center ">
        <div className="col w-full sm:w-1/3 p-5 flex">
            <div className='bg-red-500 '>jv</div>
            <div className='h-full'>
            <img className="w-full h-full" src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>
        </div>

        <div className="col w-full sm:w-1/3 p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
        <div className="col w-full sm:w-1/3 p-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://via.placeholder.com/150" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
