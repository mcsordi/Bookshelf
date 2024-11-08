import P from 'prop-types';
function InfoWriter({ data }) {
  return (
    <div className="flex flex-col  font-mulish  max-w-96 md:w-96">
      <div className="">
        <h2 className="text-center text-2xl mb-2 font-medium">{data.writer}</h2>
        <span>{data.writerDsc}</span>
      </div>
    </div>
  );
}
InfoWriter.propTypes = {
  data: P.shape({
    writer: P.string,
    writerDsc: P.string,
  }),
};
export default InfoWriter;
