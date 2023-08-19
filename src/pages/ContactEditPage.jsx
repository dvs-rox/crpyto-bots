import { useEffect, useState } from "react"
import { contactService } from '../services/contact.service.js'
import { useFetcher, useNavigate, useParams } from "react-router-dom"

export function ContactEditPage() {
    const [contact, setContact] = useState(contactService.getEmptyContact())
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
    }, [])

    async function loadContact() {
        const contactId = params.id
        try {
            if (contactId) {
                const contact = await contactService.getContactById(contactId)
                setContact(contact)
            }
        } catch (err) {
            console.log(err)
        }
    }
    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setContact(prevState => ({ ...prevState, [field]: value }))
    }
    async function onSaveContact(ev) {
        ev.preventDefault()
        try {
            await contactService.saveContact(contact)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    const { name, email, phone } = contact
    return (
        <section className="contact-edit">
            <form onSubmit={onSaveContact}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={email} onChange={handleChange} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={handleChange} />
                <button>Save</button>
            </form>
        </section>
    )
}