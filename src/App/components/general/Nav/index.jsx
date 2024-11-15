import DisplayMenu from '../DisplayMenu';
import { useContext } from 'react';
import { userContext } from '../../../context/userContext';

function Nav() {
  const user = localStorage.getItem('userEmail');
  const capitalLetter = user && user[0].toLocaleUpperCase();
  const { display, setDisplay } = useContext(userContext);

  return (
    <>
      <nav className="flex gap-3 items-baseline">
        <div
          className="bg-black min-w-10 h-10 border-gray-400 border-2 cursor-pointer rounded-full font-bold
         text-white items-center justify-center flex"
          onClick={() => (display == `hidden` ? setDisplay('flex') : setDisplay('hidden'))}
        >
          {capitalLetter}
        </div>

        <p className="font-nunito text-lg hidden w-40 truncate md:w-full  md:flex">{user}</p>
      </nav>
      <DisplayMenu />
    </>
  );
}

export default Nav;
