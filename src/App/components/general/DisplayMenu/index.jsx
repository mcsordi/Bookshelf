import DisplayItems from '../DisplayItems';
import { Link } from 'react-router-dom';
import DisplayInfo from '../DisplayInfo';
import { useContext, useReducer } from 'react';
import { userContext } from '../../../context/userContext';
import { reducer } from '../../../reducer/reducerFunc';
import { displayState } from '../../../reducer/displayState';

function DisplayMenu() {
  const { display } = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, displayState);

  return (
    <>
      <div
        className={`${display} font-nunito font-medium flex flex-col
      absolute bg-slate-50 p-1 rounded-md gap-0.5 right-0 top-20 z-20`}
      >
        <DisplayItems onClick={(e) => dispatch(e)} text={`Trocar Senha`} />
        <DisplayItems onClick={(e) => dispatch(e)} text={`Alterar foto`} />
        <DisplayItems onClick={(e) => dispatch(e)} text={`Termo de uso`} />
        <Link to={'/'} onClick={() => localStorage.removeItem('userEmail')}>
          <DisplayItems onClick={() => ''} text={'Sair'} />
        </Link>
      </div>
      <DisplayInfo>{state.element}</DisplayInfo>
    </>
  );
}

export default DisplayMenu;
