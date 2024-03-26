import Link from 'next/link';
export default function Navbar(){
    return(
       <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" href=''>Moi</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link href=''>Home</Link></li>
                            <li><Link href=''>Profil</Link></li>
                            <li><Link href=''>Dashboard</Link></li>
                            <li><Link href=''>Support</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}