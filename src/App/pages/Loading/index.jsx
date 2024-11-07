import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Loading() {
  return (
    <div className=" flex justify-center mx-auto my-auto w-full h-full">
      <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
    </div>
  );
}
export default Loading;
