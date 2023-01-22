import './Header.css'

function Header({setIsOpen, isOpen, basketLength, flash, setFlash, setUsCardOpen, userCardOpen}){
    return (
        <div className="row m-0 rounded mybg-pink text-white my_nav pt-2 justify-content-between">
            <div className="col-3 align-middle">
                <p className='logo_name'>Dessert Shop</p>
            </div>
            <div className='col-3 p-0 position-relative '>
                 <div className={`alert my_alert ${flash.type !== '' ? 'my_alert_open' : ''} p-0 pl-2 pr-2 overflow-hidden ${flash.type === 'success' ? 'alert-success ' : 'alert-danger'}`}>
                    <p className='d-flex'>{flash.text} <span className='my_btn p-0' onClick={() => setFlash({type: '', text: ''})}><i className='fa fa-close'></i></span></p>
                </div>
            </div>
            <div className='col-3 align-middle d-flex justify-content-end'>
                <button className='my_btn my_btn_white col-3 p-0' onClick={() => setUsCardOpen(!userCardOpen)}><i class={`fa fa-${userCardOpen ? 'close' : 'user'} icon`}></i></button>
                <button className='my_btn my_btn_white col-3 p-0' onClick={() => setIsOpen(!isOpen)}><i class={`fa fa-${isOpen ? 'close' : 'shopping-cart'} icon`}></i>
                {basketLength !== 0 ? <span className='my_basket_badge'>{basketLength < 10 ? basketLength : '9+'}</span> : ''}
                </button>
            </div>
        </div>
    );
}


export default Header;
