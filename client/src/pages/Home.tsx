import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 10px;
    padding: 15px 25px;
    background-color: rgb(111, 103, 255);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    text-decoration: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`

const Home = () => {
  
  return ( 
    <HomeContainer>
      <Link to={'/Swiper'}>Swiper</Link>
      <Link to={'/bottomSheet'}>Sheet</Link>
      <Link to={'/infinityScroll'}>InfinityScroll</Link>
      <Link to={'/pagination'}>Pagination</Link>
      <Link to={'/sweetalert'}>Sweetalert</Link>
      <Link to={'/reactCookie'}>Cookie communication</Link>
      <Link to={'/reactJwt'}>Jwt communication</Link>
      <Link to={'/socket'}>Socket</Link>
    </HomeContainer>
  );
}

export default Home;