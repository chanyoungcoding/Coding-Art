import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const AnimatePresenceBox = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <AnimatePresenceContainer >
      
      <AnimatePresence mode="wait">
        {isVisible && (
          <LoginBox
            initial={{ translateX: 60, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: 60, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Login</h1>
            <input type="text" placeholder="아이디"/>
            <input type="text" placeholder="비밀번호"/>
          </LoginBox>
        )}
      </AnimatePresence>

      <button onClick={toggleVisibility}>
        {isVisible ? "End" : "Start"}
      </button>
    </AnimatePresenceContainer>
  );
};

const AnimatePresenceContainer = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background-color: white;
`

const LoginBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  padding: 10px;
  border-radius: 15px;
  input {
    width: 50%;
    margin: 10px;
    padding: 10px;
    background-color: #333333;
    border-radius: 5px;
    outline: none;
    border: none;
  }
`


export default AnimatePresenceBox