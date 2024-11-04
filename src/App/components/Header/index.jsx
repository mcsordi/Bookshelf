import InputBook from '../InputBook';
import Logo from '../Logo';
import Nav from '../Nav';

function Header() {
  return (
    <>
      <header className="px-3 justify-between flex sm:justify-around items-baseline sm:px-6 py-5 w-full bg-slate-500">
        <Logo />
        <InputBook display={`hidden md:flex`} />
        <Nav />
      </header>
      <InputBook display={`w-full py-4 px-0 flex md:hidden`} />
    </>
  );
}
export default Header;
