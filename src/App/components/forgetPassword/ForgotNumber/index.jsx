import P from 'prop-types';
function ForgotNumber({ refs, target, onChange }) {
  return (
    <input
      ref={refs}
      maxLength={1}
      className="font-nunito text-lg rounded-md
       text-center border border-gray-300 w-12 h-12"
      onChange={(e) => {
        return e.target.value != '' && target?.current.focus(), onChange(e.target.value);
      }}
      onFocus={(e) => (e.target.value = '')}
    ></input>
  );
}
ForgotNumber.propTypes = {
  refs: P.object,
  target: P.object,
  onChange: P.func,
};
export default ForgotNumber;
