import { useEffect, useState } from "react";
import { ContactList } from "../components/ContactList";
import { ContactFilter } from "../components/ContactFilter";
import { contactService } from "../services/contact.service";
import { Outlet } from "react-router-dom";

export function ContactPage() {
    const [contacts, setContacts] = useState(null)
    const [filterBy, setFilterBy] = useState({ term: '' })
    useEffect(
        () => {
            loadContacts()
        }
    )
    async function loadContacts() {
        contactService.getContacts(filterBy).then(contacts => {
            setContacts(contacts)
        })
    }

    function onChangeFilter(filterBy) {
        setFilterBy(filterBy)
    }
    return (
        <section>
            <h1>Contact Page</h1>
            <section>
                <Outlet />
            </section>
            <ContactFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
            <ContactList contacts={contacts ? contacts : []} />
        </section>
    )
}