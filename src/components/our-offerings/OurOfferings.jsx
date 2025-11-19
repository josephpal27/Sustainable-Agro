import { Link } from 'react-router-dom';
import './OurOfferings.css';
import { Button } from '@mui/material';

import offeringImg1 from '../../assets/images/offerings/1.avif';
import offeringImg2 from '../../assets/images/offerings/2.avif';
import offeringImg3 from '../../assets/images/offerings/3.avif';
import offeringImg4 from '../../assets/images/offerings/4.avif';
import offeringImg5 from '../../assets/images/offerings/5.avif';
import offeringImg6 from '../../assets/images/offerings/6.avif';
import offeringImg7 from '../../assets/images/offerings/7.avif';

const OurOfferings = () => {
    return (
        <>
            <section className="our-offerings">
                <div className="box large-box">
                    <h4 data-aos="fade-up">OUR <span>OFFERINGS</span></h4>
                    <p data-aos="fade">Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                    <Link to="/products" data-aos="fade"><Button>View All Products</Button></Link>
                </div>
                <div className="box">
                    <img src={offeringImg1} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Rice</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg2} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cashews</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg3} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cotton</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg4} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cocoa</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box large-box" id="large-text-box">
                    <span data-aos="fade">LOREM IPSUM <br /> DOLAR SIT</span>
                </div>
                <div className="box">
                    <img src={offeringImg5} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Rice</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box large-box">
                    <img src={offeringImg7} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Shade Nets</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg6} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cotton</span>
                        <Link to="/"><Button>View Product</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurOfferings
