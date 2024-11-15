import P from 'prop-types';

function Title({ title }) {
  return <h1 className="text-center font-mulish text-xl font-medium">{title}</h1>;
}
Title.propTypes = {
  title: P.string,
};
export default Title;
