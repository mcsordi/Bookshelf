import P from 'prop-types';
function FormContainer({ children }) {
  return <div className="flex flex-col p-5 items-center gap-8 justify-center">{children}</div>;
}
FormContainer.propTypes = {
  children: P.node,
};
export default FormContainer;
