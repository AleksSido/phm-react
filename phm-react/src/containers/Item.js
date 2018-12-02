import * as React from 'react';
import all from "../data/all";
import {Helmet} from "react-helmet";
import PageTitleContainer from "../components/PageTitleContainer";
import text from "../data/text";

class Item extends React.Component {
 render(){
   const lang = this.props.lang;
   const category = this.props.category;
   const item = this.props.item;
   const itemCategory = all.find(item=>{return item.idString === category});
   const itemObj = itemCategory[lang].find(itemObj => {return itemObj.idString === item});
   return (

       <main className="main">
         <div className="main-wrapper">
           <PageTitleContainer>{itemObj.name}</PageTitleContainer>
           <div>
             <div>{itemObj.idString}</div>
             <div>
               {category === 'earrings' ? (
                 <div>
                   <div
                     style={{
                       width: '100px',
                       height: '100px'}}>
                     <img src={require(`./../assets/img/earrings/${itemObj.idString}/${itemObj.idString}_1.jpg`)} alt={"img"}/></div>
                   <div
                     style={{
                       width: '100px',
                       height: '100px'}}>
                     <img src={require(`./../assets/img/earrings/${itemObj.idString}/${itemObj.idString}_2.jpg`)} alt={"img"}/></div>
                   <div
                     style={{
                       width: '100px',
                       height: '100px'}}>
                     <img src={require(`./../assets/img/earrings/${itemObj.idString}/${itemObj.idString}_3.jpg`)} alt={"img"}/></div>
                 </div>
               ) : null}

             </div>
           </div>

         </div>
       </main>





   );
 }
}
export default Item;