import Card from "./Card";
import './ProductList.css'

function ProductList({products, basketDispatch, setFlash}){
    return (
        <div className="row list">
            {products.map((el) => {
                return <div className="col-4 p-3"><Card product={el} basketDispatch={basketDispatch} setFlash={setFlash}/></div>;
            })}
        </div>
    );
}

export default ProductList;
