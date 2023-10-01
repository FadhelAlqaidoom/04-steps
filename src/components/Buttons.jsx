import React from 'react';

const Buttons = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center">
      <button className="transition ease-in-out hover:-translate-y-1 hover:scale-104  duration-300 relative w-auto h-4 bg-violet-600 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
        Previos
      </button>
      <button className="transition ease-in-out hover:-translate-y-1 hover:scale-104  duration-300 relative w-auto h-4 bg-violet-600 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
        Next
      </button>
    </div>
  );
};

export default Buttons;
