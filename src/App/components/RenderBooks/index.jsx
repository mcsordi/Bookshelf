import P from 'prop-types';
import Books from '../Books';
import SectionBooks from '../SectionBooks ';
import SpreadFetch from '../SpreadFetch';
function RenderBooks({ data, display, size }) {
  return (
    <div className="py-2.5">
      <h2 className={`${display} px-6 text-2xl font-medium`}>Destaques</h2>
      <SectionBooks>
        <SpreadFetch data={data}>{(element, id) => <Books size={size} key={id} book={element} />}</SpreadFetch>
      </SectionBooks>
    </div>
  );
}
RenderBooks.propTypes = {
  data: P.array,
  display: P.string,
  size: P.string,
};
export default RenderBooks;
