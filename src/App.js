import { useState } from 'react';
import Buttons from './components/Buttons';
import Message from './components/Message';
import Numbers from './components/Numbers';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);

  const updateStep = (newStep) => {
    setStep(newStep);
  };

  return (
    <div className="flex min-h-screen justify-center items-center pb-96 text-lg font-bold text-white">
      <div className="grid grid-cols-1 grid-rows-3 items-center gap-16 p-10 bg-gray-50 container mx-auto xl:mx-96 rounded-xl">
        <Numbers step={step} />
        <Message step={step} message={messages[step - 1]} />
        <Buttons updateStep={updateStep} />
      </div>
    </div>
  );
}
