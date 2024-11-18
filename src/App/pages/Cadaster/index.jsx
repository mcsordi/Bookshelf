import Form from '../../components/user/Form';
import Logo from '../../components/general/Logo';
import { useState } from 'react';
import { BiLoader } from 'react-icons/bi';
import GoingTo from '../../components/loginCadaster/GoingTo';
import LogError from '../../components/loginCadaster/LogError ';
import LoginPoster from '../../components/loginCadaster/LoginPoster';
import { optionsMessages } from '../../components/loginCadaster/optionsCadaster';
import FormContainer from '../../components/loginCadaster/FormContainer';
import MainContainer from '../../components/loginCadaster/MainContainer';

const fetchPostUser = async (email, pass, setLoad, setRes, setError) => {
  try {
    setLoad(true);
    const res = await fetch(process.env.REACT_APP_USERS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: pass }),
    });
    return setRes(await res.json());
  } catch (error) {
    return setError(error);
  } finally {
    setLoad(false);
  }
};

function Cadaster() {
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const [res, setRes] = useState('');
  const [load, setLoad] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    return fetchPostUser(email, pass, setLoad, setRes, setError);
  };

  return (
    <MainContainer>
      <FormContainer>
        <Logo whereTo={`/`} />
        <Form
          loading={load}
          handleSubmit={handleSubmit}
          setEmail={(e) => setEmail(e)}
          setPass={(e) => setPass(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Cadastrar`}
          value={pass}
        >
          <div className="text-start">
            <GoingTo onClick={() => ''} text={`Entrar`} destiny={`/`} />
          </div>
        </Form>
        <div>
          {!load && optionsMessages(res)}
          {load && <BiLoader className="animate-spin text-2xl flex mx-auto" />}
          {error && <LogError />}
        </div>
      </FormContainer>
      <LoginPoster poster="bg-cadaster" />
    </MainContainer>
  );
}

export default Cadaster;
