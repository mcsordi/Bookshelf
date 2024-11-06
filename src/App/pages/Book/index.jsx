import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import InfoBook from '../../components/book/InfoBook';
import WriterTag from '../../components/book/WriterTag';

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
    return <div>loading...</div>;
  }
  if (error) {
    return <div>erro...</div>;
  }
  return (
    <InfoBook image={imageUrl} data={infoBook}>
      <WriterTag data={infoWriter} />
    </InfoBook>
  );
}
export default Book;
