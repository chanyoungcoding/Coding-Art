import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import './ReactSpringBottomSheet.css';
import 'react-spring-bottom-sheet/dist/style.css';
import styled from "styled-components";

const Test = styled.div`
  background-color: aliceblue;
  width: 30px;
  height: 30px;
`

const ReactSpringBottomSheet = () => {

  const [open, setOpen] = useState(false);

  const handleDismiss = () => {
    setOpen(false)
  }

  return ( 
    <div className="SheetContainer">
      <Test/>
      <button className="SheetButton" onClick={() => setOpen(!open)}>Open</button>
      <BottomSheet 
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [minHeight * 10, maxHeight * 0.5]}
        onDismiss={handleDismiss}
      >
        <div className="SheetBox">box</div>
        <div className="SheetBox">box</div>
        <div className="SheetBox">box</div>
        <div className="SheetBox">box</div>
      </BottomSheet>
    </div>
  );
}

export default ReactSpringBottomSheet;


/* 

open : BottomSheet 을 보일 수 있도록 활성화 또는 비활성화 합니다. ( 기본값은 false 입니다. )
snapPoints : BottomSheet 의 최소 높이 최대 높이를 설정합니다. 
onDismiss : BottomSheet 가 활성화 되면 BottomSheet 이외에 요소들을 클릭할 때 등록한 이벤트를 활성화 합니다.
blocking : 기본값은 true 로 되어있습니다. 이걸 false 로 설정을 하면 Bottom Sheet 외부로 탭 이동을 차단하여 배경밖으로 나가지 못하게 합니다.

*/