import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from './../redux/actions/index';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(`http://localhost:3000/mockDataProducts/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    const cart = useSelector((state) => state.addItem);
    const dispatch = useDispatch();
    const [cartBtn, setCartBtn] = useState('Add to cart');

    useEffect(() => {
        const isInCart = cart.some((item) => item.id === product.id);
        setCartBtn(isInCart ? 'Remove from cart' : 'Add to cart');
    }, [product, cart]);

    const handleCart = () => {
        (cartBtn === 'Add to cart')
            ? dispatch(addItem(product))
            : dispatch(delItem(product));
    }

    const Loading = () => {
        return (
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <NavLink className="text-decoration-none text-dark" to={`/`}>
                            <div className="d-flex align-items-center m-3">
                                <Skeleton height={20} width={50} />
                            </div>
                        </NavLink>
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <Skeleton height={300} width={250} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border p-4">
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">                                                <Skeleton height={30} width={150} />
                                        </span>
                                            <h5 className="text-uppercase">
                                                <Skeleton height={30} width={200} />
                                            </h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price">
                                                    <Skeleton height={20} width={70} />
                                                    <Skeleton height={30} width={100} />
                                                </span>
                                            </div>
                                        </div>
                                        <p className="about">
                                            <Skeleton height={10} width={300} />
                                            <Skeleton height={10} width={300} />
                                            <Skeleton height={10} width={300} />
                                            <Skeleton height={10} width={300} />
                                        </p>
                                        <div className="cart mt-4 align-items-center">
                                            <Skeleton height={40} width={150} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const ShowDetails = () => {
        return (
            <>
                <div className="row d-flex justify-content-center py-5">
                    {product && (
                        <div className="col-md-12">
                            <NavLink className="text-decoration-none text-dark" to={`/`}>
                                <div className="d-flex align-items-center m-3">
                                    <i className="fa fa-long-arrow-left"></i>
                                    <span className="ml-1">&nbsp;Back</span>
                                </div>
                            </NavLink>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="images p-3">
                                            <div className="text-center p-4">
                                                <img id="main-image" alt="product" src={product.img} width="250" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="border p-4">
                                            <div className="mt-4 mb-3">

                                                <span className="text-muted text-capitalize">{product.category}</span>

                                                <h5 className="text-uppercase">
                                                    {product.title}
                                                </h5>

                                                Rating {product.rating && product.rating.rate}
                                                <i className="fa fa-star text-warning"></i>

                                                <div className="price d-flex flex-row align-items-center">
                                                    <big className="display-6"><b>${product.price}</b></big>
                                                </div>
                                            </div>
                                            <p className="text-muted">{product.desc}</p>
                                            <div className="cart mt-4 align-items-center">
                                                <button onClick={handleCart} className="btn btn-outline-dark text-uppercase mr-2 px-4">
                                                    {cartBtn}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowDetails />}
            </div>
        </div>
    )
};

export default ProductDetail;