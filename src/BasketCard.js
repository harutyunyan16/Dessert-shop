import './BasketCard.css'

export default function BasketCard({product, basketDispatch, basket}){
    let id = basket.filter((el) => product.id === el.prodID)[0].id;
    return (
        <div className="w-100">
            <div className='basketCard w-100 bg-white p-1 border rounded shadow'>
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
                {product.sale === undefined ? '' : <div className={`salePrice`}>
                    Price  <i>{product.price - (product.price * product.sale.percent) / 100} <b>AMD</b></i>
                </div>}
                <p className={product.sale === undefined ? '' : 'd-none'}>Price : <i>{product.price}</i><b> AMD</b></p>
            </div>
            <div className='prodButtonsGroup'>
                <button className='addToCart btn mybtn_yellow rounded-circle text-white'><i className='fa fa-shopping-cart'></i></button>
                <button className='addToCart btn mybtn_pink rounded-circle text-white'><i className='fa fa-heart'></i></button>
            </div>
        <div className='settingCount rounded shadow'>
            <div className='row m-0 pt-3'>
                <div className='col-4'>
                    <button className='btn w-100 alert alert-success my_btn p-0' onClick={() => basketDispatch({type: 'increaseCount', payload: {id: product.id}})}><i className='fa fa-plus'></i></button>
                </div>
                <div className='col-4 text-center count'>
                    <p className='alert alert-secondary p-0 pb-1'>{basket.filter((el) => el.prodID === product.id)[0].count}</p>
                </div>
                <div className='col-4'>
                    <button className='btn w-100 alert alert-danger my_btn p-0' onClick={() => basketDispatch({type: 'decreaseCount', payload: {id: product.id}})}><i className='fa fa-minus'></i></button>
                </div>
            </div>
        </div>
        <div className='deleteButton'>
                <button className='my_btn text-white my_bg_red rounded-circle shadow' onClick={() => basketDispatch({type: 'deleteFromBasket', payload: {id: id}})}><i className='fa fa-trash'></i></button>
        </div>
        </div>  
        </div>
    )
}