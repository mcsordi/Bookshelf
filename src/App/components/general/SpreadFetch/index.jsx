import P from 'prop-types';
import React from 'react';
function SpreadFetch({ data, children }) {
  return (
    <>
      {data?.map((element, id) => {
        return children(element, id);
      })}
    </>
  );
}
SpreadFetch.propTypes = {
  children: P.func,
  data: P.array,
};
export default SpreadFetch;
