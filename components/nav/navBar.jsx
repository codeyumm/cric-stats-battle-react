import './navBar.css'
import '../../src/index.css'

export default function NavBar(){
    return(

        <header>
            <nav>
            
                <div className="logo">
                    <img src="/images/wicket.png" alt="image of wicket" className='logo' />
                    <h1>CricStatsBattle</h1>
                </div>

                <ul>
                    <li>About</li>
                </ul>
                
            </nav>
        </header>

    )
}