import P from 'prop-types';
import Button from '../Button';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';
import Label from '../Label/Label';

function Form({ textBtn, children, idMail, idPass, setEmail, setPass, handleSubmit, loading }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Label htmlFor="email" textLabel={`Email`} />
      <InputEmail setEmail={setEmail} type={`email`} id={idMail} />
      <Label htmlFor="password" textLabel={`Senha`} />
      <InputPassword setPass={setPass} id={idPass} />
      <Button loading={loading} textBtn={textBtn} />
      {children}
    </form>
  );
}
Form.propTypes = {
  textBtn: P.string,
  children: P.node,
  idMail: P.string,
  idPass: P.string,
  setEmail: P.func,
  setPass: P.func,
  handleSubmit: P.func,
  loading: P.bool,
};
export default Form;
