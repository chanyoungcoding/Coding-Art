import styled from 'styled-components'

const ABox = () => {
  return (
    <BoxContainer className='page'>ABox</BoxContainer>
  )
}

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: red;
`

export default ABox