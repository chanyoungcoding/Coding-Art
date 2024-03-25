import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Common = () => {
  return (
    <>
    <CommonBox>
      <Link to={'/A'}>A</Link>
      <Link to={'/B'}>B</Link>
      <Link to={'/C'}>C</Link>
    </CommonBox>
    <Outlet/>
    </>
  )
}

const CommonBox = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  a {
    margin: 10px 0px;
    padding: 20px 30px;
    font-size: 1.5rem;
    background-color: rgba( 0, 0, 0, 0.6);
    text-decoration: none;
    color: white;
  }
  z-index: 10;
`

export default Common