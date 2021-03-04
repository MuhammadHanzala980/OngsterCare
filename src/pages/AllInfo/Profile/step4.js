import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import SimpleSelect from "../../../components/select";

export const Step4 = ({ step, setStep, formData, setFormData }) => {
    let [exp, setExp] = useState(1)

    useEffect(() => {
        setFormData({ ...formData, experience: `${exp.toString()} years` });
    }, [exp])

    const handleSkill = (val) => {
        setFormData({ ...formData, skillName: val });
    }

    const [lang, setLang] = useState({})
    const handleLang = (val) => {
        Object.keys(lang).forEach(v => lang[v] = false)
        setLang({ ...lang, [val]: true })
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStep(++step)
    }

    const skill = [
        // { value: "martial arts", detail: "martial arts" },
        { value: "Certified teacher", detail: "Certified teacher" },
        { value: "CPR training", detail: "CPR training" },
        { value: "Early Child Development coursework", detail: "Early Child Development coursework" },
        { value: "Experience with Twins/Multiples", detail: "Experience with Twins/Multiples" },
        { value: "Experience with special needs children", detail: "Experience with special needs children" },
        { value: "First Aid training", detail: "First Aid training" },
        { value: "Child Development Associate (CDA)", detail: "Child Development Associate (CDA)" },
        { value: "Early Childhood Education", detail: "Early Childhood Education (ECE)" },
        { value: "Certified Nursing Assistant", detail: "Certified Nursing Assistant" },
        { value: "Certified Registered Nurse (RN)", detail: "Certified Registered Nurse (RN)" },
        { value: "Doula certified", detail: "Doula certified" },
        { value: "Trustline certified (CA only)", detail: "Trustline certified (CA only)" },
        { value: "NAFCC certified", detail: "NAFCC certified" },
    ]

    return (<Form onSubmit={handleOnSubmit} className="p-3">
        <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "25vh" } : { marginBottom: "3vh" }}>

            <Col xs={12} md={6}>
                <Form.Group className="w-100">
                    <Form.Label className="text-muted">SKILL/TRAINING?</Form.Label>
                    <SimpleSelect required label="Select Options" isMulti options={skill} value={formData.skillName} setValue={handleSkill} />

                </Form.Group>

            </Col>

            <Col xs={12} md={6}>
                <Form.Group controlId="" className="w-100">
                    <Form.Label className="text-muted">Experience</Form.Label>
                    <p className="p-3 d-flex justify-content-between border border-silver align-items-center">
                        <img src={process.env.PUBLIC_URL + "/assets/icons/minus.png"} width="18" alt="" onClick={() => exp > 1 && setExp(--exp)} />
                        {exp} Year
                    <img src={process.env.PUBLIC_URL + "/assets/icons/plus.png"} alt="" height="15" onClick={() => setExp(++exp)} /> </p>
                </Form.Group>
            </Col>

            <Col xs={12}>
                <Form.Group className="w-100 ">
                    <Form.Label className="text-muted">I am willing to help with remote learning</Form.Label>
                    <div className="d-flex my-2">
                        <p className={`${formData.remoteLearningHelp === 1 && "gender-active"}` + ' border border-silver gender mr-2 w-25 '} onClick={(e) => setFormData({ ...formData, "remoteLearningHelp": 1 })}>Yes</p>
                        <p className={`${formData.remoteLearningHelp === 0 && "gender-active"}` + ' border border-silver gender w-25'} onClick={(e) => setFormData({ ...formData, "remoteLearningHelp": 0 })}>No</p>
                    </div>

                    <Form.Label className="text-muted small w-50">Ensure Kids Attend thier school's online classes &amp; keep up with assignments.</Form.Label>
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