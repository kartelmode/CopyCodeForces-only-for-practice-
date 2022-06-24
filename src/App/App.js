import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import AppStyle from './App.module.css';
import HeaderAndBox from './HeaderAndBox/HeaderAndBox.jsx';
import ProfileAndSideBar from './ProfileAndSideBar/ProfileAndSideBar';

function App() {

  return (
    <BrowserRouter>
      <div className={AppStyle.App}>
        <HeaderAndBox/>
        <ProfileAndSideBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
