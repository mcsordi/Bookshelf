import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import InfoBook from '../../components/InfoBook';
import WriterTag from '../../components/WriterTag';

function Book() {
  const url = process.env.REACT_APP_BOOK_ID;
  const id = useParams().id;
  const { data, loading, error } = useFetch([`${url}/${id}`]);
  const infoBook = data[0];

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>erro...</div>;
  }
  return (
    <InfoBook data={infoBook}>
      <WriterTag data={infoBook} />
    </InfoBook>
  );
}
export default Book;
