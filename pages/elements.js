import Head from "next/head"

import Layout from '../components/Layout'



export default () => (
    <Layout>
           <section id="contact">
        <div className="inner">
            <h2>Keep In Touch!</h2>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">caseyjamora@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(276) 971-6670</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Richmond, VA<br />
                        <br />
                        </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
    </Layout>
)
