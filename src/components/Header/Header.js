import Logo from "./Logo";
import DarkMode from "./DarkMode";
import './header.scss'

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

export default Header;