import P from 'prop-types';
function InfoText({ data }) {
  return (
    <div className="max-w-96 md:w-96 flex">
      <div>
        <h2 className="text-center text-2xl py-2.5">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
InfoText.propTypes = {
  data: P.shape({
    title: P.string,
    description: P.string,
  }),
};
export default InfoText;
