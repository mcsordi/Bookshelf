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
        >
          <div className="text-start">
            <GoingTo onClick={() => ''} text={`Logar`} destiny={`/`} />
          </div>
          {!load && optionsMessages(res)}
        </Form>
        {load && <BiLoader className="absolute text-2xl animate-spin bottom-48 flex mx-auto" />}
        {error && <LogError />}
      </FormContainer>
      <LoginPoster poster="bg-cadaster" />
    </MainContainer>
  );
}

export default Cadaster;
