import { Link } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';
import { useState } from 'react';

function Login() {
  const [click, setClick] = useState();
  // const [email, setEmail] = useState();
  // const [pass, setPass] = useState();

  return (
    <section className="bg-slate-50 flex h-screen items-center justify-center">
      <div className="flex flex-col p-5 items-center gap-8 justify-center">
        <Logo />
        <Form
          setPass={(e) => setPass(e)}
          setEmail={(e) => setEmail(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Logar`}
          onClick={(e) => setClick(e)}
        >
          <div className="text-end">
            <Link to={`/cadaster`}>Cadastre-se</Link>
          </div>
        </Form>
        {click && handleEmail()}
      </div>

      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster"></div>
    </section>
  );
}
export default Login;
