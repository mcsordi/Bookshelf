import P from 'prop-types';
function LoginPoster({ poster }) {
  return (
    <div className={`hidden md:flex w-full h-full mx-auto border bg-cover bg-center bg-no-repeat ${poster}`}></div>
  );
}
LoginPoster.propTypes = {
  poster: P.string,
};
export default LoginPoster;
