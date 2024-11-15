import P from 'prop-types';
import { useRef } from 'react';
function InputEmail({ id, type, setEmail }) {
  const focus = useRef();
  return (
    <input
      ref={focus}
      id={id}
      className="rounded-md px-2 py-3.5 border outline-none focus:ring-1 focus:ring-gray-400 border-gray-300 w-full"
      type={type}
      name={type}
      required
      title="Por favor, insira um endereço de email válido."
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
