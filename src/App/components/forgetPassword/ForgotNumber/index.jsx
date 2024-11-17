import P from 'prop-types';
function ForgotNumber({ refs, target }) {
  return (
    <input
      ref={refs}
      maxLength={1}
      className="font-nunito text-lg rounded-md text-center border border-gray-300 w-12 h-12"
      onChange={(e) => e.target.value != '' && target?.current.focus()}
      onFocus={(e) => (e.target.value = '')}
    ></input>
  );
}
ForgotNumber.propTypes = {
  refs: P.object,
  target: P.object,
};
export default ForgotNumber;
