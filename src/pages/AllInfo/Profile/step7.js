import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export const Step7 = ({ step, setStep }) => {

    const [options, setOptions] = useState({
        "Nanny needed for 1 Child in Nevada City,CA": false,
        "Nanny needed for 2 Child in Nevada City,CA": false
    })
    const handleOptions = (val) => {
        setOptions({ ...options, [val]: !options[val] })
    }
    return (<Form className="p-3">
        <Row
            style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "8vh" } : {}}
        >

            <Col xs={12}>
                <Form.Group className="w-100 ">
                    <Form.Label className="">Why wait? Start Applying Now.</Form.Label>
                    <br />
                    <Form.Label className="text-muted small w-50">Here's a Sneak peak of jobs near you.
                    You can apply even before you've finished signing up!
                    </Form.Label>
                    <div className="my-2">
                        {
                            Object.keys(options).map((v, i) => {
                                return <p key={i} className={`${options[v] && "gender-active"}` + ' border border-silver gender w-100 my-2'} style={{ textAlign: "inherit" }} onClick={(e) => handleOptions(v)}>
                                    {options[v] ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> :
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />} {v} <br />
                                    <p className="text-muted mx-4">
                                        Single mom to a 4-months-old. I have two pugs. I live a little Outside.
                                            <hr />
                                    </p>
                                    <p className="text-muted mx-4">
                                        <span>
                                            $15 - $30hr &nbsp;
                                            </span>
                                        <span>
                                            | Full Time &nbsp;
                                            </span>
                                        <span>
                                            | Start Aug 20
                                            </span>
                                    </p>
                                </p>

                            })
                        }
                    </div>

                </Form.Group>
            </Col>
        </Row>

        <Form.Group className="w-100 d-flex ">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 ml-3" onClick={() => setStep(++step)}>
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