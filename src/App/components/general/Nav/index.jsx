import { Link } from 'react-router-dom';

function Nav() {
  const user = localStorage.getItem('userEmail');
  const capitalLetter = user && user[0].toLocaleUpperCase();

  return (
    <nav className="flex gap-3 items-baseline">
      <Link onClick={() => localStorage.removeItem('userEmail')} className={`text-black`}>
        sair
      </Link>
      <a href="#">
        <div className="bg-black w-8 h-8 rounded-full font-bold text-white items-center justify-center flex">
          {capitalLetter}
        </div>
      </a>
      <a className="hidden w-40 truncate md:w-full  md:flex" href="#">
        {user}
      </a>
    </nav>
  );
}
export default Nav;
