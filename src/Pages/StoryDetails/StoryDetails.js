import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

const StoryDetails = () => {
    const { id } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:3050/stories?story=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.queryStoryInfo));
    }, [id]);

    return (
        <div>
            <Header />
            <div className="d-lg-flex border-top border-dark bg-light">
                <div className="col-12 col-lg-6">
                    <img className="img-fluid w-100 p-3" src={details[0]?.image} alt="" />
                    <h2 className="fw-bold ms-3 pb-2 text-center">{details[0]?.title}, <small className='fs-6 fw-lighter fst-italic'>{details[0]?.location}</small></h2>
                    <div className="d-flex justify-content-between mb-3">
                        <h6 className="ms-3 bg-primary p-2 rounded-pill text-white">Visit Date: {details[0]?.date}</h6>
                        <h6 className="me-3 bg-warning p-2 rounded-pill">Rating: {details[0]?.rating}/5</h6>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-3">
                    <p className="fst-normal pb-2">{details[0]?.description}</p>
                    <p className="fst-italic fw-bold py-1">"{details[0]?.experience}"</p>
                    <h4 className="fw-regular text-center text-white rounded-pill bg-success p-2 mx-5">Approx. Travel Cost: {details[0]?.expense}tk</h4>
                </div>
            </div>
        </div>
    );
};

export default StoryDetails;