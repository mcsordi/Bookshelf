import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={'/'}>
      <div className="text-slate-950 items-baseline font-nunito flex flex-row font-bold">
        <span className="text-4xl border-b-4 border-yellow-500 rounded-sm">Book</span>
        <span className="text-2xl font-semibold">Shelf</span>
      </div>
    </Link>
  );
}
export default Logo;
