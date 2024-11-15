import { Link, Navigate } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';
import { useState } from 'react';
import { BiLoader } from 'react-icons/bi';

const getUsers = async (setLoading, setError) => {
  try {
    setLoading(true);
    const res = await fetch(process.env.REACT_APP_USERS);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

function Login() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [click, setClick] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState();

  if (localStorage.getItem('userEmail')?.length > 0) {
    return <Navigate to={`/home`} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClick(e);
    const data = await getUsers(setLoading, setError);
    if (data) {
      const existUser = await data.find((user) => user.password === pass && user.email === email);

      if (existUser) {
        localStorage.setItem('userEmail', email);
        setIsAuthenticated(true);
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to={'/home'} />;
  }
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
          loading={loading}
        >
          <div className="text-end">
            <Link className="text-gray-500 font-medium" to={'/cadaster'}>
              Cadastrar
            </Link>
          </div>
          {click && !loading && !error && (
            <li className="absolute bottom-48 text-red-600 font-semibold">Senha ou Email estão invalidos</li>
          )}
        </Form>
        {click && loading && <BiLoader className="absolute text-2xl animate-spin bottom-64 flex mx-auto" />}
        {error && (
          <div className=" bottom-40 text-red-600 font-semibold font-noto max-w-56">
            Ocorreu um erro inesperado, por favor recarregue a página
          </div>
        )}
      </div>
      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster"></div>
    </section>
  );
}
export default Login;
