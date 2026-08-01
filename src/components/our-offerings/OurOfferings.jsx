import { Link } from 'react-router-dom';
import './OurOfferings.css';
import { Button } from '@mui/material';

import offeringImg1 from '../../assets/images/offerings/1.avif';
import offeringImg2 from '../../assets/images/offerings/2.avif';
import offeringImg3 from '../../assets/images/offerings/teak.avif';
import offeringImg4 from '../../assets/images/offerings/4.avif';
import offeringImg5 from '../../assets/images/offerings/5.jpeg';
import offeringImg6 from '../../assets/images/offerings/butter.avif';
import offeringImg7 from '../../assets/images/offerings/powder.avif';
import offeringImg8 from '../../assets/images/offerings/rubber.avif';
import offeringImg9 from '../../assets/images/offerings/cocoa-manufacturing.avif';

const OurOfferings = () => {
    return (
        <>
            <section className="our-offerings">
                <div className="box large-box">
                    <h4 data-aos="fade-up">OUR <span>OFFERINGS</span></h4>
                    <p data-aos="fade">We support cultivation and supply chains with targeted interventions—from advisory and operational planning to execution support—tailored to specific crop requirements and energy integration opportunities.</p>
                    <Link to="/solutions" data-aos="fade"><Button>View All Products</Button></Link>
                </div>
                <div className="box">
                    <img src={offeringImg1} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Rice</span>
                        <p>Implementation of water-saving technologies and methane-reduction practices.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg2} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cashews</span>
                        <p>Processing efficiency improvements and biomass energy utilization.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg3} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Teak Wood</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg4} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cocoa</span>
                        <p>Agroforestry systems that enhance shade, biodiversity, and carbon sequestration.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box large-box" id="large-text-box">
                    <img src={offeringImg5} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span data-aos="fade">Strategic Crop Programs</span>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg6} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cocoa Butter</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg7} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cocoa Powder</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg8} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Rubber Wood</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
                <div className="box">
                    <img src={offeringImg9} alt="Product" loading="lazy" />
                    <div className="layer">
                        <span>Cocoa Manufacturing</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <Link to="/solutions"><Button>View Product</Button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurOfferings
