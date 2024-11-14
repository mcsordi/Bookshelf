import { Link, Navigate } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';
import { useEffect, useState } from 'react';
import { BiLoader } from 'react-icons/bi';
import { TbError404 } from 'react-icons/tb';

const getUsers = async (setLoading, setError, setData) => {
  try {
    setLoading(true);
    const res = await fetch(process.env.REACT_APP_USERS);
    const resJson = await res.json();
    setData(resJson);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

function Login() {
  const [data, setData] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [click, setClick] = useState();
  // const existEmail = data?.filter((user) => user.email == email && user);
  const existUser = data?.filter((user) => user.password == pass && user.email == email && user);

  useEffect(() => {
    getUsers(setLoading, setError, setData);
  }, [click]);

  if (localStorage.getItem('userEmail')?.length > 0) {
    return <Navigate to={`/home`} />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(e);
    if (existUser?.length > 0) {
      localStorage.setItem('userEmail', email);
      return <Navigate to={'/home'} />;
    }
  };

  return (
    <section className="bg-slate-50 flex h-screen items-center justify-center">
      <div className="flex flex-col p-5 items-center gap-8 justify-center">
        <Logo />
        <Form
          handleSubmit={handleSubmit}
          setPass={(e) => setPass(e)}
          setEmail={(e) => setEmail(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Logar`}
        >
          <div className="text-end">
            <Link to={'/cadaster'}>Cadastrar</Link>
          </div>
          {click && existUser?.length < 1 && (
            <li className="absolute bottom-48 text-red-600  font-semibold">Senha ou Email estão invalidos</li>
          )}
        </Form>
        {click && loading && <BiLoader className="absolute text-2xl animate-spin bottom-56 flex mx-auto" />}
        {error && <TbError404 className="absolute text-2xl bottom-56 flex mx-auto" />}
      </div>
      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster"></div>
    </section>
  );
}
export default Login;
