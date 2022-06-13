import './App.css';
import { Route, Routes } from "react-router-dom";
import IntroList from './components/Intro/IntroList';
import Home from './page/HomePage';
import FirstMain from './page/FirstMain/FirstMain';
import EventIntro from './components/Intro/EventIntro';
import ReviewPage from './components/Review/reviewPage';
import Reviewdetail from './components/Review/Reviewdetail';
import ReviewWrite from './components/Review/ReviewWrite';
import NotFound from './page/NotFound';
import { DataProvider } from './components/context/DateContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<FirstMain/>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/intro" element={<IntroList />}></Route>
          <Route path="/event" element={<EventIntro />}></Route>
          <Route path="/reviews" element={<ReviewPage/>}>
            <Route path=":id" element={<Reviewdetail/>}></Route>
            <Route path=":write" element={<ReviewWrite/>}></Route>
          </Route>
          <Route path="/not-found" element={<NotFound />}></Route>
        </Routes>
      </DataProvider>
        
        <footer>푸터</footer>
    </div>
  );
}

export default App;
