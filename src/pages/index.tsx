import styled from '@emotion/styled';
import Button from '@components/base/Button';
import { getColor } from '@utils/themeUtils';

const Home = () => (
  <Container>
    <Button onClick={() => null}>hello</Button>
  </Container>
);

const Container = styled.div`
  background-color: ${getColor('aquaMarine')};
`;

export default Home;
