import './App.css';
import Header from './Header';
import { useReducer, useState } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import UserCard from './UserCard';

function basketReducer(state, action){
  if(action.type === 'addToBasket'){
    let prodID = action.payload.prodID;
    for(let i = 0;i < state.length; i++){
      if(state[i].prodID === prodID){
        action.payload.setFlash({type: 'error', text: 'Already in basket.'})
        return state;
      }
    }
    action.payload.setFlash({type: 'success', text: 'Successfully added.'})
    return [...state, {
      prodID: prodID,
      id: (state.length === 0 ? 1 : state[state.length - 1].id + 1),
      count: 1,
      price: action.payload.price
    }]
  }else if(action.type === 'increaseCount'){
    let id = action.payload.id;
    
    return state.map((el) => {
      if(el.prodID === id){
        if(el.count >= 10){
          return el;
        }
        return {
          prodID: el.prodID,
          id: el.id,
          count: el.count++,
          price: el.price
        }
      }
      return el;
    })
  }else if(action.type === 'decreaseCount'){
    let id = action.payload.id;
   
    return state.map((el) => {
      if(el.prodID === id){
        if(el.count <= 1){
          return el;
        }
        return {
          prodID: el.prodID,
          id: el.id,
          count: el.count--,
          price: el.price
        }
      }
      return el;
    })
  }else if(action.type === 'deleteFromBasket'){
    return state.filter((el) =>{
      if(el.id !== action.payload.id){
        return el;
      }
    });
  }
}


function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Strawbery cake',
      price: 1050,
      img: 'https://diycandy.com/wp-content/uploads/2020/09/Small-dessert-mini-cheesecake-recipe-735x735.jpg',
      sale:{
        percent: 35,
        daysLeft: 24
      },
      likes: 3
    },
    {
      id: 2,
      name: 'Cherry cake',
      price: 870,
      img: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpg',
      sale:{
        percent: 20,
        daysLeft: 8
      },
      likes: 10
    },
    {
      id: 3,
      name: 'Oreo cake',
      price: 450,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJZD0c9gRDu48XoYFmwK6xh2USYKuBRi2-Q&usqp=CAU",
      sale:{
        percent: 10,
        daysLeft: 2
      },
      likes: 24
    },
    {
      id: 4,
      name: 'Rainbow marmelade',
      price: 340,
      img: "https://www.allrecipes.com/thmb/X8xgnYPKu7n1vr2gkRSZLQeDDtA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/24704_SevenLayerGelatinSalad_DDMFS__16-1x1-1-ce250258e1d5450b958a95011f96e190.jpg",
      likes: 2
    },
    {
      id: 5,
      name: 'Oreo cake',
      price: 450,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJZD0c9gRDu48XoYFmwK6xh2USYKuBRi2-Q&usqp=CAU",
      sale:{
        percent: 10,
        daysLeft: 2
      },
      likes: 24
    },
  ]);

  let currentUser = {
    name: 'Joe',
    surname: 'Doe',
    salePercent: 4,
    avatar: null,
  }

  currentUser = null;

  const [basket, basketDispatch] = useReducer(basketReducer ,[]);
  const [isOpen, setIsOpen] = useState(false);
  const [userCardOpen, setUsCardOpen] = useState(false);
  const [flash, setFlash] = useState({type: '', text: ''});
  console.log(userCardOpen);
  return (
    <div className='App bg-light rounded'>
        <Header setIsOpen={setIsOpen} isOpen={isOpen} basketLength={basket.length} flash={flash} setFlash={setFlash} setUsCardOpen={setUsCardOpen} userCardOpen={userCardOpen}/>
        <ProductList products={products} basketDispatch={basketDispatch} setFlash={setFlash}/>
        <Basket basket={basket} products={products} isOpen={isOpen} basketDispatch={basketDispatch}/>
        <UserCard currentUser={currentUser} isOpen={userCardOpen}/>
    </div>
  );
}

export default App;
