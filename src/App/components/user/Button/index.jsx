import P from 'prop-types';
function Button({ textBtn, loading }) {
  return (
    <button
      disabled={loading == true}
      className={`text-slate-950 text-lg font-medium hover:ring-2 hover:ring-gray-400
         ${loading ? `bg-gray-500 text-white` : `bg-yellow-500`} transition-all  mt-2 p-3 rounded-md w-full`}
      type="submit"
    >
      {textBtn}
    </button>
  );
}
Button.propTypes = {
  textBtn: P.string,
  loading: P.bool,
};
export default Button;
