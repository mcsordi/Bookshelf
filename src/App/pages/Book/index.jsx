import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import InfoBook from '../../components/book/BgInfoBook';
import WriterTag from '../../components/book/WriterTag';
import Error from '../../components/general/Error';
import Loading from '../Loading';

function Book() {
  const url = process.env.REACT_APP_BOOK_ID;
  const writer = process.env.REACT_APP_WRITER;
  const id = useParams().id;
  const writerId = useParams().writerId;
  const { data, loading, error } = useFetch([`${url}/${id}`, `${writer}/${writerId}`]);
  const infoBook = data[0];
  const infoWriter = data[1];
  const imageUrl = `https://m.media-amazon.com/images/I`;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="mx-auto flex">
      <InfoBook image={imageUrl} data={infoBook}>
        <WriterTag data={infoWriter} />
      </InfoBook>
    </div>
  );
}
export default Book;
