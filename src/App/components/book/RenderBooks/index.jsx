import P from 'prop-types';
import SectionBooks from '../SectionBooks ';
import SpreadFetch from '../../SpreadFetch';
import PosterBook from '../PosterBook';
function RenderBooks({ data, display, size, image }) {
  return (
    <div className="py-2.5">
      <h2 className={`${display} px-6 text-2xl font-medium`}>Destaques</h2>
      <SectionBooks>
        <SpreadFetch data={data}>
          {(element, id) => <PosterBook image={image} size={size} key={id} book={element} />}
        </SpreadFetch>
      </SectionBooks>
    </div>
  );
}
RenderBooks.propTypes = {
  data: P.array,
  display: P.string,
  size: P.string,
  image: P.string,
};
export default RenderBooks;
