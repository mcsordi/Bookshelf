import P from 'prop-types';
import { Link } from 'react-router-dom';
function WriterTag({ data }) {
  const writerName = data[0].writer;
  const writerId = data[0].writerId;
  const writerImg = data[0].writerImg;
  return (
    <div className="px-6 mx-auto md:mx-0 flex items-center flex-center">
      <Link to={`/writer/${writerId}`}>
        <img className="w-10 rounded-full" src={`${writerImg}`} />
      </Link>
      <Link to={`/writer/${writerId}`}>
        <p className="px-3">{writerName}</p>
      </Link>
    </div>
  );
}
WriterTag.propTypes = {
  data: P.array,
};
export default WriterTag;
