import P from 'prop-types';
import Button from '../Button';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';
import Label from '../Label/Label';

function Form({ textBtn, children, idMail, idPass, setEmail, setPass, handleSubmit, loading, forget = '', value }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:w-96 flex-col gap-2">
        <Label htmlFor="email" textLabel={`Email`} />
        <InputEmail setEmail={setEmail} type={`email`} id={idMail} />
        <Label htmlFor="password" textLabel={`Senha`} />
        <InputPassword value={value} setPass={setPass} id={idPass} />
        <div className="flex items-end justify-end">{forget}</div>
        <Button loading={loading} textBtn={textBtn} />
        {children}
      </div>
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
  forget: P.node,
  value: P.string,
};
export default Form;
