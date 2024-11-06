import P from 'prop-types';
import RenderBooks from '../RenderBooks';

function InformativeImage({ children, data, image }) {
  return (
    <div className="my-auto gap-2 flex flex-col">
      <RenderBooks image={image} size={`w-60`} display={`hidden`} data={data} />
      {children}
    </div>
  );
}
InformativeImage.propTypes = {
  children: P.node,
  data: P.array,
  image: P.string,
};
export default InformativeImage;
