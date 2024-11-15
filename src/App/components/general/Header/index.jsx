import InfoDisplayContext from '../../../context/displayInfoContext';
import PasswordContext from '../../../context/passwordContext';
import SearchContext from '../../../context/searchContext';
import InfoUserContext from '../../../context/userContext';
import InputBook from '../InputBook';
import Logo from '../Logo';
import Nav from '../Nav';

function Header() {
  return (
    <SearchContext>
      <InfoDisplayContext>
        <InfoUserContext>
          <PasswordContext>
            <header className="px-3 top-0 justify-between flex sm:justify-around items-baseline sm:px-6 py-5 w-full bg-slate-500">
              <Logo />
              <InputBook display={`hidden sm:flex sm:flex-col`} />
              <Nav />
            </header>
            <InputBook display={`w-full py-4 px-0 flex flex-col sm:hidden`} />
          </PasswordContext>
        </InfoUserContext>
      </InfoDisplayContext>
    </SearchContext>
  );
}
export default Header;
