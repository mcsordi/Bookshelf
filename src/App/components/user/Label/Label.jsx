import P from 'prop-types';
function Label({ textLabel, htmlFor }) {
  return (
    <label className="font-mulish text-lg" htmlFor={htmlFor}>
      {textLabel}
    </label>
  );
}
Label.propTypes = {
  textLabel: P.string,
  htmlFor: P.string,
};
export default Label;
