import styled from 'styled-components'

const CBox = () => {
  return (
    <BoxContainer className='page'>CBox</BoxContainer>
  )
}

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: blue;
`

export default CBox