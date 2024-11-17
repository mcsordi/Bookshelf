import P from 'prop-types';

function MainContainer({ children }) {
  return <section className="bg-slate-50 flex h-screen items-center justify-center">{children}</section>;
}
MainContainer.propTypes = {
  children: P.node,
};
export default MainContainer;
