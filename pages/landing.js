import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

const styles ={
    blockStyle:{
        backgroundColor: '#8d82c4'
    }
}


export default () => (
    <Layout>
        <Head>
            <title>Portfolio</title>
            <meta name="description" content="Landing Page" />
       
        </Head>

        <div>
            <BannerLanding />
           
          
            <div id="main">
                 <section id="one">
                    {/* <div className="inner">
                        <header className="major">
                            <h2>Sed amet aliquam</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                    </div> */}
                </section>
               <section id="two" className="spotlights">
                    <section>
                        <Link href="https://ancient-lowlands-14789.herokuapp.com/" >
                            <a className="image"><img src="/static/images/Berto_Chicago_install.png" alt="art studio" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Cadmium</h3>
                                </header>
                                <p>Find Art Events in Richmond, VA</p>
                                <ul className="actions">
                                    <li><Link href="https://ancient-lowlands-14789.herokuapp.com/"><a className="button">App link</a></Link></li>
                                    <li><Link href="https://github.com/johnsoncm/cadmium"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section style={styles.blockStyle}>
                        <Link href="https://epurpur.github.io/NationalParkService/">
                            <a className="image"><img src="/static/images/NPS_3.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>National Park Service Finder</h3>
                                </header>
                                <p>A searchable map to find Historic Sites near you</p>
                                <ul className="actions">
                                    <li><Link href="https://epurpur.github.io/NationalParkService/"><a className="button">App Link</a></Link></li>
                                    <li><Link href="https://github.com/epurpur/Project1_NationalParkService"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://johnsoncm.github.io/passwordgenerator/">
                            <a className="image"><img src="/static/images/PW_Generator_Image.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Password Generator</h3>
                                </header>
                                <p>Generate a secure random password quickly and easily</p>
                                <ul className="actions">
                                    <li><Link href="https://johnsoncm.github.io/passwordgenerator/"><a className="button">App Link</a></Link></li>
                                    <li><Link href="https://github.com/johnsoncm/passwordgenerator"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section style={styles.blockStyle}>
                        <Link href="https://johnsoncm.github.io/daily-planner/">
                            <a className="image"><img src="/static/images/Workday_React.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Work Day Scheduler</h3>
                                </header>
                                <p>Keep track of your daily tasks</p>
                                <ul className="actions">
                                    <li><Link href="https://johnsoncm.github.io/daily-planner/"><a className="button">App Link</a></Link></li>
                                    <li><Link href="https://github.com/johnsoncm/daily-planner"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://damp-woodland-46122.herokuapp.com/">
                            <a className="image"><img src="/static/images/Budget_Tracker.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Budget App</h3>
                                </header>
                                <p>Keep track of your finances both on and offline with this progressive web app</p>
                                <ul className="actions">
                                    <li><Link href="https://damp-woodland-46122.herokuapp.com/"><a className="button">App Link</a></Link></li>
                                    <li><Link href="https://github.com/johnsoncm/pwa-budget-tracker"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section style={styles.blockStyle}> 
                        <Link href="https://lit-lake-33755.herokuapp.com/">
                            <a className="image"><img src="/static/images/Fitness_App_React2.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Fitness Tracker</h3>
                                </header>
                                <p>Create, view, and track your daily workouts</p>
                                <ul className="actions">
                                    <li><Link href="https://lit-lake-33755.herokuapp.com/"><a className="button">App Link</a></Link></li>
                                    <li><Link href="https://github.com/johnsoncm/workout-tracker"><a className="button">Repo Link</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
               
                   
                </section>
      
       </section>
</div>
 
        </div>
    </Layout>
)
