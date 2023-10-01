import React from 'react';

const Numbers = ({ step }) => {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <div
        className={`relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl ${
          step === 1 ? 'bg-violet-600' : 'bg-gray-200 text-gray-700'
        }`}
      >
        1
      </div>
      <div
        className={`relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl ${
          step === 2 ? 'bg-violet-600' : 'bg-gray-200 text-gray-700'
        }`}
      >
        2
      </div>
      <div
        className={`relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl ${
          step === 3 ? 'bg-violet-600' : 'bg-gray-200 text-gray-700'
        }`}
      >
        3
      </div>
    </div>
  );
};

export default Numbers;
