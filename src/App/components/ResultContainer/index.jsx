import P from 'prop-types';
import { useFetch } from '../../../utils/useFetch';
import ResponseSearch from '../ResponseSearch';
import { search } from '../../context/searchContext';
import { useContext } from 'react';
import SpreadFetch from '../SpreadFetch';
import WriterSearch from '../WriterSearch';

function ResultContainer({ text }) {
  const { value } = useContext(search);
  const books = process.env.REACT_APP_BOOKS;
  const writer = process.env.REACT_APP_WRITER;
  const { data } = useFetch([books, writer]);
  const writerData = data[1];
  const bookData = data[0];

  return (
    <div
      className={`${value && `hidden`} ${text ? `flex` : `hidden`} flex-col mx-auto absolute
     rounded-md w-full bg-white px-1`}
    >
      <ResponseSearch data={bookData} text={text} />
      <div>
        <SpreadFetch data={writerData}>
          {(item, id) => item.writer?.toLowerCase().includes(text) && <WriterSearch key={id} item={item} />}
        </SpreadFetch>
      </div>
    </div>
  );
}
ResultContainer.propTypes = {
  text: P.string,
};
export default ResultContainer;
