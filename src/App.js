import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import LoadingBar from 'react-top-loading-bar'

import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App=()=>{

 
 const [pagesize,pageSize]=useState(10);

  const [progress, setprogress] = useState(0);
 


    return (
      <>

        <Router>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={2}

          />
 
          <Switch>
            <Route exact path='/'>

              <News pagesize={pagesize} setprogress={setprogress} key="technology" country='in' category='technology' />

            </Route>


            <Route exact path='/business'>      <News key="business" pagesize={pagesize} country='in' category='business' setprogress={setprogress} /></Route>
            <Route exact path='/sports'>        <News setprogress={setprogress} key="sports" pagesize={pagesize} country='in' category='sports' /></Route>
            <Route exact path='/entertainment'>  <News setprogress={setprogress} key="entertainment" pagesize={pagesize} country='in' category='entertainment' />
            </Route>
            <Route exact path='/health'>         <News setprogress={setprogress} key="health" pagesize={pagesize} country='in' category='health' /></Route>
            <Route exact path='/science'>        <News setprogress={setprogress} key="science" pagesize={pagesize} country='in' category='science' /></Route>
          </Switch>
        </Router>
      </>
    )
  
}
export default App;
