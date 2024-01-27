import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [visibleProducts, setVisibleProducts] = useState(4);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:5000/api/products')
                    .then((data) => {
                        console.log('data', data);
                        setProduct(data.data);
                    })
                    .catch((error) => {
                        console.log('error', error);
                    })

            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchData();
    }, []);



    const cardProduct = (product) => {
        return (
            <div className="col col-md-3" key={product.id}>
                <div className="card my-3 py-2" key={product.id} style={{ width: "250px" }}>
                    <img style={{ height: "200px" }} src={product.images[0]} className="card-img-top" alt={product.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title mb-4">{product.title}</h5>
                        <p className="lead">${product.price}</p>
                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
                </div>
            </div>
        );
    };

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        )
    };

    const sortProduct = (products, sortBy) => {
        let sortedProduct = [...products];

        switch (sortBy) {
            case 'lowtohigh':
                sortedProduct.sort((a, b) => a.price - b.price);
                break;
            case 'hightolow':
                sortedProduct.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sortedProduct;
    };

    const showMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
    }

    const hiddenMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts - 4);
    }

    const ShowProducts = () => {
        const filteredData = product.filter(item => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        const sortedData = sortProduct(filteredData, sortBy);

        return (
            <>
                <div className='buttons d-flex justify-content-center'>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSortBy('lowtohigh')}>Price - Low to high</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('')}>All</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Iphone')}>Iphone</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('SamSung')}>SamSung</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Xiaomi')}>Xiaomi</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Sony')}>Sony</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('OnePlus')}>OnePlus</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSortBy('hightolow')}>Price - High to low</button>
                </div>
                <div className="row text-center">
                    {loading ? <Loading /> : sortedData.slice(0, visibleProducts).map(cardProduct)}
                </div>
                {
                    visibleProducts < sortedData.length && (
                        <div className='d-grid gap-2 d-md-flex justify-content-center my-5'>
                            <button className='btn btn-outline-dark'
                                onClick={showMoreProducts}>
                                Show More
                            </button>
                            <button className='btn btn-outline-dark'
                                onClick={hiddenMoreProducts}>
                                Hidden More
                            </button>
                        </div>
                    )
                }
            </>
        );
    };

    return (
        <div>
            <div className="container py-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <ShowProducts />
            </div>
        </div>
    );
};

export default Product;
