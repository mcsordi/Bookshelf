import { Link } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';
import { useState } from 'react';

function Cadaster() {
  const [click, setClick] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();

  const handleEmail = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(email);
    const responseTest = click && isValid;
    if (!responseTest) {
      return <li className="absolute bottom-40 text-red-600 font-medium">email inválido</li>;
    }
  };
  const handlePass = () => {
    const length = pass?.length;
    const isValid = click && length > 5;
    if (!isValid) {
      return <li className="absolute bottom-48 text-red-600 font-medium">A senha precisa ter 6 caracteres</li>;
    }
  };
  return (
    <section className="bg-slate-50 flex h-screen w-full items-center justify-center">
      <div className=" flex flex-col p-5 items-center gap-8 justify-center">
        <Logo />
        <Form
          onClick={(e) => setClick(e)}
          setEmail={(e) => setEmail(e)}
          setPass={(e) => setPass(e)}
          idMail={'email'}
          idPass={`password`}
          textBtn={`Cadastrar`}
        >
          <div className="text-end">
            <Link to={'/'}>Login</Link>
          </div>
        </Form>
        <div className="flex w-full  justify-start">
          {click && handleEmail()}
          {click && handlePass()}
        </div>
      </div>
      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster2"></div>
    </section>
  );
}
export default Cadaster;
