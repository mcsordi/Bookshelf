import P from 'prop-types';
import Header from '../../components/general/Header';
function Error({ text }) {
  return (
    <section className="bg-slate-300 flex flex-col items-center  w-full min-h-screen">
      <Header />
      <div className="flex flex-col h-full justify-center items-center ">
        <div className="w-[550px] h-[353px] bg-error"></div>
        <h2 className="max-w-72 mx-auto text-2xl font-medium">{text}</h2>
      </div>
    </section>
  );
}
Error.propTypes = {
  text: P.string,
};
export default Error;
