import { Link, Navigate } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/general/Logo';
import { useContext, useState } from 'react';
import { BiLoader } from 'react-icons/bi';
import GoingTo from '../../components/loginCadaster/GoingTo';
import LogError from '../../components/loginCadaster/LogError ';
import LoginPoster from '../../components/loginCadaster/LoginPoster';
import FormContainer from '../../components/loginCadaster/FormContainer';
import MainContainer from '../../components/loginCadaster/MainContainer';
import { emailAdress } from '../../../App/context/emailContext';

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
  const [validEmail, setValidEmail] = useState('');
  const [forgotError, setForgotError] = useState();
  const [invalidError, setInvalidError] = useState();
  const { setAdress } = useContext(emailAdress);

  const emailValidate = async () => {
    const data = await getUsers(setLoading, setError);
    const exist = await data.find((adress) => adress.email == email);
    if (exist) {
      return setValidEmail(exist), setAdress(exist.email);
    } else {
      return setForgotError(`Insira um endereço de email valido`);
    }
  };
  if (validEmail) {
    return <Navigate to={`/forgot`} />;
  }

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
    if (!loading && !error) {
      return setInvalidError(`Senha ou Email estão invalidos`);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={'/home'} />;
  }
  return (
    <MainContainer>
      <FormContainer>
        <Logo whereTo={'/'} />
        <Form
          handleSubmit={handleSubmit}
          setPass={(e) => setPass(e)}
          setEmail={(e) => setEmail(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Logar`}
          loading={loading}
          forget={
            <Link
              className={`hover:text-blue-700 text-gray-500 font-medium`}
              to={`#`}
              onClick={() => {
                return emailValidate();
              }}
            >
              Esqueci a senha
            </Link>
          }
        >
          <div className="flex justify-between text-start ">
            <GoingTo onClick={() => ''} text={`Cadastrar`} destiny={`/cadaster`} />
          </div>
          {click && !loading && !error && (
            <li className="absolute bottom-40 text-red-600 font-semibold">{invalidError}</li>
          )}
          {error && <LogError />}
        </Form>
        {loading && <BiLoader className="flex absolute text-2xl animate-spin bottom-48  mx-auto" />}
        {!validEmail && !invalidError && (
          <div className="absolute bottom-40 text-red-600 font-semibold">{forgotError}</div>
        )}
      </FormContainer>
      <LoginPoster poster="bg-poster" />
    </MainContainer>
  );
}
export default Login;
