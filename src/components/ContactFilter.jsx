import { useEffect, useState } from "react";

export function ContactFilter(props) {
    const [filterBy, setFilterBy] = useState(props.filterBy)

    useEffect(() => {
        props.onChangeFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }
    const { term, phone } = filterBy
    return (
        <form className="contact-filter">
            <input onChange={handleChange} value={term} type="text" name="term" placeholder="Search by name" />
        </form>
    )
}