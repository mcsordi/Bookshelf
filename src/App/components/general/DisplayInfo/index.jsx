import P from 'prop-types';
import { IoClose } from 'react-icons/io5';
import { useContext } from 'react';
import { displayContext } from '../../../context/displayInfoContext';

function DisplayInfo({ children }) {
  const { displayInfo, setDisplayInfo } = useContext(displayContext);

  return (
    <div className={`${displayInfo} z-20 p-4 h-full absolute top-0 right-0 bg-white max-w-72`}>
      <IoClose className="m-1 cursor-pointer absolute text-2xl right-0" onClick={() => setDisplayInfo('hidden')} />
      {children}
    </div>
  );
}
DisplayInfo.propTypes = {
  children: P.node,
};

export default DisplayInfo;
