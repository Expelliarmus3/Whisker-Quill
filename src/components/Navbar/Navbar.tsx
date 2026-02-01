import './Navbar.css'

function Navbar(){
    return(
        <>
        {/* <nav>
            <div>WHISKER & QUILL</div>
            <div>about</div>
            <div>contact</div>
            <div>sign in</div>
        </nav> */}
        <header>
           <div className="header-container">
                {/* The Ellipse Background */}
                <svg width="889" height="243" viewBox="0 0 889 243" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-bg">
                    <ellipse cx="403.5" cy="35" rx="485.5" ry="208" fill="#B37137"/>
                </svg>

                {/* The Text Overlapping it */}
                <div className="header-left">
                    WHISKER & QUILL
                </div>
            </div>
            
        </header>
        
        </>
    )
}
export default Navbar