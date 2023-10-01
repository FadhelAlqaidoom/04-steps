import Buttons from './components/Buttons';
import Message from './components/Message';
import Numbers from './components/Numbers';

export default function App() {
  return (
    <div className="flex min-h-screen justify-center items-center pb-96 text-lg font-bold text-white">
      <div className="grid grid-cols-1 grid-rows-3 items-center gap-20 p-10 bg-gray-50 container mx-96 rounded-xl">
        <Numbers />
        <Message />
        <Buttons />
      </div>
    </div>
  );
}
