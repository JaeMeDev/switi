import styled from '@emotion/styled';
import Button from 'src/components/base/Button/Button';
import { getColor } from '../utils/themeUtils';

const Home = () => (
  <Container>
    <Button onClick={() => null}>hello</Button>
  </Container>
);

const Container = styled.div`
  background-color: ${getColor('aquaMarine')};
`;

export default Home;
