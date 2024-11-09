import P from 'prop-types';
function Button({ textBtn, onClick }) {
  return (
    <button
      onClick={(evt) => {
        return (
          evt.preventDefault(),
          onClick(evt.target),
          setTimeout(() => {
            onClick('');
          }, 1000)
        );
      }}
      className="text-slate-950 text-lg font-medium bg-yellow-500  mt-2 p-3 rounded-md"
    >
      {textBtn}
    </button>
  );
}
Button.propTypes = {
  textBtn: P.string,
  onClick: P.func,
};
export default Button;
