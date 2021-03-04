import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export const Step5 = ({ step, setStep, formData, setFormData }) => {

    const [options, setOptions] = useState({
        "Have a Car": { value: false, name: "havecar" },
        "Non-Smoker": { value: false, name: "nonSmoker" },
        "Comfortable with Pets": { value: false, name: "confortableWithPets" },
        "Accept Online Payment through OngsterCare.com": { value: false, name: "acceptOnlinePayment" },
        "Accept Profesional Payment": { value: false, name: "acceptProfessionalPayment" },

    })



    const handleOptions = (val) => {
        setOptions({ ...options, [val]: { ...options[val], value: !options[val].value } })
        if (!options[val].value) {
            setFormData({ ...formData, [options[val].name]: 1 })
        } else {
            setFormData({ ...formData, [options[val].name]: 0 })
        }
    }


    return (<Form className="p-3">
        <Row
            style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "8vh" } : {}}
        >

            <Col xs={12}>
                <Form.Group className="w-100 ">
                    <Form.Label className="text-muted">Select Multiple</Form.Label>
                    <div className="my-2">
                        {
                            Object.keys(options).map((v, i) => {
                                return <p key={i} className={`${options[v].value && "gender-active"}` + ' border border-silver gender w-100 my-2'} style={{ textAlign: "inherit" }} onClick={(e) => handleOptions(v)}>
                                    {options[v].value ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> :
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />} {v}
                                </p>

                            })
                        }
                        <ErrorOutlineIcon className="help-in-multiple" />
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