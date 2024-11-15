import P from 'prop-types';
import { useContext } from 'react';
import { userContext } from '../../../context/userContext';
import { displayContext } from '../../../context/displayInfoContext';

function DisplayItems({ text, onClick }) {
  const { setDisplay } = useContext(userContext);
  const { setDisplayInfo } = useContext(displayContext);
  return (
    <div
      className="p-2 border cursor-pointer rounded-md w-48 hover:ring-2 hover:ring-slate-500  border-gray-300"
      onClick={() => {
        return setDisplay(`hidden`), setDisplayInfo(`flex`), onClick(text);
      }}
    >
      {text}
    </div>
  );
}
DisplayItems.propTypes = {
  text: P.string,
  onClick: P.func,
};
export default DisplayItems;
