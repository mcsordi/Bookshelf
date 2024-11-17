import P from 'prop-types';
import { Link } from 'react-router-dom';

function Logo({ whereTo }) {
  return (
    <Link to={`${whereTo}`}>
      <div className="text-slate-950 items-baseline font-nunito flex flex-row font-bold">
        <span className="text-4xl leading-9 border-b-4 border-yellow-500 rounded-sm">Book</span>
        <span className="text-2xl font-semibold">Shelf</span>
      </div>
    </Link>
  );
}
Logo.propTypes = {
  whereTo: P.string,
};
export default Logo;
