import { Outlet } from 'react-router-dom';
import Container from '../../components/general/Container';
import Header from '../../components/general/Header';

function MirrorPage() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
export default MirrorPage;
