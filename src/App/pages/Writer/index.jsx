import { useParams } from 'react-router-dom';
import { useFetch } from '../../../utils/useFetch';
import SpreadFetch from '../../components/SpreadFetch';
import SectionWriter from '../../components/writer/SectionWriter';
import InfoWriter from '../../components/writer/InfoWriter';
import PosterWriter from '../../components/writer/PosterWriter';

function Writer() {
  const writer = useParams().writerId;
  const url = process.env.REACT_APP_WRITER;
  const { data, loading, error } = useFetch([`${url}/${writer}`]);
  const infoWriter = data[0];
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error...</div>;
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
