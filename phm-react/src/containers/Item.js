import * as React from 'react';
import all from "../data/all";
import {Helmet} from "react-helmet";

class Item extends React.Component {
 render(){
   console.log('item');
   // const lang = this.props.match.params.lang;
   // const category = this.props.match.params.category;
   // const item = this.props.match.params.item;
   const lang = this.props.lang;
   const category = this.props.category;
   const item = this.props.item;
   const itemCategory = all.find(item=>{return item.idString === category});
   const itemObj = itemCategory[lang].find(itemObj => {return itemObj.idString === item});
   return (
     <div>
       <Helmet>
         <meta charSet="utf-8" />
         <title>{itemObj.name}</title>
       </Helmet>
       <div>{itemObj.name}</div>
       <div>{itemObj.data}</div>
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
   );
 }
}
export default Item;