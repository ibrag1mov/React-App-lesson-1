import './header.css';

function Header(){
    return (
        <>

            <header>
                <div className='container'>
                    <nav className='navbar'>
                            <Logo/>
                        <DarkMode/>
                    </nav>
                </div>
            </header>

        </>
    )
}

function Logo(){
    return (
        <>
          <div className='nav-logo'>
                <h1 className='nav-title'>
                    <a className='nav-title-link' href='./index.html'>
                        Where in the world?
                    </a>
                </h1>
          </div>
        </>
    )
}

function DarkMode(){
    return (
        <>
          <div className='dark-mode'>
            <button className='dark-mode-btn js-dark-mode'>
                <i className='bi bi-moon'></i> Dark Mode
            </button>
          </div>
        </>
    )
}

export default Header;