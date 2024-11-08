import P from 'prop-types';
import SpreadFetch from '../../general/SpreadFetch';
import Category from '../Category';

function RenderCategories({ target, setTarget, data }) {
  return (
    <div className="px-6 py-2 gap-2.5 flex flex-col 450:flex-row 450:flex-wrap">
      <SpreadFetch data={data}>
        {(element, id) => <Category key={id} setTarget={setTarget} target={target} element={element} />}
      </SpreadFetch>
    </div>
  );
}
RenderCategories.propTypes = {
  target: P.string,
  setTarget: P.func,
  data: P.array,
};
export default RenderCategories;
