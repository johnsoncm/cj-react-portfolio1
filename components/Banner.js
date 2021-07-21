const styles ={
    aboutStyle:{
        paddingLeft: "355px",
        fontSize: "18px",
        

    },
    buttonStyle:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: '30px'
       
    },
    h2Style:{
        marginLeft: '11%'
    }, 

    contactBtnStyle:{
        marginRight: '19px'
    }
}




const Banner = (props) => (
      
    <section id="banner" className="style2">
        
        <div className="inner">
            <header className="major">
                <h1>Hi, my name is Casey Jamora</h1>
            </header>
           
            <div className="content" >
                <img src="./static/images/Casey_portfolio_image.cropped.png" alt="pic of casey"></img>
                <h2 >Full Stack Web Developer</h2>
                <ul className="actions" >
                    <li  style={styles.buttonStyle}><a href="/landing"  className="button next scrolly">My Work    </a></li>
                    <li style={styles.buttonStyle}><a href="/generic" className="button next scrolly">About</a></li>
                    <li style={styles.buttonStyle}><a href="/static/images/Casey_Johnson_Resume_6.15.21.pdf" className="button next scrolly">Resume</a></li>
                    <li style={styles.buttonStyle}><a href="elements" className="button next scrolly" style={styles.contactBtnStyle}>Contact</a></li>
                </ul>
            </div>
   
        </div>
    </section>


)

export default Banner
