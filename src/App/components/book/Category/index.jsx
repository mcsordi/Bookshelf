import P from 'prop-types';
function Category({ target, element, setTarget }) {
  return (
    <div
      className={` ${target == element.category ? `font-nunito bg-slate-950 text-white` : `bg-white border border-gray-300`}
      cursor-pointer font-medium  rounded-md px-2 py-0.5`}
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
