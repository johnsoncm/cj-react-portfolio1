import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                <li><Link href="/#one"><a><span onClick={props.onToggleMenu}>My Work</span></a></Link></li>
                <li><Link href="/static/images/Casey_Johnson_Resume_6.15.21.pdf"><a><span onClick={props.onToggleMenu}>Resume</span></a></Link></li>
                <li><Link href="/#contact"><a><span onClick={props.onToggleMenu}>Contact Me</span></a></Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
