import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'


const styles = {
    listStyle:{
        textAlign: 'center',
        listStyleType: 'none',
        backgroundColor: '#8d82c4'
    },
 textStyle:{
     paddingTop: '50px',
     margin: '50px'
 },
 imageStyle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
   
 }
}

export default () => (
    <Layout>
        <Head>
            <title>About</title>
        
            <meta name="description" content="Generic Page" />

        </Head>
        <div style={styles.backgroundStyle}>
        <div id="main" className="alt">
            {/* <section id="one"> */}
                <div className="inner">
                    <header className="major" style={styles.imageStyle}>
                    <img src="./static/images/Casey_portfolio_image.cropped.png" alt="pic of casey" ></img>
                        <h1>About Me</h1>
                    </header>
              
                    </div>
              
                    <p style={styles.textStyle}>
                        
                    Full Stack Web Developer in training, with a keen interest in
                        back-end development.
                        My background in fundraising has instilled an astute attention to detail and a friendly
                        collaborative nature.
                        Well versed in HTML, CSS, Javascript, Node.js, and React to build user-friendly web applications,
                        and a drive
                        and enthusiasm to learn more software development languages. A current student
                        of the University of Richmond’s Full Stack Coding Boot Camp, I have experience working
                        with a team demonstrating strong leadership and communication skills.  
                    </p>
             
                 
                    <div style={styles.listStyle}>
                    <h3 className="resume-heading" >Front End Languages</h3>
          
                  
                    <ul className="lang-list"style={styles.listStyle} >
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>React</li>
          </ul>
          <h3 className="resume-heading" >Back End Languages</h3>
          <ul className="lang-list"style={styles.listStyle} >
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Inquirer</li>
              <li>Jest</li>
              
          </ul>
          <h3 className="resume-heading" >Other Technologies</h3>
          <ul className="lang-list"style={styles.listStyle} >
          <li>Bootstrap</li>
          <li>Sequelize</li>
          <li>Bycrypt</li>
          <li>Bulma</li>
          <li>Handlebars</li>
          <li>Google Fonts</li>
          <li>Font Awesome</li>
          </ul>

          </div>
                </div>
            {/* </section> */}
        </div>
     
    </Layout>
)
