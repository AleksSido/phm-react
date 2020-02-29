import * as React from 'react';

class ScrollToTop extends React.Component {
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };
  componentDidUpdate(){
    this.scrollToTop();
  };
  componentDidMount(){
    this.scrollToTop();
  }
  render(){
    return (
      <div className="ScrollToTop"/>
    );
  }
}
export default ScrollToTop;