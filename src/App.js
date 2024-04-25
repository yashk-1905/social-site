import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import SectionWrap from './components/SectionWrap';
import Sidebar from './components/Sidebar';
import WrapHeadFoot from './components/WrapHeadFoot';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import SelectedTabContext from './store/SelectedTabContext';
import PostListContextProvider from './store/PostListStore';

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [x, setX] =useState("Sourabh");
  // let x = "Sourabh";
  return (
    <PostListContextProvider>
    <SectionWrap>
      <SelectedTabContext.Provider
        value={
          {
            selectedTab,
            setSelectedTab,
          }
        }
      >
        <Sidebar></Sidebar>
        <WrapHeadFoot>
          <Header></Header>
          {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </WrapHeadFoot>
      </SelectedTabContext.Provider>
    </SectionWrap>
    </PostListContextProvider>
  );
}

export default App;
