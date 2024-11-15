import P from 'prop-types';
function Container({ children }) {
  return <div className="flex flex-col gap-2.5 w-64 m-4">{children}</div>;
}
Container.propTypes = {
  children: P.node,
};
export default Container;
