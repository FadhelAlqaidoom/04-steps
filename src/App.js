import { useState } from 'react';
import Buttons from './components/Buttons';
import Message from './components/Message';
import Numbers from './components/Numbers';
import { LuX, LuCircle } from 'react-icons/lu';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const showSteps = () => {
    setIsOpen(!isOpen);
  };

  const updateStep = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="flex min-h-screen justify-center items-center pb-96 text-lg font-bold text-white">
      <button onClick={showSteps}>
        {isOpen === true ? (
          <LuX className="text-gray-900 w-10 h-10 font-bold absolute top-1 right-1" />
        ) : (
          <LuCircle className="text-gray-900 w-10 h-10 font-bold absolute top-1 right-1" />
        )}
      </button>
      <div
        className={`grid grid-cols-1 grid-rows-3 items-center gap-16 p-10 bg-gray-50 container mx-auto xl:mx-96 rounded-xl ${
          isOpen === true ? '' : 'invisible'
        }`}
      >
        <Numbers step={step} />
        <Message step={step} message={messages[step - 1]} />
        <Buttons updateStep={updateStep} />
      </div>
    </div>
  );
}
