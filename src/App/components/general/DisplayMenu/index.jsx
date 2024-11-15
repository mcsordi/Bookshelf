import DisplayItems from '../DisplayItems';
import { Link } from 'react-router-dom';
import DisplayInfo from '../DisplayInfo';
import { useContext } from 'react';
import { userContext } from '../../../context/userContext';
function DisplayMenu() {
  const { display } = useContext(userContext);

  return (
    <>
      <div
        className={`${display} font-nunito font-medium flex flex-col
      absolute bg-slate-50 p-1 rounded-md gap-0.5 right-0 top-20 z-20`}
      >
        <DisplayItems text={`Trocar Senha`} />
        <DisplayItems text={`Alterar foto`} />
        <DisplayItems text={`Termos de uso`} />
        <Link to={'/'} onClick={() => localStorage.removeItem('userEmail')}>
          <DisplayItems text={'Sair'} />
        </Link>
      </div>
      <DisplayInfo>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium, velit eu semper ultrices, risus libero
          ullamcorper dolor, id cursus urna lectus eget ante. Proin ut lacus nulla. Nullam sodales neque vitae tellus
          dapibus consectetur. Vestibulum eu volutpat nibh. Sed lobortis consectetur orci, feugiat molestie nibh auctor
          ut. Etiam congue mauris nibh, mollis accumsan urna accumsan at. Praesent ornare, tellus ut rhoncus euismod,
          felis dui consequat dui, eget bibendum orci nibh quis sapien. Sed sit amet enim at nibh vulputate feugiat.
          Proin dapibus lobortis ex id faucibus. Duis hendrerit quam mauris, ac viverra magna posuere nec. Curabitur et
          sem ut eros suscipit ultricies id et nulla. Duis egestas lectus diam, at laoreet nisl tempor ut. Phasellus a
          ipsum tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer orci arcu, convallis vel arcu
          non, accumsan eleifend nibh. Aliquam vestibulum a risus eget facilisis. Nam finibus, nibh in aliquam
          scelerisque, ligula ipsum sagittis lacus, sed efficitur magna magna at metus. Fusce sit amet venenatis ipsum,
          eu efficitur quam. Aenean malesuada magna nec lacus sagittis, ac tempor eros convallis. Nulla porta magna est,
          sed fringilla ante fermentum vitae.
        </div>
      </DisplayInfo>
    </>
  );
}

export default DisplayMenu;
