import { FaEdit } from 'react-icons/fa';

function ImageProfile() {
  const firstLetter = localStorage.getItem('userEmail')[0].toLocaleUpperCase();
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`bg-cover cursor-pointer relative flex items-center border-4 font-semibold font-nunito
     border-gray-400 justify-center text-5xl text-white mx-auto w-28 h-28
      bg-black rounded-full`}
      >
        {firstLetter}
        <div>
          <FaEdit className="cursor-pointer absolute bottom-1 right-3 text-yellow-400 text-3xl " />
        </div>
      </div>

      <div className=" flex items-center justify-center mx-auto gap-3">
        <button className="border p-2 rounded-md bg-red-600 font-nunito text-lg font-medium">Excluir</button>
        <button className="border p-2 rounded-md bg-green-400 font-nunito text-lg font-medium">Escolher</button>
      </div>
    </div>
  );
}
export default ImageProfile;
