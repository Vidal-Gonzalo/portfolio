import { HeaderInfo } from "@/typings";

export const fetchHeader = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHeader`)

    const data = await res.json()
    const header: HeaderInfo = data.header;


    return header;
}