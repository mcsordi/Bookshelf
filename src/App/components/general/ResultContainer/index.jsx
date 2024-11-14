import P from 'prop-types';
import { useFetch } from '../../../../utils/useFetch';
import ResponseSearch from '../ResponseSearch';
import { search } from '../../../context/searchContext';
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
  const bookResults = bookData?.filter((book) => book.title.toLowerCase().includes(text));
  const writerResults = writerData?.filter((book) => book.writer.toLowerCase().includes(text));

  return (
    <div
      className={`${value && `hidden`} ${text ? `flex` : `hidden`} py-1 flex-col mx-auto absolute
   rounded-md w-full bg-white gap-1 px-1`}
    >
      <ResponseSearch data={bookData} text={text} />
      <SpreadFetch data={writerData}>
        {(item, id) => item.writer?.toLowerCase().includes(text) && <WriterSearch key={id} item={item} />}
      </SpreadFetch>
      {bookResults?.length < 1 && writerResults?.length < 1 && (
        <div className="px-2 py-2 font-mulish text-lg">Ops, nenhum item disponivel.</div>
      )}
    </div>
  );
}
ResultContainer.propTypes = {
  text: P.string,
};
export default ResultContainer;
