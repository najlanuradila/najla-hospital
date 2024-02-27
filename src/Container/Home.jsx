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
        </div>

    )

}

export default Home;