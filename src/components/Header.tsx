import '../index.css'

export default function Header(){
    return(
        <>
        <header className='header-container sticky-header'>
            <div className="header-design">
                <svg viewBox="0 0 889 243" xmlns="http://www.w3.org/2000/svg" className='ellipse-1'>
                    <ellipse cx="403.5" cy="35" rx="485.5" ry="208" fill="#B37137"/>
                </svg>
                <svg viewBox="0 0 865 243" xmlns="http://www.w3.org/2000/svg" className='ellipse-2'>
                    <ellipse cx="477" cy="35" rx="477" ry="208" fill="#8A5934"/>
                </svg>
            </div>
            
            <div className="header-content">
                <div className="header-left">WHISKER & QUILL</div>
                <nav className='header-right'>
                    <ul>
                        <li>about</li>
                        <li>contact</li>
                        <li>sign in</li>
                    </ul>
                </nav>
            </div>
        </header>
        
        
        </>
    )
}