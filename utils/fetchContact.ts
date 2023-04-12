import { Contact } from "@/typings";

export const fetchContact = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`)

    const data = await res.json()
    const contact: Contact = data.contact;


    return contact;
}