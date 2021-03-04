import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

export const Step2 = ({ step, setStep, formData, setFormData }) => {

    const [languages, setLanguages] = useState([])
    const [langInp, setLangInp] = useState('')
    const [loading, setLoading] = useState(false)

    const getLanguages = async () => {
        try {
            const resp = await fetch("https://api.ongstercare.com/get-language")
            const respJSON = await resp.json()
            if (respJSON.success) {
                setLanguages(respJSON.data)
            }
        } catch (err) {
            alert("Connection problem");
            console.log(err)
        }
    }

    const postLanguage = async () => {
        try {
            setLoading(true)
            const resp = await fetch("https://api.ongstercare.com/add-language", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ languageName: langInp })
            })
            const respJSON = await resp.json();
            if (respJSON.success) {
                setLoading(false)
                setLangInp("")
            }
        } catch (err) {
            alert("Connection problem");
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        getLanguages()
    }, [loading])

    // console.log(formData)

    return (<Form className="p-3">
        <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "40vh" } : { marginBottom: "35vh" }}>
            <Col xs={12}>
                <Form.Group controlId="" className="w-100">
                    <Form.Control type="text" placeholder="Other type" className="w-100 p-4" value={langInp} onChange={(e) => setLangInp(e.target.value)} />
                    <Button variant="flat" type="button" disabled={loading} className="btn-flat2 in-input-btn" onClick={() => postLanguage()}>
                        Add
</Button>
                    <div className="d-flex my-2">
                        {
                            !!languages.length ? languages.map((val, i) => {
                                return (
                                    <p key={i} className={`${formData.language === val.id && "gender-active"}` + ' border border-silver gender mr-2 w-25 '} onClick={(e) => setFormData({ ...formData, "language": val.id })}>{val.name}</p>

                                )
                            })
                                :
                                <p className={`border border-silver gender mr-2 w-25`}>Loading...</p>
                        }

                        {/* <p className={`${formData.language === "english" && "gender-active"}` + ' border border-silver gender mr-2 w-25 '} onClick={(e) => setFormData({ ...formData, "language": e.target.innerText.toLowerCase() })}>English</p>
                        <p className={`${formData.language === "french" && "gender-active"}` + ' border border-silver gender w-25'} onClick={(e) => setFormData({ ...formData, "language": e.target.innerText.toLowerCase() })}>French</p> */}
                    </div>
                </Form.Group>
            </Col>
        </Row>

        <Form.Group className="w-100 d-flex ">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 ml-3" disabled={!formData.language} onClick={() => setStep(++step)}>
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