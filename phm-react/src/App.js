import * as React from 'react';
import './App.css';
// import Header from "./components/Header";
import {BrowserRouter, Route} from "react-router-dom";
// import ListOfItems from "./containers/ListOfItems";
// import Item from "./containers/Item";
// import Content from "./components/Content";
import LanguageHandler from "./components/LanguageHandler";
import Content from "./components/Content";
import Item from "./containers/Item";


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   lang: 'uk'
    // };
  }
  // setLang = (lang) => {
  //   this.setState({lang});
  // };

  render() {

    return (
      <div className="body-wrapper">
        <BrowserRouter>

          <Content>
            <Route exact path={'/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/:category/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/:category/:item/'} component={LanguageHandler}/>
          </Content>


        </BrowserRouter>
      </div>
    );
  }
}

export default App;
