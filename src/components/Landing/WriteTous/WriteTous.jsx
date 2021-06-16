import React from 'react'

const WriteTous = () => {
    return (
        <div className="contactus-wrapper">
            <form>
                <h4 className="text-center">Write to us</h4>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>
                <button type="button">Send Message</button>
            </form>
        </div>
    )
}

export default WriteTous
