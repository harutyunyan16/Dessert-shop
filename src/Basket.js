import './Basket.css'
import BasketCard from './BasketCard'

export default function Basket({basket, products, isOpen, basketDispatch}){
    let total = 0;
    for(let i = 0;i < basket.length;i++){total += basket[i].price * basket[i].count};
    return (
        <div className={`basket ${isOpen ? 'open' : ''}  border shadow rounded overflow-auto`}>
            <h5 className='text-white'>Total : {total} <b>AMD</b></h5>
            <div className='overflow-auto'>
                {basket.map((el) => {return <BasketCard product={products.filter((prod) => el.prodID === prod.id)[0]} basketDispatch={basketDispatch} basket={basket}/>})}
            </div>
        </div>
    )
}


