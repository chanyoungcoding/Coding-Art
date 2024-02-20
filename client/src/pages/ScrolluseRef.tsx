import { useRef } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  background: white;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0 3px 13px 1px #888889;
`

const Pdiv = styled.div`
  display: block;
  height: 100vh;
`

const ScrolluseRef = () => {

  const divOne = useRef<HTMLInputElement | null>(null);
  const divFive = useRef<HTMLInputElement | null>(null);

  const scrolLWithUseRef = () => {
    divOne.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  const scrollFun = (id: string) => {
    document
      .querySelector(`#id${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });

  };

  return (
    <div className="App">
      <NavbarContainer>
        {["1", "2", "3", "4", "5"].map((id) => (
          <button key={id} onClick={() => scrollFun(id)}>
            Scroll to {id}
          </button>
        ))}
        <button
          onClick={scrolLWithUseRef}
        >
          최상단으로 가기
        </button>
      </NavbarContainer>

      <Pdiv id="id1" style={{backgroundColor: '#7382FF', height: '100vh'}} ref={divOne}></Pdiv>
      <Pdiv id="id2" style={{backgroundColor: '#469A77', height: '100vh'}}></Pdiv>
      <Pdiv id="id3" style={{backgroundColor: '#BBBBBB', height: '100vh'}}></Pdiv>
      <Pdiv id="id4" style={{backgroundColor: '#73341D', height: '100vh'}}></Pdiv>
      <Pdiv id="id5" style={{backgroundColor: '#C2C028', height: '100vh'}} ref={divFive}></Pdiv>
    </div>
  );
}
export default ScrolluseRef