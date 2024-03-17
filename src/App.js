import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css';

import ChannelDetail from './Components/ChannelDetail';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import VideoDetail from './Components/VideoDetail';
import SearchFeed from './Components/SearchFeed';
const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
   <Navbar/>
    <Routes>
    <Route path='/' exact element={<Feed/>}/>
    <Route path="/video/:id" element={<VideoDetail/>}/>
    <Route path="/channel/:id" element={<ChannelDetail/>}/>
     <Route path="/search/:searchTerm" element={<SearchFeed/>}/> 
    </Routes>
    </Box>
    </BrowserRouter>
  );


export default App;
