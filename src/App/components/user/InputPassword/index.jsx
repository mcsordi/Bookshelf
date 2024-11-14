import P from 'prop-types';
import { useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';

function InputPassword({ id, setPass }) {
  const focus = useRef();
  const [sight, setSight] = useState('text');
  return (
    <div className="relative ">
      <FaEye
        className={`${sight == 'password' && `text-slate-500`} absolute mx-auto my-auto right-0 text-xl mt-4 mr-4`}
        onClick={() => {
          return sight == 'text' ? setSight('password') : setSight('text'), focus.current.focus();
        }}
      />
      <input
        id={id}
        ref={focus}
        className="rounded-md pl-2 pr-11 py-3.5 outline-none focus:ring-1 focus:ring-gray-400 border border-gray-300 sm:w-96 "
        type={sight}
        required
        minLength={6}
        onChange={(evt) => setPass(evt.target.value)}
      />
    </div>
  );
}
InputPassword.propTypes = {
  id: P.string,
  setPass: P.func,
};
export default InputPassword;
