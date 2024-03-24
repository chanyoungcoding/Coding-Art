import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import AnimatePresenceBox from "./AnimatePresenceBox";

const variants = {
  open: { opacity: 1, translateX: 100 },
  closed: { opacity: 0, translateX: 0 },
}

const container = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3, // 0.3 초 뒤에 실행
      staggerChildren: 0.2  // 0.2 초 마다 자식 컴포넌트 등장
    }
  }
}

const item = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0
  }
}

const tabs = [
  {id: "1", label: "apple"},
  {id: "2", label: "banana"},
  {id: "3", label: "orange"},
  {id: "4", label: "tomato"},
]

const Motion = () => {
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })


  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <MotionContainer>
      <MotionBox 
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{duration: 3, repeat: Infinity }}
        drag
      />

      <MotionBox2
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <button onClick={() => setIsOpen(isOpen => !isOpen)}>적용하기</button>

      <MotionScrollBox
        style={{ scaleX }}
      />

      {/* 자식 컴포넌트랑 같이 애니메이션 적용 */}
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {[1,2,3,4].map(index => (
          <motion.li className="item" key={index} variants={item} />
        ))}
      </motion.ul>

      <MotionLayoutIdBox>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
              {activeTab === tab.id && (
                <motion.div className="layoutid-background" layoutId="active-pill"/>
              )}
              <span>{tab.label}</span>
            </button>
          ))}
      </MotionLayoutIdBox>

      <AnimatePresenceBox/>

    </MotionContainer>
  )
}

const MotionContainer = styled.div`
  height: 3000px;
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    height: 320px;
    border-radius: 15px;
    background-color: rgba(255,255,255,0.2);
    .item {
      width: 125px;
      height: 125px;
      margin: 15px;
      border-radius: 100%;
      background-color: white;
    }
  }
`

const MotionBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
`

const MotionBox2 = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #6e4d8f;
`

const MotionScrollBox = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  background-color: #a0a0a0;
  transform-origin: center left;
`

const MotionLayoutIdBox = styled(motion.div)`
  button {
    position: relative;
    background-color: white;
    margin: 10px ;
    outline: none;
    border: none;
  }
  .layoutid-background {
    position: absolute;
    top: 32px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: #1d64ff;
  }
  span {
    font-size: 1.5rem;
  }
`

export default Motion

/*
  😃설치😃
  npm i framer-motion

  😃사용 방법😃
  <motion.div animate={{scale: 1}}/>

  😃props😃
  
  대부분 props = { { } } 형식으로 넣습니다.

  🐣 initial 
  이 속성은 컴포넌트의 초기 상태를 설정하는 데 사용됩니다. 

  🐣 animate 
  이 속성은 컴포넌트가 애니메이션을 거칠 때 적용되는 상태를 지정합니다.
  값을 배열로 설정하면 Motion이 차례로 이러한 각 값을 통해 애니메이션을 적용합니다.
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}

  🐣 variants
  useState 와 같이 쓰이며 인자로 객체 형태의 스타일을 받습니다.
  객체 형태의 스타일 -> const variants = { open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: "-100%" } }
  useState 의 값에 따라 animate 의 인자값을 정해주고 해당 인자값을 variants 의 키 값과 대조해서 적용해 줍니다.

  <MotionBox2
    animate={isOpen ? "open" : "closed"}
    variants={variants}
  />

  🐣 transition
  애니메이션의 시작과 끝을 부드럽게 만들거나 지연 시간을 설정하는 등의 기능을 수행할 수 있습니다. 
  지속 시간(duration), 지연 시간(delay), 전환 함수(easing function) 등

  🐣 repeat
  애니메이션을 몇번 반복할지 정해줍니다. 숫자가 일반적으로 들어가며 Infinity 를 적용하면 무한하게 애니메이션이 작동합니다.

  🐣 whileHover, whileTap, whileDrag, whileFocus
  마우스 올렸을 때, 마우스 눌렀을 때, 드래그 할 때, 포커스(input) 할 때

  🐣 drag, dragConstraints
  요소를 마우스로 이동시킬 수 있게 만들고 dragConstraints 는 이동시킬 수 있는 범위를 지정해 줍니다.
  drag, dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}

  🐣 whileInView, viewport
  whileInView 는 요소가 화면에 보이는 동안에만 적용되는 애니메이션을 정의합니다.
  viewport 는 한 번 화면에 나타나면 다시 사라지기 전까지 애니메이션이 다시 발생하지 않음을 의미합니다.
  
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  />

  🐣 useScroll, useSpring ( 어려웠음.. )
  useScroll 은 viewport 기준으로 scroll 했을때 사용합니다. 그 중 scrollYProgress 는 웹 페이지 전체 heigth 를 기준으로 0 ~ 1 의 값을 갖습니다.
  scrollXProgress, scrollXProgress 를 const {scrollXProgress} = useScroll() 로 객체를 꺼내주어야 합니다.

  useScroll
-------------------------------------------------

  const { scrollYProgress } = useScroll()

  <MotionScrollBox
    style={{ scaleX: scrollYProgress }}
  />

-------------------------------------------------

  useScroll, useSpring 을 같이 썼을 때 ( 부드러운 애니메이션 추가할 수 있습니다. )
-------------------------------------------------

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, 속도 제어
    damping: 30,
    restDelta: 0.001
  })

  <Motion.div
    style={{ scaleX }}
  />

-------------------------------------------------


  🐣 layoutId
  layoutId="active-pill" 으로 쓰이며 애니메이션 전환을 부드럽게 해준다.
  즉 useState 값의 따라 컴포넌트간의 이동이 있다면 사용할 수 있다.

  🐣 AnimatePresence
  React 애플리케이션에서 요소가 마운트되거나 언마운트 될 때 애니메이션을 쉽게 추가할 수 있게 해주는 역할을 합니다.

*/