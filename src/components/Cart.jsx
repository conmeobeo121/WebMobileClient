import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from '../redux/actions/index';

const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    }

    const productItems = state.map((item) => (
        <div className="card mb-3" key={item.id}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img src={item.img} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 85 }} />
                        </div>
                        <div className="ms-3">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                            <h5 className="fw-normal mb-0">2</h5>
                        </div>
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <button onClick={() => handleClose(item)} style={{ color: 'black' }}><i className="fas fa-trash-alt" /></button>
                    </div>
                </div>
            </div>
        </div>
    ));

    const total = state.reduce((acc, item) => acc + item.price, 0);

    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to={'/products'} className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</Link></h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {state.length} items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                                                </div>
                                            </div>
                                            {productItems}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-black text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: 45 }} alt="Avatar" />
                                                    </div>
                                                    <p className="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-mastercard fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-visa fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-amex fa-2x me-2" /></a>
                                                    <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x" /></a>
                                                    <form className="mt-4">
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="Cardholder's Name" />
                                                            <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                        </div>
                                                        <div className="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1234 5678 9012 3457" minLength={19} maxLength={19} />
                                                            <label className="form-label" htmlFor="typeText">Card Number</label>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YYYY" size={7} minLength={7} maxLength={7} />
                                                                    <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-outline form-white">
                                                                    <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                                                                    <label className="form-label" htmlFor="typeText">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <hr className="my-4" />
                                                    <div className="d-flex justify-content-between mb-4">
                                                        <p className="mb-2">Total (Incl. taxes)</p>
                                                        <p className="mb-2">${total.toFixed(2)}</p>
                                                    </div>
                                                    <button type="button" className="btn btn-info btn-block btn-lg">
                                                        <div className="d-flex justify-content-between">
                                                            <span>${total.toFixed(2)}</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card mb-4 mb-lg-0 text-center">
                <div className="card-body">
                    <p><strong>We accept</strong></p>
                    {/* ... (payment icons) ... */}
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                    <img class="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
                </div>
            </div>
        </>
    );
}

export default Cart;
