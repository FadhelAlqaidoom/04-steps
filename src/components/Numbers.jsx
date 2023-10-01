import React from 'react';

const Numbers = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      <div className="relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl bg-violet-600">
        1
      </div>
      <div className="relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl bg-slate-100 text-gray-700">
        2
      </div>
      <div className="relative w-4 h-4 rounded-full flex justify-center items-center text-center p-5 shadow-xl bg-slate-100 text-gray-700">
        3
      </div>
    </div>
  );
};

export default Numbers;
