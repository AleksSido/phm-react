import * as React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
import ListOfItems from "./containers/ListOfItems";
import Item from "./containers/Item";
import Content from "./components/Content";

class App extends React.Component {

  render() {
    return (
      <div className="body-wrapper">
        <BrowserRouter>
          <Content>
            <Header/>
            <Route exact path={'/:category/'} component={ListOfItems}/>
            <Route exact path={'/:category/:item/'} component={Item}/>
          </Content>


        </BrowserRouter>
      </div>
    );
  }
}

export default App;
