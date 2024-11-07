import P from 'prop-types';
import InformativeImage from '../InformativeImage';
import SpreadFetch from '../../SpreadFetch';
import InfoText from '../InfoText';
function InfoBook({ data, children, image }) {
  return (
    <section className="mx-2 450:mx-8 md:mx-auto flex my-6 p-6 rounded-md bg-white items-center justify-center">
      <div className="flex flex-col mx-auto md:flex-row gap-3">
        <InformativeImage image={image} data={data}>
          {children}
        </InformativeImage>
        <SpreadFetch data={data}>{(data, id) => <InfoText key={id} data={data} />}</SpreadFetch>
      </div>
    </section>
  );
}

InfoBook.propTypes = {
  children: P.node,
  data: P.array,
  image: P.string,
};
export default InfoBook;
