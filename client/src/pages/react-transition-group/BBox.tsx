import styled from 'styled-components'

const BBox = () => {
  return (
    <BoxContainer className='page'>BBox</BoxContainer>
  )
}

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: yellow;
`

export default BBox