export default function Header(){
    return(
        <header className="header bg-white shadow-md p-4 flex justify-between items-center">
        <a href="/" className="logo text-xl font-bold">CGM Blog</a>
        <nav className="nav flex items-center">
          <a href="/about" className="nav-link mr-4">À propos</a>
          <a href="/contact" className="nav-link mr-4">Contact</a>
          <a href="/services" className="nav-link">Connexion</a>
          
        </nav>
      </header>
    )
} 