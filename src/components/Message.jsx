import React from 'react';

const Message = (props) => {
  return (
    <p className="grid grid-cols-1 justify-items-center text-3xl font-bold text-gray-700">
      step {props.step}: {props.message}
    </p>
  );
};

export default Message;
