import { useParams, NavLink } from 'react-router-dom'
import { contactService } from '../services/contact.service.js'
import { useEffect, useState } from 'react'

export function ContactDetails() {
    const [contact, setContact] = useState({})
    const params = useParams()
    useEffect(() => {
        loadContact()
    }, [params])
    async function loadContact() {
        const id = params.id
        console.log("🚀 ~ file: ContactDetails.jsx:13 ~ loadContact ~ id:", id)
        try {
            if (id) {
                const contact = await contactService.getContactById(id)
                setContact(contact)
            }
        } catch (err) {
            console.log('error loading contact', err)
        }
    }
    return (
        <section style={{ backgroundImage: `https://robohash.org/${contact.name}.png` }}>
            <h1>Contact Details</h1>
            <h2>{contact.name}</h2>
            <h3>{contact.email}</h3>
            <h3>{contact.phone}</h3>
            <div className='actions'>
                <NavLink to={`/contacts/edit/${contact._id}`}>Edit</NavLink>
            </div>
        </section>
    )
}