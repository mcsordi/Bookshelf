import { useEffect, useRef, useState } from 'react';
import EditIcon from '../EditIcon';

function ImageProfile() {
  const firstLetter = localStorage.getItem('userEmail')[0].toLocaleUpperCase();
  const photo = localStorage.getItem('profileFoto');
  const imageSelector = useRef();
  const [changed, setChanged] = useState();
  const [localImage, setLocalImage] = useState();

  const handleFileChange = async (e) => {
    const getImage = imageSelector.current.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setChanged(e);
      localStorage.setItem('profileFoto', reader.result);
    };
    reader.readAsDataURL(getImage);
  };

  useEffect(() => {
    setLocalImage(photo);
  }, [changed, photo]);

  const handleImage = () => {
    imageSelector.current.click();
  };

  return (
    <div className="flex flex-col gap-5">
      {photo ? (
        <div className="relative flex mx-auto">
          <img
            className="w-28 h-28 rounded-full flex mx-auto cursor-pointer border-gray-400 border-4"
            src={localImage}
          />
          <EditIcon onClick={() => imageSelector.current.click()} />
        </div>
      ) : (
        <div
          className={`bg-cover cursor-pointer relative flex items-center border-4 font-semibold font-nunito
     border-gray-400 justify-center text-5xl text-white mx-auto w-28 h-28
      bg-black rounded-full`}
        >
          {firstLetter}
          <div>
            <EditIcon onClick={() => imageSelector.current.click()} />
          </div>
        </div>
      )}

      <div className="flex w-full flex-col items-center justify-center mx-auto gap-3">
        <input ref={imageSelector} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
        <button
          className="border py-2 w-full rounded-md bg-gray-500 text-white font-nunito text-lg font-medium"
          onClick={(e) => {
            return localStorage.removeItem('profileFoto'), setChanged(e);
          }}
        >
          Excluir
        </button>
        <button
          className="border w-full py-2 rounded-md bg-cyan-800 text-white font-nunito text-lg font-medium"
          onClick={handleImage}
        >
          Escolher
        </button>
      </div>
    </div>
  );
}
export default ImageProfile;
