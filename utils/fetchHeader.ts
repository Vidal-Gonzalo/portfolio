import { HeaderInfo } from "@/typings";

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const fetchHeader = async () => {
    const res = await fetch(`${apiUrl}/api/getHeader`)

    const data = await res.json()
    const header: HeaderInfo = data.header;

    return header;
}