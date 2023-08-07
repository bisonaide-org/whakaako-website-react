import Link from "next/link";
import './navbar.css'
function NavBar() {
    return (
        <nav>
            <ul >
                <li><Link href="/"> Home </Link></li>
                <li><Link href="/about"> About </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar