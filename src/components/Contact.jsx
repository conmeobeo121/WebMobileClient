import React from 'react';

const Contact = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 text-center py-4 my-4">
                    <h1>Have Some Question?</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center">
                    <img src="https://cdn.tgdd.vn//News/1518021//iphone-pro-max-2023-co-gi-moi-chip-a17-2-800x450.jpg" alt="Contact Us" height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Duong Tien" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" rows={5}></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
