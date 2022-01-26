import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const AddStory = () => {
    const titleRef = useRef();
    const locationRef = useRef();
    const imageRef = useRef();
    const expenseRef = useRef();
    const dateRef = useRef();
    const ratingRef = useRef();
    const descriptionRef = useRef();
    const experienceRef = useRef();

    const handleAddStory = e => {
        const title = titleRef.current.value;
        const location = locationRef.current.value;
        const image = imageRef.current.value;
        const expense = expenseRef.current.value;
        const date = dateRef.current.value;
        const rating = ratingRef.current.value;
        const description = descriptionRef.current.value;
        const experience = experienceRef.current.value;
        const status = "pending";

        // const newStory = { title, location, image, expense, date, rating, description, experience, status };

        const newStory = { title, image, description, experience, location, expense, date, rating, status };

        const url = 'http://localhost:3050/stories';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStory)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Congrats! Your story is waiting for admin's approval.");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="col-10 col-lg-8 mx-auto my-5 border bg-light border rounded-3 shadow-lg">
            <div className="text-center text-success fw-bold fst-italic py-3">
                <h2>Your Story Details</h2>
            </div>
            <Form onSubmit={handleAddStory} className="mx-2 px-2 mb-4">
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            ref={titleRef}
                            placeholder="Place name"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Location:</Form.Label>
                        <Form.Control
                            type="text"
                            ref={locationRef}
                            placeholder="District / City"
                            required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Image:</Form.Label>
                        <Form.Control
                            type="text"
                            ref={imageRef}
                            placeholder="Image URL"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Travel Cost:</Form.Label>
                        <Form.Control
                            type="number"
                            ref={expenseRef}
                            placeholder="Approx. cost fot visiting"
                            required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Travel Date:</Form.Label>
                        <Form.Control
                            type="date"
                            ref={dateRef}
                            placeholder="Date of travel"
                            required />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Rating:</Form.Label>
                        <Form.Control
                            type="number"
                            ref={ratingRef}
                            placeholder="Rating out of 5"
                            required />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea"
                            type="text"
                            ref={descriptionRef}
                            placeholder="Tell something about the place"
                            required rows={4} />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="">
                        <Form.Label>Experience:</Form.Label>
                        <Form.Control as="textarea"
                            type="text"
                            ref={experienceRef}
                            placeholder="Share your experience"
                            required rows={4} />
                    </Form.Group>
                </Row>
                <Button variant="outline-primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default AddStory;