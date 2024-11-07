import P from 'prop-types';
import RenderBooks from '../RenderBooks';

function InformativeImage({ children, data, image }) {
  return (
    <div className="flex flex-col my-auto mx-auto md:mx-0 gap-2">
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
