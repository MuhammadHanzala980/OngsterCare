import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import PinInput from 'react-pin-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'




export const Step3 = ({ step, setStep, formData, setFormData }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStep(++step)
    }


    return (<Form onSubmit={handleOnSubmit} >
        <p className="text-muted px-3 pt-3">We'll use your number for account security &amp; verification only. It will not be visible on your profile</p>
        <Form.Group controlId="formBasicName" className=" p-3 mb-0">
            <Row style={/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "13vh" } : { marginBottom: "18vh" }}>
                <Col xs={12} md={6}>
                    <Form.Group controlId="" className="w-100">
                        <Form.Label className="text-muted">Enter Phone Number</Form.Label>
                        {/* <Form.Control type="text" placeholder="" className="w-100 p-4"
                        // value={formData.phone} onChange={(e) => setFormData({ ...formData, "phone": e.target.value })} 
                        /> */}
                        <PhoneInput
                            inputStyle={{ padding: "1.5rem 3rem", width: "100%" }}
                            country={'us'}
                        // value={formData.phone}
                        // onChange={(phone) => setFormData({ ...formData, "phone": phone })}
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="" className="w-100">

                        <Form.Label style={/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { display: "none" } : { visibility: "hidden" }}>Send Verification Code</Form.Label>
                        <Button variant="flat" type="submit" className="btn-flat2 p-3 mx-md-3 for-button">
                            Send Verification Code
</Button>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <p className="small text-dark"> <u>
                        Resend Code
                        </u></p>
                    <hr />
                </Col>
                <Col xs={12}>
                    <Form.Group controlId="" className="w-100">
                        <Form.Label className="text-muted">Enter 4 Digit Code</Form.Label>
                        <div>
                            <PinInput
                                length={4}
                                initialValue=""
                                secret
                                onChange={(value, index) => { }}
                                type="numeric"
                                inputMode="number"
                                inputStyle={{ borderColor: 'grey' }}
                                inputFocusStyle={{ borderColor: 'grey' }}
                                onComplete={(value, index) => { }}
                                autoSelect={true}
                                regexCriteria={/^[0-9]*$/}
                            />
                        </div>
                    </Form.Group>
                </Col>
            </Row>



        </Form.Group>

        <Form.Group className="w-100 d-flex footer-thing">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 mx-3"
            // onClick={() => setStep(++step)}
            >
                Next
</Button>

        </Form.Group>
        <hr />
        <p className="blowtxt">Ongstercare.com does not employ, and is not responsible for any care provider or care seeker.
        you are responsible for selecting caregiver or job and for complying with all applicable laws.
        Ongstercare.com does not generator or verify information in profile, job posts or applications.
</p>

    </Form>)
}