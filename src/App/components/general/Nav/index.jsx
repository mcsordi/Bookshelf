import DisplayMenu from '../DisplayMenu';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../context/userContext';
import { displayContext } from '../../../context/displayInfoContext';

function Nav() {
  const user = localStorage.getItem('userEmail');
  const capitalLetter = user && user[0].toLocaleUpperCase();
  const { display, setDisplay } = useContext(userContext);
  const [profilePhoto, setProfilePhoto] = useState();
  const image = localStorage?.getItem('profileFoto');
  const { displayInfo } = useContext(displayContext);

  useEffect(() => {
    setProfilePhoto(image);
  }, [displayInfo, image]);

  return (
    <>
      <nav className="flex my-auto justify-center gap-3 items-baseline">
        {profilePhoto ? (
          <img
            className="max-w-10 h-10 rounded-full cursor-pointer"
            src={profilePhoto}
            onClick={() => (display == `hidden` ? setDisplay('flex') : setDisplay('hidden'))}
          />
        ) : (
          <div
            className={`bg-black min-w-10 h-10 border-gray-400 border-2 cursor-pointer rounded-full font-bold
         text-white items-center justify-center flex`}
            onClick={() => (display == `hidden` ? setDisplay('flex') : setDisplay('hidden'))}
          >
            {capitalLetter}
          </div>
        )}

        <p className="my-auto font-nunito text-lg hidden w-40 truncate md:w-full  md:flex">{user}</p>
      </nav>
      <DisplayMenu />
    </>
  );
}

export default Nav;
