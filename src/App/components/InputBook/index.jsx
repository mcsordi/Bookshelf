import P from 'prop-types';
function InputBook({ display }) {
  return (
    <div className={`${display} mx-auto w-96 px-4 lg:w-[500px]`}>
      <input
        placeholder="Harry Potter e a pedra filosofal"
        type="search"
        className="rounded-md w-full mx-auto outline-none py-3 px-4"
      />
    </div>
  );
}

InputBook.propTypes = {
  display: P.string,
};
export default InputBook;
