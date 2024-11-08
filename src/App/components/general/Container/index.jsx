import P from 'prop-types';
function Container({ children }) {
  return <section className="flex flex-col bg-slate-200 min-h-screen w-full">{children}</section>;
}
Container.propTypes = {
  children: P.node,
};
export default Container;
