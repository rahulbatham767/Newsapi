import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import LoadingBar from 'react-top-loading-bar'

import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  pagesize=10;

  state={
    progress:0
  }
   setprogress=(progress)=>{
    this.setState({
      progress:progress,
    })
  }

      render() {
       
    return (
        <>
      
        <Router>
          
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={2}
      
      />

          <Switch>
            <Route exact path='/'>

            <News pagesize={this.pagesize} setprogress={this.setprogress} key="technology" country='in' category='technology'/>

            </Route>

          
            <Route exact path='/business'>      <News   key="business" pagesize={this.pagesize} country='in' category='business' setprogress={this.setprogress} /></Route>
            <Route exact path='/sports'>        <News setprogress={this.setprogress}  key="sports"  pagesize={this.pagesize} country='in' category='sports'/></Route>
            <Route exact path='/entertainment'>  <News setprogress={this.setprogress} key="entertainment" pagesize={this.pagesize} country='in' category='entertainment'/>
            </Route>
            <Route exact path='/health'>         <News setprogress={this.setprogress} key="health"  pagesize={this.pagesize} country='in' category='health'/></Route>
            <Route exact path='/science'>        <News setprogress={this.setprogress} key="science"  pagesize={this.pagesize} country='in' category='science'/></Route>
            <Route exact path='/general'>        <News setprogress={this.setprogress} key="general"  pagesize={this.pagesize} country='in' category='general'/></Route>
          </Switch>
        </Router>
                </>
    )
  }
}
