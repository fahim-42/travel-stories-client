import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainBody = () => {
    const [stories, setStories] = useState([])
    useEffect(() => {
        const url = 'http://localhost:3050/stories';
        fetch(url)
            .then(res => res.json())
            .then(data => setStories(data.stories));
    }, [])
    return (
        <div id="stories" className="">
            <div className="d-lg-flex">
                {/* Side Navigation */}
                <aside className="col-sm-12 col-lg-3 bg-light border-end border-secondary">
                    <h2 className="text-center fw-bold fst-italic py-3 bg-success text-white">Filter</h2>
                    <ul className="pt-3 pb-3">
                        <li className="fs-5 fw-bold ms-4"><a className="text-decoration-none text-dark" href="/home">All</a></li>
                        {stories.map((place) => (
                            // <li key={place._id} className="fs-5 fw-bold ms-5">{place.location}</li>
                            <li key={place._id} className="fs-5 fw-bold ms-4"><a className="text-decoration-none text-dark" href="/home">{place.location}</a></li>
                        ))}
                    </ul>
                </aside>

                {/* Body Part */}
                <main className="col-sm-12 col-lg-9 text-dark">
                    <h2 className="text-center fw-bold fst-italic py-3 bg-primary text-white">Incredible Stories ...</h2>
                    <div className="d-flex flex-wrap justify-content-evenly">
                        {stories.map((story) => (
                            <div key={story._id} className="col-5 border rounded-3 shadow my-4">
                                <Link to={`/details/${story._id}`} className=" text-decoration-none text-dark">
                                    <img className="img-fluid w-100 p-3" src={story.image} alt="" />
                                    <h4 className=" fw-bold mx-2 text-center">{story.title}, <small className='fs-6 fw-light fst-italic'>{story.location}</small></h4>
                                    <h6 className="fw-bold text-center pb-1">Rating: {story.rating}/5</h6>
                                </Link>
                            </div>))
                        }
                    </div>


                    {/* <div className="d-flex align-items-center p-2 bg-warning">
                        <div className="col-4 ">
                            <img className="img-fluid" src="https://i.ibb.co/Bt310jy/teknaf.jpg" alt="" />
                            <h5 className="text-center mt-1 mb-0">Rating: 3.5/5</h5>

                        </div>
                        <div className="col-8 px-3">
                            <small className="fst-italic">01/01/22</small>

                            <h3 className="fw-bold my-2">Teknaf, <small className='fs-6 fw-light fst-italic'>Cox's Bazar</small></h3>

                            <p className="fst-lighter">Teknaf Beach is a part of Cox's Bazar Beach, located at Teknaf Upazila of Cox's bazar district. Teknaf beach is surrounded by the Teknaf peninsula mangrove area. This beach is divided into sections; Shamlapur Beach, Shilakhali Beach, and Hajampara Beach.</p>

                            <h6 className="">Expenses: 8500</h6>
                        </div>
                    </div> */}
                </main>
            </div>
        </div>
    );
};

export default MainBody;