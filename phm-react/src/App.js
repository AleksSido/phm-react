import * as React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
import ListOfItems from "./containers/ListOfItems";
import Item from "./containers/Item";
import Content from "./components/Content";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'uk'
    };
  }
  setLang = (lang) => {
    this.setState({lang});
  };

  render() {
    return (
      <div className="body-wrapper">
        <BrowserRouter>
          <Content>
            <Header lang={this.state.lang} setLang={this.setLang}/>
            <Route exact path={'/:lang/:category/'} component={ListOfItems}/>
            <Route exact path={'/:lang/:category/:item/'} component={Item}/>
          </Content>


        </BrowserRouter>
      </div>
    );
  }
}

export default App;
