import P from 'prop-types';
function PosterWriter({ data }) {
  return (
    <div className="my-auto">
      <img className="border border-slate-300 w-60 rounded-md mx-6" src={data.writerImg} />
    </div>
  );
}
PosterWriter.propTypes = {
  data: P.array,
};
export default PosterWriter;
