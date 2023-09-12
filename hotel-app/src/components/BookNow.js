import React from 'react'
const BookNow = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, phone, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: phone.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div className="container mt-5">
            <h2 className="mb-3">Have Further Queries? Contact Us</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="phone">
                        Phone
                    </label>
                    <input className="form-control" type="phone" id="phone" required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="form-control" id="message" required />
                </div>
                <button className="btn btn-danger" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}
export default BookNow