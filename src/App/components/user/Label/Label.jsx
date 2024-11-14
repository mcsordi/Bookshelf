import P from 'prop-types';
function Label({ textLabel, htmlFor }) {
  return <label htmlFor={htmlFor}>{textLabel}</label>;
}
Label.propTypes = {
  textLabel: P.string,
  htmlFor: P.string,
};
export default Label;
