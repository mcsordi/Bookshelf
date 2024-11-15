import P from 'prop-types';
import Container from '../Container';
import Title from '../Title';

function Pattern({ title, children }) {
  return (
    <Container>
      <Title title={title} />
      {children}
    </Container>
  );
}
Pattern.propTypes = {
  title: P.string,
  children: P.node,
};
export default Pattern;
