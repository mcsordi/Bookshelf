import { Link, Navigate } from 'react-router-dom';
import Form from '../../components/user/Form';
import Logo from '../../components/user/Logo';

function Login() {
  if (localStorage.getItem('userEmail')?.length > 0) {
    return <Navigate to={`/home`} />;
  }
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
        >
          <div className="text-end">
            <Link to={'/cadaster'}>Cadastrar</Link>
          </div>
        </Form>
      </div>
      <div className="hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat bg-poster"></div>
    </section>
  );
}
export default Login;
