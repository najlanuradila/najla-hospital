import React from "react";

const Home = () => {
    return (
        <div class="background">
            <section>
                <h1>
                    Welcome to [Hospital Name]. <br />
                    We are committed to providing <br />
                    the best healthcare services <br />
                    for you and your family.</h1>

                <p>
                    Lorem ipsum is placeholder text commonly used in the <br />
                    graphic, print, and publishing industries for previewing <br />
                    layouts and visual mockups.
                </p>
                <br />
                <br />
                <li class="book2"><a href="#">Book Appointment</a></li>
            </section>
            <section>
                <table className="section2">
                    <tr>
                        <th>Services</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Feel amazing about your oral health</td>
                        <td>Lorem ipsum is placeholder text commonly used in the
                            graphic, print, and publishing industries for previewing
                            layouts and visual mockups.</td>
                    </tr>
                </table>

                <div className="gallery">
                    <a href="#">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </a>
                    <div className="title">Add title</div>
                    <div className="desc">add description</div>
                </div>
                <div className="gallery">
                    <a href="#">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </a>
                    <div className="title">Add title</div>
                    <div className="desc">add description</div>
                </div>
                <div className="gallery">
                    <a href="#">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </a>
                    <div className="title">Add title</div>
                    <div className="desc">add description</div>
                </div>
                <div className="gallery">
                    <a href="#">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </a>
                    <div className="title">Add title</div>
                    <div className="desc">add description</div>
                </div>
                <div className="book3">
                    <li><a href="#">View all services list </a></li>
                </div>
            </section>
            <section className="section3">
                <p><b>Dental 24H Emergency</b></p>
                <h1>
                    Gentle, friendly treatment <br />from our locally practice.</h1>

                <p>
                    Lorem ipsum is placeholder text commonly used in the <br />
                    graphic, print, and publishing industries for previewing <br />
                    layouts and visual mockups.
                </p>
                <br />
                <br />
                <li class="book2"><a href="#">Book Appointment</a></li>
            </section>
            <section className="section4">
                <br />
                <p><b>Feature</b></p>
                <h1>
                    Specialized care through experiences</h1>

                <p>
                    Lorem ipsum is placeholder text commonly used in the <br />
                    graphic, print, and publishing industries for previewing 
                    layouts and visual mockups.
                </p>
                <br />
                <br />
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </div>
                    <div className="content">
                        <p className="title">Safety First</p>
                        <p className="desc">We prioritize safety with health checks and more</p>
                    </div>
                </div>
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </div>
                    <div className="content">
                        <p className="title">Full-service dentistry</p>
                        <p className="desc">Our clinic offer a full of dental service, from exams to implants and veneers.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </div>
                    <div className="content">
                        <p className="title">Insurance accepted</p>
                        <p className="desc">We’re in network with major insurers like Delta Dental, Aetna, and Cigna.</p>
                    </div>
                </div>
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://loremflickr.com/200/150/computing" alt="dummy" />
                    </div>
                    <div className="content">
                        <p className="title">No judgment ever</p>
                        <p className="desc">From floss bosses to sweet tooths, every mouth is welcome.</p>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </div>

    )

}

export default Home;