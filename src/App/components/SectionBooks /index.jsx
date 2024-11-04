import P from 'prop-types';
function SectionBooks({ children }) {
  return <section className="flex gap-2.5 px-6 py-2.5">{children}</section>;
}
SectionBooks.propTypes = {
  children: P.node,
};
export default SectionBooks;
