import * as React from 'react';
import all from "../data/all";

class Item extends React.Component {
 render(){
   const lang = this.props.match.params.lang;
   const category = this.props.match.params.category;
   const item = this.props.match.params.item;
   const itemCategory = all.find(item=>{return item.idString === category});
   const itemObj = itemCategory[lang].find(itemObj => {return itemObj.idString === item});
   return (
     <div>
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