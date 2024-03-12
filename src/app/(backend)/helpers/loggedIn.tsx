
import { redirect } from "next/navigation"
import getCurrentUser from "./getCurrentUser"

export default async function LoggedIn() {
    const session = await getCurrentUser()

    if (session) {
        redirect('/')
    }
}

