import './Nav.css'


function Nav() {
    
    return (
        <header>
            <nav>   
                <div className='logo'>TheCocktailDB</div>       
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button className="btnDarkMode" onClick={() => setDarkMode(!darkMode)}>
                    🌙</button></li>
                    {/* {darkMode ? "☀️" : "🌙"} */}
                </ul>
            </nav>
        </header>

    )
}

export default Nav