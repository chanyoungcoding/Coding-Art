import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ABox from './ABox';
import BBox from './BBox';
import CBox from './CBox';
import ReactTransitionGroup from './ReactTransitionGroup';
import Common from './Common';


const TransitionRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={5000}
        classNames="page-transition"
      >
        <Routes location={location}>
          <Route element={<Common/>}>
            <Route path='reacttransition' element={<ReactTransitionGroup/>}/>
            <Route path="/A" element={<ABox/>}/>
            <Route path="/B" element={<BBox/>}/>
            <Route path="/C" element={<CBox/>}/>
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionRoutes;
