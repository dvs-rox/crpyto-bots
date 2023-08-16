import { Link } from "react-router-dom";

export function ContactPreview({ contact }) {
    return (
        <article className="contact-preview" >
            <h3>{contact.name}</h3>
            {/* <h4>{contact.phone}</h4>
            <h4>{contact.email}</h4> */}
            <div className="actions">
                {/* <button className="details">Details</button> */}
                <Link to={`/contacts/${contact._id}`}>Details</Link>
            </div>
        </article >
    )
}