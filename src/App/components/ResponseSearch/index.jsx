import P from 'prop-types';
import SpreadFetch from '../SpreadFetch';
import ItemSearch from '../ItemSearch';

function ResponseSearch({ data, text }) {
  return (
    <SpreadFetch data={data}>
      {(item, id) => item.title?.toLowerCase().includes(text) && <ItemSearch key={id} item={item} id={id} />}
    </SpreadFetch>
  );
}
ResponseSearch.propTypes = {
  data: P.array,
  text: P.string,
};
export default ResponseSearch;
