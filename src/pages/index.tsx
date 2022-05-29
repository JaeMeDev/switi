import styled from '@emotion/styled';
import { getColor } from 'src/utils/themeUtils';

const Home = () => (
  <Container>
    <div>hello</div>
  </Container>
);

const Container = styled.div`
  background-color: ${getColor('aquaMarine')};
`;

export default Home;
