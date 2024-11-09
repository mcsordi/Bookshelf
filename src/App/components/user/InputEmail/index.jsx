import P from 'prop-types';
import { useRef } from 'react';
function InputEmail({ id, type, setEmail }) {
  const focus = useRef();
  return (
    <input
      ref={focus}
      id={id}
      className="rounded-md px-2 py-3.5 border border-gray-300 sm:w-96"
      type={type}
      onChange={(evt) => setEmail(evt.target.value)}
    />
  );
}
InputEmail.propTypes = {
  id: P.string,
  type: P.string,
  setEmail: P.func,
};
export default InputEmail;
