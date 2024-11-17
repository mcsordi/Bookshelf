import Logo from '../../components/general/Logo';
import MainContainer from '../../components/loginCadaster/MainContainer';
import LoginPoster from '../../components/loginCadaster/LoginPoster';
import { useContext, useRef } from 'react';
import ForgotNumber from '../../components/forgetPassword/ForgotNumber';
import Button from '../../components/user/Button';
import { emailAdress } from '../../context/emailContext';

function Forgot() {
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  // const [opt, setOpt] = useState([0, 0, 0, 0]);
  const { adress } = useContext(emailAdress);

  return (
    <MainContainer>
      <div className="w-64 sm:w-96 md:min-w-96 gap-10 mx-5 pt-6 flex flex-col items-center justify-center">
        <Logo whereTo={'/'} />
        <div className="flex gap-3 font-mulish flex-col text-center">
          <h2 className="text-xl font-semibold">Verificação de Email</h2>
          <p className="text-gray-500">Enviamos o codigo para o email {adress}</p>
        </div>

        <div className="flex gap-5">
          <ForgotNumber refs={inp1} target={inp2} />
          <ForgotNumber refs={inp2} target={inp3} />
          <ForgotNumber refs={inp3} target={inp4} />
          <ForgotNumber refs={inp4} target={null} />
        </div>

        <Button textBtn={`Validar`} />
        <div className="flex flex-row">
          <span>
            Não recebi o código, <span className="font-bold">enviar</span>
          </span>
        </div>
      </div>

      <LoginPoster poster={`bg-poster`} />
    </MainContainer>
  );
}
export default Forgot;
