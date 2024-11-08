import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import SpreadFetch from '../../components/general/SpreadFetch';
import SectionWriter from '../../components/writer/SectionWriter';
import InfoWriter from '../../components/writer/InfoWriter';
import PosterWriter from '../../components/writer/PosterWriter';
import Loading from '../Loading';
import Error from '../../components/general/Error';

function Writer() {
  const writer = useParams().writerId;
  const url = process.env.REACT_APP_WRITER;
  const { data, loading, error } = useFetch([`${url}/${writer}`]);
  const infoWriter = data[0];
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <section className="mx-auto">
      <SpreadFetch data={infoWriter}>
        {(data, id) => (
          <SectionWriter key={id}>
            <PosterWriter data={data} />
            <InfoWriter data={data} />
          </SectionWriter>
        )}
      </SpreadFetch>
    </section>
  );
}
export default Writer;
