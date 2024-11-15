import P from 'prop-types';
import ResultContainer from '../ResultContainer';
import { useContext, useEffect, useRef, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { search } from '../../../context/searchContext';

function InputBook({ display }) {
  const { value, setValue } = useContext(search);
  const [text, setText] = useState();
  const input = useRef();

  useEffect(() => {
    value && setText('');
  }, [value]);

  return (
    <div className={`${display} relative mx-auto px-2 w-96 lg:w-[500px]`}>
      <div className="text-gray-400 focus-within:text-gray-700">
        <MdOutlineSearch
          className="mx-2 absolute flex   h-auto my-auto pt-2 text-3xl"
          onClick={() => {
            return input.current.focus(), setValue(false), (input.current.value = '');
          }}
        />
        <input
          ref={input}
          placeholder="Harry Potter e a pedra filosofal"
          type="search"
          className="font-semibold font-nunito text-lg focus:ring-2
           focus:ring-gray-700 rounded-md w-full mx-auto outline-none py-3 pl-10 pr-3"
          onChange={() => setText(input.current.value.toLowerCase().trim())}
          onClick={() => {
            return setValue(false), (input.current.value = '');
          }}
          onBlur={() =>
            setTimeout(() => {
              setValue(true);
            }, 300)
          }
        />
      </div>
      <div className="mt-2 relative flex items-start justify-center">
        <ResultContainer input={input} text={text} />
      </div>
    </div>
  );
}

InputBook.propTypes = {
  display: P.string,
};
export default InputBook;
