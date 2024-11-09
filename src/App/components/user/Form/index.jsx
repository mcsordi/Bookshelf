import P from 'prop-types';
import Button from '../Button';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';
import Label from '../Label/Label';

function Form({ textBtn, children, idMail, idPass, onClick, setEmail, setPass }) {
  return (
    <form className="flex flex-col gap-2">
      <Label htmlFor="email" textLabel={`Email`} />
      <InputEmail setEmail={setEmail} id={idMail} />
      <Label htmlFor="password" textLabel={`Senha`} />
      <InputPassword setPass={setPass} id={idPass} />
      <Button onClick={onClick} textBtn={textBtn} />
      {children}
    </form>
  );
}
Form.propTypes = {
  textBtn: P.string,
  children: P.node,
  idMail: P.string,
  idPass: P.string,
  onClick: P.func,
  setEmail: P.func,
  setPass: P.func,
};
export default Form;
