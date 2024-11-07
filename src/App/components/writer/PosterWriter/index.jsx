import P from 'prop-types';
function PosterWriter({ data }) {
  return (
    <div className="my-auto">
      <img className="mx-auto md:mx-6 border border-slate-300 w-60 rounded-md " src={data.writerImg} />
    </div>
  );
}
PosterWriter.propTypes = {
  data: P.shape({
    writerImg: P.string,
  }),
};
export default PosterWriter;
