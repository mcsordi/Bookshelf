import { Link } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';
import { useState } from 'react';
import { BiLoader } from 'react-icons/bi';
import { TbError404 } from 'react-icons/tb';
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

const optionsMessages = (res) => {
  switch (res) {
    case undefined: {
      return;
    }
    case '': {
      return;
    }
    case `Busca não possui resultados`: {
      return <li className="absolute bottom-48 text-green-700 font-semibold">Novo usuário criado</li>;
    }
    default: {
      return <li className="absolute bottom-48 text-red-600  font-semibold">Email já existente</li>;
    }
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
    <section className="bg-slate-50 flex h-screen w-full items-center justify-center">
      <div className=" flex flex-col p-5 items-center gap-8 justify-center">
        <Logo />
        <Form
          loading={load}
          handleSubmit={handleSubmit}
          setEmail={(e) => setEmail(e)}
          setPass={(e) => setPass(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Cadastrar`}
        >
          <div className="text-end">
            <Link to={'/'}>Login</Link>
          </div>
          {optionsMessages(res)}
        </Form>
        {load && <BiLoader className="animate-spin text-3xl bottom-56 absolute mx-auto text-center" />}
        {error && <TbError404 className="text-3xl bottom-56 absolute mx-auto text-center" />}
      </div>
      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster2"></div>
    </section>
  );
}

export default Cadaster;
