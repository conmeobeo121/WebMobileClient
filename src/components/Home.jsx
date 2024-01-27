import Product from './Product';
import img_main1 from '../assets/img-main1.png';
import img_main1_1 from '../assets/img-main1_1.png';
import img_main1_2 from '../assets/img-main1_2.png';
import img_main2 from '../assets/img-main2.png';
import img_main3 from '../assets/img-main3.png';
import img_main4 from '../assets/img-main4.png';


const Home = () => {

    return (
        <>
            <div className="row m-2">
                <div className="col-8">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2017/05/ip8-07-1494380638053.jpg.webp" className="d-block w-100" alt="..." style={{ height: 380 }} />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2017/05/ip8-07-1494380638053.jpg.webp" className="d-block w-100" alt="..." style={{ height: 380 }} />

                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn.mobilecity.vn/mobilecity-vn/images/2017/05/ip8-07-1494380638053.jpg.webp" className="d-block w-100" alt="..." style={{ height: 380 }} />

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <i className="fa-solid fa-chevron-left" style={{ color: 'black' }} />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <i className="fa-solid fa-chevron-right" style={{ color: 'black' }} />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="col-4">
                    <img className="mb-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBNTnWH99fDGAyzY_XVgphOn8spF1hXarEUaFP7mcGWDDGjOHx2FpGMKGpUQkld7DR2w&usqp=CAU" style={{ height: 150, width: 420 }} alt="..." />
                    <img className="mb-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBNTnWH99fDGAyzY_XVgphOn8spF1hXarEUaFP7mcGWDDGjOHx2FpGMKGpUQkld7DR2w&usqp=CAU" style={{ height: 150, width: 420 }} alt="..." />
                    <img className="mb-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBNTnWH99fDGAyzY_XVgphOn8spF1hXarEUaFP7mcGWDDGjOHx2FpGMKGpUQkld7DR2w&usqp=CAU" style={{ height: 150, width: 420 }} alt="..." />

                </div>

            </div>
            <Product />
        </>
    );
}

export default Home;
