import { useContext, useState } from 'react';
import Logo from '../../components/general/Logo';
import LoginPoster from '../../components/loginCadaster/LoginPoster';
import MainContainer from '../../components/loginCadaster/MainContainer';
import Button from '../../components/user/Button';
import InputPassword from '../../components/user/InputPassword';
import Label from '../../components/user/Label/Label';
import { emailAdress } from '../../context/emailContext';

const updatePass = async (email, pass) => {
  const res = await fetch(`${process.env.REACT_APP_USERS}/${email}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({ password: pass }),
  });
  return res.json();
};

function ResetPass() {
  const [password, setPassWord] = useState();
  const [confirmPassword, setConfirmPassWord] = useState();
  const [message, setMessage] = useState();
  const { adress } = useContext(emailAdress);
  const [style, setStyle] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      return (
        updatePass(adress, confirmPassword),
        setMessage(`Sua senha foi atualizada`),
        setStyle(`text-green-700 font-medium`)
      );
    }
    return setMessage(`Senhas não coincidem`), setStyle(`text-red-600 font-medium`);
  };
  return (
    <MainContainer>
      <div className="w-64 sm:min-w-96 flex gap-5 m-5 flex-col">
        <div className="flex mx-auto">
          <Logo whereTo={'/'} />
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Label textLabel={`Senha`} htmlFor="pass" />
          <InputPassword setPass={(e) => setPassWord(e)} id={`pass`} />
          <Label textLabel={`Confirme a senha`} htmlFor="confirmPass" />
          <InputPassword setPass={(e) => setConfirmPassWord(e)} id={`confirmPass`} />
          <Button textBtn={`Alterar Senha`} />
        </form>
        <li className={style}>{message}</li>
      </div>
      <LoginPoster poster={`bg-cadaster`} />
    </MainContainer>
  );
}
export default ResetPass;
