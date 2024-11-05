import P from 'prop-types';
import { Link } from 'react-router-dom';
function WriterTag({ data }) {
  return (
    <div className="px-6 mx-auto flex items-center flex-center">
      <Link>
        <img className="w-10 rounded-full" src={`${data[0].writerImg}`} />
      </Link>
      <Link>
        <p className="px-3">{data[0].writer}</p>
      </Link>
    </div>
  );
}
WriterTag.propTypes = {
  data: P.array,
};
export default WriterTag;
