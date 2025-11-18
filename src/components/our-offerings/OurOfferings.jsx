import { Link } from 'react-router-dom';
import './OurOfferings.css';
import { Button } from '@mui/material';

const OurOfferings = () => {
    return (
        <>
            <section className="our-offerings">
                <div className="box large-box">
                    <h4>OUR <span>OFFERINGS</span></h4>
                    <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                    <Link to="/products"><Button>View All Products</Button></Link>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
                <div className="box large-box">
                    <span>Product</span>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
                <div className="box large-box">
                    <span>Product</span>
                </div>
                <div className="box">
                    <span>Product</span>
                </div>
            </section>
        </>
    )
}

export default OurOfferings
