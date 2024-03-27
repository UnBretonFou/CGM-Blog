import './globals.css';

export default function Header(){
    return(
        <header className="home-page bg-gray-100 min-h-screen"> 
            <a href="/" className="logo text-xl font-bold">CGM Blog</a>
            <nav className="nav flex items-center">
            <a href="/about" className="nav-link mr-4">À propos</a>
            <a href="/contact" className="nav-link mr-4">Contact</a>
            <a href="/services" className="nav-link">Connexion</a>
        </nav>
        </header>
        )
}