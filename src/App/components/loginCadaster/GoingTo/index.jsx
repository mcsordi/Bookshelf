import P from 'prop-types';
import { Link } from 'react-router-dom';

function GoingTo({ text, destiny, onClick = '' }) {
  return (
    <Link className="hover:text-blue-700 text-gray-500 font-medium" to={`${destiny}`} onClick={(e) => onClick(e)}>
      {text}
    </Link>
  );
}
GoingTo.propTypes = {
  text: P.string,
  destiny: P.string,
  onClick: P.func,
};
export default GoingTo;
