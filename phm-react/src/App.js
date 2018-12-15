import * as React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import LanguageHandler from "./components/LanguageHandler";

const App = (props) => {
    return (
      <div className="body-wrapper">
        <BrowserRouter>
          <>
            <Route exact path={'/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/:category/'} component={LanguageHandler}/>
            <Route exact path={'/:lang/:category/:item/'} component={LanguageHandler}/>

          </>
        </BrowserRouter>
      </div>
    );
};
export default App;
