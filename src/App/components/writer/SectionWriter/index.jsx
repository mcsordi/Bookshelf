import P from 'prop-types';
function SectionWriter({ children }) {
  return <div className="min-h-96 bg-white flex gap-5 py-8 px-6 my-6 rounded-md">{children}</div>;
}
SectionWriter.propTypes = {
  children: P.node,
};
export default SectionWriter;
