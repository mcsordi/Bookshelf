import { Outlet } from 'react-router-dom';
import Container from '../../components/Container';
import Header from '../../components/Header';

function MirrorPage() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
export default MirrorPage;
