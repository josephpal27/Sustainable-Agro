import './CareerForm.css';

const CareerForm = () => {
    return (
        <>
            <section className="career-form">
                <h3>Applying For - Renewable Energy Engineer</h3>
                <form action="">
                    <div className="input-box">
                        <label htmlFor="f_name">First Name <span>*</span></label>
                        <input type="text" name="First Name" id="f_name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="l_name">Last Name <span>*</span></label>
                        <input type="text" name="Last Name" id="l_name" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="phone">Phone No. <span>*</span></label>
                        <input type="number" name="Phone No." id="phone" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input type="email" name="Email" id="email" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="organization">Current Organization <span>*</span></label>
                        <input type="text" name="Current Organization" id="organization" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="industry">Current Industry <span>*</span></label>
                        <input type="text" name="Current Industry" id="industry" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="exp">Experience <span>*</span></label>
                        <input type="text" name="Experience" id="exp" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="cr_ctc">Current CTC <span>*</span></label>
                        <input type="text" name="Current CTC" id="cr_ctc" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="exp_ctc">Expected CTC <span>*</span></label>
                        <input type="text" name="Expected CTC" id="exp_ctc" required />
                    </div>
                    <div className="input-box">
                        <label htmlFor="notice">Notice Period (In Days) <span>*</span></label>
                        <input type="text" name="Notice Period" id="notice" required />
                    </div>
                    <div className="input-box resume-box">
                        <label htmlFor="resume">Upload Resume <span>*</span></label>
                        <input type="file" id="resume" required />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </section>
        </>
    )
}

export default CareerForm
