import P from 'prop-types';
function Category({ target, element, setTarget }) {
  return (
    <div
      className={` ${target == element.category ? `bg-slate-800 text-white` : `bg-slate-50`}
      cursor-pointer font-medium  rounded-md px-2 py-0.5 bg-slate-50`}
      onClick={(evt) => {
        return setTarget(evt.currentTarget.innerHTML);
      }}
    >
      {element.category}
    </div>
  );
}
Category.propTypes = {
  element: P.shape({
    category: P.string,
  }),
  target: P.string,
  setTarget: P.func,
};
export default Category;
