import P from 'prop-types';
import { FaEdit } from 'react-icons/fa';

function EditIcon({ onClick }) {
  return (
    <FaEdit
      className="cursor-pointer absolute bottom-1 right-3  text-amber-500 text-3xl "
      onClick={(e) => onClick(e)}
    />
  );
}
EditIcon.propTypes = {
  onClick: P.func,
};
export default EditIcon;
