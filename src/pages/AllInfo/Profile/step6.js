import React, { useState } from 'react';
import { Button, Row, Col, Form, FormControl } from 'react-bootstrap';

export const Step6 = ({ step, setStep, formData, setFormData }) => {
    const [passErr, setError] = useState("")

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if ((formData.profileLater.length > 100)) {
            setError("");
            setStep(8)
        }
        else {
            setError("min 100 characters required!");
        }
    }
    return (<Form onSubmit={handleOnSubmit} className="p-3">
        <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "30vh" } : { marginBottom: "20vh" }}>
            <Col xs={12}>
                <Form.Group controlId="" className="w-100">
                    <Form.Label className="text-muted">Add Title</Form.Label>
                    <Form.Control required type="text" minLength={5} placeholder="Ex fun player, Smile Craetor" className="w-100 p-4" value={formData.profileTitle} onChange={(e) => setFormData({ ...formData, "profileTitle": e.target.value })} />
                </Form.Group>
            </Col>
            <Col xs={12}>
                <Form.Group controlId="" className="my-3">
                    <FormControl as="textarea" aria-label="With textarea" placeholder="100 min character"
                        required

                        // style={{
                        //     height: 100,
                        //     width: "100%",
                        //     wordBreak: "break-word"
                        // }}
                        minLength={100}
                        rows={4} value={formData.profileLater} onChange={(e) => setFormData({ ...formData, "profileLater": e.target.value })} />
                    {
                        !!passErr &&
                        <Form.Text className="text-danger">
                            {passErr}
                        </Form.Text>
                    }
                </Form.Group>

            </Col>
        </Row>

        <Form.Group className="w-100 d-flex ">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 ml-3" >
                Next
</Button>

        </Form.Group>
        <hr />
        <p className="p-0 blowtxt ">Ongstercare.com does not employ, and is not responsible for any care provider or care seeker.
        you are responsible for selecting caregiver or job and for complying with all applicable laws.
        Ongstercare.com does not generator or verify information in profile, job posts or applications.
</p>

    </Form>)
}