import './Card.css';


function Card({product, basketDispatch, setFlash}){
    return (
        <div className='productCard w-100 p-1 border rounded shadow'>
            <div className='likeBadge rounded'>
                <p>{product.likes} <i className='fa fa-heart'></i></p>
            </div>
            {product.sale !== undefined ?
            <div className={`badges`}>
                <div className={`my_badge percent rounded bg-info text-white'`}>
                    <p>Sale {product.sale.percent}%</p>
                </div>
                <div className={`my_badge daysLeft rounded ${product.sale.daysLeft === undefined ? 'd-none' : ''} ${product.sale.daysLeft > 10 ? "bg-success" : product.sale.daysLeft < 10 && product.sale.daysLeft > 5 ? "bg-warning" : 'bg-danger'} text-white`}>
                    <p>{product.sale.daysLeft} days left</p>
                </div>
            </div> : ''}
            
            <img className='w-100 rounded' height='200px' src={product.img}/>
            <hr/>
            <div className='productInfo'>
                <h6>{product.name}</h6>
                <p>Price : {product.sale === undefined ? <span>{product.price} <i>AMD</i></span> : <span>{product.price - (product.sale.percent * product.price / 100)} | <span className='price'>{product.price} AMD</span></span>}</p>
            </div>
            <div className='prodButtonsGroup'>
                <button className='addToCart btn mybtn_yellow rounded-circle text-white' onClick={() => basketDispatch({type: 'addToBasket', payload: {prodID: product.id, price: (product.sale === undefined ? product.price : product.price - (product.price * product.sale.percent / 100)), setFlash: setFlash}})}><i className='fa fa-shopping-cart'></i></button>
                <button className='addToCart btn mybtn_pink rounded-circle text-white'><i className='fa fa-heart'></i></button>
            </div>
        </div>  
    );
}

export default Card;
