function Navbar() {
    return (
        <div>
            <nav>
                <img src={require('../assets/world-logo.png')} alt='world logo' className='logo'/>
                <h1>my travel journal</h1>
            </nav>
        </div>
    )
}

export default Navbar;