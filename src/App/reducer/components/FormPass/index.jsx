import { useEffect, useState } from 'react';
import Button from '../../../components/user/Button';
import InputPassword from '../../../components/user/InputPassword';
import { BiLoader } from 'react-icons/bi';
const updatePass = async (pass, emailValue, setLoading, setError) => {
  const url = process.env.REACT_APP_USERS;
  try {
    setLoading(true);
    const res = await fetch(`${url}/${emailValue}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pass }),
    });
    return await res.json();
  } catch (error) {
    return setError(error);
  } finally {
    setLoading(false);
  }
};

function FormPass() {
  const emailValue = localStorage.getItem('userEmail');
  const [click, setClick] = useState(false);
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setClick(false);
        setPass('');
      }, 1500);
    };
  }, [click]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(e);
    updatePass(pass, emailValue, setLoading, setError);
  };

  return (
    <form className="flex flex-col gap-2 mt-3" onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        className="rounded-md px-2 py-3.5 border outline-none
        focus:ring-1 focus:ring-gray-400 border-gray-300 w-full"
        disabled
        value={emailValue}
      />
      <label htmlFor="pass">Senha</label>
      <InputPassword value={pass} setPass={(e) => setPass(e)} id={`pass`} />
      <Button loading={loading} textBtn={`Alterar`} />
      <div className="mt-2 flex mx-auto">
        {loading && !error && <BiLoader className="text-2xl animate-spin" />}
        {click && !loading && !error && (
          <div className={`text-green-600 mt-5 border-b-2 py-0 font-medium`}>Sua senha foi modificada</div>
        )}
        {error && (
          <div className={`text-red-600 mt-5 border-b-2 py-0 font-medium`}>Não foi possivel modificar sua senha</div>
        )}
      </div>
    </form>
  );
}
export default FormPass;
