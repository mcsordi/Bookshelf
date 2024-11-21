import Logo from '../../components/general/Logo';
import MainContainer from '../../components/loginCadaster/MainContainer';
import LoginPoster from '../../components/loginCadaster/LoginPoster';
import { useContext, useEffect, useRef, useState } from 'react';
import ForgotNumber from '../../components/forgetPassword/ForgotNumber';
import { emailAdress } from '../../context/emailContext';
import Button from '../../components/user/Button';
import { Navigate } from 'react-router-dom';
import { BiLoader } from 'react-icons/bi';

const updateOtp = async (code, email) => {
  const res = await fetch(`${process.env.REACT_APP_USERS}/${email}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ recovery: code }),
  });
  return await res.json();
};

const verifyOpt = async (email, setLoad) => {
  try {
    setLoad(true);
    const res = await fetch(`${process.env.REACT_APP_USER}/${email}`);
    const resJson = await res.json();
    return resJson;
  } catch (error) {
    console.log(error);
  } finally {
    setLoad(false);
  }
};
const sendEmail = async (opt, email) => {
  const res = await fetch(process.env.REACT_APP_EMAIL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ opt: opt, email: email }),
  });
  return res;
};

function Forgot() {
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  const [click, setClick] = useState();
  const [clicks, setClicks] = useState();
  const [inpuOpt, setInpuOpt] = useState();
  const [opt, setOpt] = useState();
  const [load, setLoad] = useState();
  const { adress } = useContext(emailAdress);
  const validCode = opt?.find(({ recovery }) => recovery == inpuOpt);
  const randomNumber = Math.floor(Math.random() * 9000 + 1000);
  let count = 0;

  const handleOpt = async () => {
    const response = await verifyOpt(adress, setLoad);
    return setOpt(response);
  };

  const handleNum = () => {
    return randomNumber;
  };

  useEffect(() => {
    sendEmail(randomNumber, adress);
  }, []);

  useEffect(() => {
    const plus = count++;
    if (plus == 1) {
      sendEmail(randomNumber, adress);
    }
    if (click) {
      sendEmail(randomNumber, adress);
    }
    handleNum(), updateOtp(randomNumber, adress);
  }, [click]);

  useEffect(() => {
    handleOpt();
  }, [clicks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return setInpuOpt(arr.join().replace(/,/g, '')), cleanInputs(), setClicks(e);
  };
  if (!adress) {
    return <Navigate to={`/`} />;
  }

  if (validCode) {
    return <Navigate to={`/reset`} />;
  }

  const cleanInputs = () => {
    inp1.current.value = '';
    inp2.current.value = '';
    inp3.current.value = '';
    inp4.current.value = '';
  };
  const arr = [0, 0, 0, 0];

  return (
    <MainContainer>
      <div className="w-64 sm:w-96 md:min-w-96 gap-10 mx-5 pt-6 flex flex-col items-center justify-center">
        <Logo whereTo={'/'} />

        <div className="flex gap-3 font-mulish flex-col text-center">
          <h2 className="text-xl font-semibold">Verificação de Email</h2>
          <p className="text-gray-500">Enviamos o codigo para o email {adress}</p>
        </div>
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-5 w-full">
            <ForgotNumber refs={inp1} target={inp2} onChange={(e) => (arr[0] = e)} />
            <ForgotNumber refs={inp2} target={inp3} onChange={(e) => (arr[1] = e)} />
            <ForgotNumber refs={inp3} target={inp4} onChange={(e) => (arr[2] = e)} />
            <ForgotNumber refs={inp4} target={null} onChange={(e) => (arr[3] = e)} />
          </div>
          {clicks && !validCode && !load && (
            <div className="flex mx-auto text-red-600 font-medium">codigo não correspondente</div>
          )}
          {load && (
            <div className="flex mx-auto text-2xl animate-spin">
              <BiLoader />
            </div>
          )}
          <Button textBtn={`Validar`} />
        </form>

        <div className="flex flex-row ">
          <span>
            Não recebi o código,
            <span
              className="ml-1 hover:text-blue-700 cursor-pointer font-bold"
              onClick={(e) => {
                return setClick(e);
              }}
            >
              enviar
            </span>
          </span>
        </div>
      </div>

      <LoginPoster poster={`bg-poster`} />
    </MainContainer>
  );
}
export default Forgot;
