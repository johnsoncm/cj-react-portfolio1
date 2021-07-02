import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/NPS_3.png')`}}>
                        <header className="major">
                            <h3>National Park Finder</h3>
                            <p>A searchable map to find Historic Sites near you</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/Berto_Chicago_install.png')`}}>
                        <header className="major">
                            <h3>Cadmium</h3>
                            <p>An Art Event Finder App for the City of Richmond, VA</p>
                        </header>
                        <Link href="https://ancient-lowlands-14789.herokuapp.com/" target="_blank"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/Work_schedular_2.png')`}}>
                        <header className="major">
                            <h3>Work Day Scheduler</h3>
                            <p>Track your daily tasks and save your progress</p>
                        </header>
                        <Link href="https://johnsoncm.github.io/daily-planner/"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/PW_Generator_Image.png')`}}>
                        <header className="major">
                            <h3>Password Generator</h3>
                            <p>Generate a secure and randomized password quickly and easily</p>
                        </header>
                        <Link href="https://johnsoncm.github.io/passwordgenerator/"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/Team_Website.png')`}}>
                        <header className="major">
                            <h3>Team Profile Generator</h3>
                            <p>A command-line app that builds team profiles for quick access to emails and github profiles</p>
                        </header>
                        <Link href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/workout-tracker2.png')`}}>
                        <header className="major">
                            <h3>Workout Tracker</h3>
                            <p>A fitness tracker app that allows users to create, view, and track daily workouts</p>
                        </header>
                        <Link href="https://drive.google.com/file/d/104mIjCfjrItyHMCc-p1ILFkLdlIZft8J/view"><a className="link primary"></a></Link>
                    </article>
                </section>
                {/* <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section> */}
            </div>

        </div>
    </Layout>
)
