import logo from './logo.svg';
import React, { Component,PureComponent, useEffect, useState } from 'react';
import './App.css';
//import axios from 'axios';




const Parent = () => {
  const [Name,setName] = useState(true)
  const [count,updateCount] = useState(0)
  const [products,updateProducts] = useState([])
  const [allProducts,updateAllProducts] = useState([])
  const [count1,setCount1] = useState(0)
  const showName=()=>{
    setName(!Name)
  }

  useEffect(()=>{
     console.log('component did mount')
     fetch('https://jsonplaceholder.typicode.com/photos')
     .then(response => response.json())
    //axios.get('https://jsonplaceholder.typicode.com/photos')
  .then(json => {
    const tenProducts = json.slice(0,10)
    updateAllProducts(json)
    updateProducts(tenProducts)
  })},[])
   
  const addMore=()=>{
    setCount1(count1 + 1)
    let n = count1*10;
    const tenP = allProducts.splice(n+1,10);
    const add = [...products,...tenP]
    products.length<40 && updateProducts(add)
  }

  useEffect(()=>{
    console.log('component did update') 
  })
  return (<div>
    <h1 >name : {products.length}</h1>
    <button onClick={showName}>click</button>
    <button onClick={()=>updateCount(count+1)}>count</button>
    {Name && <Child count = {count}/>}
    {console.log(products)}
    <div className="cardWrap">
    {products.length && products.map(({title,url,thumbnailUrl,id}) =>
      <div className="card">
       <h5>{title}</h5>
       <img src={thumbnailUrl}/>
      </div>)}
      </div>
      <button className="showMore" onClick={addMore}>Show more products</button>
  </div> );
  }
 
export default Parent;

const Child = ({count}) => {
  const [childCount,updateChildCount] = useState(count)
  useEffect(()=>{
    if(count <=5)
    updateChildCount(count)
  },[count])
  
  return (<div>
    <h2>Child - {childCount}</h2>
  </div>  );
}
 

  




















// class App extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(' constructor -app')
//     this.state = { 
//       loading: true,
//       products:[],
//       count:0,
//       showName:true
//      }
//   }
//   componentDidMount(){
//     console.log(' componentDidMount - app')
//     setTimeout(()=>fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => this.setState({
//       products : json,
//       loading: false
//     })),5000)
//   }
//   shouldComponentUpdate(nextProps,nextState){
//      console.log("shouldComponentUpdate - App")
//     if(nextState.count <9 && nextState.count>=0){
//       return true
//     }
//     else{
//       return false
//     }

//   }
//   componentDidUpdate(){
//      if(this.state.count == 5)
//      console.log('count is 5')
//   }
//   render() {
//     let {loading,products,count,showName} = this.state; 
//     return (<>
//          <h1>App - {count}</h1>
//          <button onClick = {()=>
//           this.setState({count: this.state.count+1})}>inc</button>
//            <button onClick = {()=>
//           this.setState({count: this.state.count-1})}>dec</button>
//         {loading && <h1>loading..</h1>}
//         <hr/>
//         <button onClick= {()=>
//           this.setState({showName: !this.state.showName})}>show/hide</button>
//         {showName && <LifeCycle count = {count}/>}
//         {products.length ? products.map((item)=> <h5>{item.title}</h5>): ""}
//        {/* {console.log(" render - App")} */}
      
//       </>);
//   }
// }
 
// export default App;

 
// class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//     // console.log('constructor - LifeCycle')
//   }
//   componentDidMount() {
//       console.log("componentDidMount - Lifecycle")
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate - Lifecycle")
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//      console.log("shouldComponentUpdate - Lifecycle")
//     if (nextProps.count <= 3 && nextProps.count>=0) {
//       return true
//     } else return false
//   }

//   componentWillUnmount() {
//      console.log("When component dies")
//   }
//   render() {
//     // console.log("render - Lifecycle")
//     return (<>
//       <h1>Life Cycle Methods - {this.props.count}</h1>
//     </>);
//   }
// }


