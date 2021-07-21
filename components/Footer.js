const styles = {
    footerStyle: {
 textAlign: 'center',
 paddingLeft: '50px'
    }
}

const Footer = (props) => (
    <footer id="footer">
        
        <div className="inner">
            <ul className="icons" style={styles.footerStyle}>
                <li><a href="https://www.twitter.com" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/johnsoncm" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/casey-johnson-11336b4a/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
          </div>
    </footer>
)

export default Footer
