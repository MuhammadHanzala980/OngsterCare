import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SimpleSelect from "../../../components/select";
import { makeStyles } from '@material-ui/core/styles';
import MaterialUIPickers from '../../../components/datepicker'

const useStyles = makeStyles({
    root: {
        marginLeft: 0
    }
});

export const Step3 = ({ step, setStep, formData, setFormData }) => {
    const classes = useStyles();

    const [dob, setDob] = React.useState('08-19-2000')

    React.useEffect(() => {
        setFormData({ ...formData, graduationYear: !formData.currentlyAttending ? dob : 0 });
    }, [dob, formData.currentlyAttending])

    const handlelvlAchieved = (val) => {
        setFormData({ ...formData, highestLevelAchieved: val });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStep(++step)
    }

    const highestLevel = [
        { detail: "Some High School", value: "Some High School" },
        { detail: "High school degree", value: "High school degree" },
        { detail: "Some college", value: "Some college" },
        { detail: "College degree", value: "College degree" },
        { detail: "Some graduate school", value: "Some graduate school" },
        { detail: "Graduate degree", value: "Graduate degree" },
    ]
    // console.log(formData)

    return (<Form onSubmit={handleOnSubmit} className="p-3">
        <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "20vh" } : { marginBottom: "15vh" }}>
            <Col xs={12}>
                <Form.Group className="w-100 ">
                    <Form.Label className="text-muted">Highest level Achieved?</Form.Label>
                    <SimpleSelect label="Select Options" required options={highestLevel} value={formData.highestLevelAchieved} setValue={handlelvlAchieved} />
                </Form.Group>

            </Col>


            <Col xs={12} >
                <Form.Group controlId="" className="w-100">
                    <Form.Label className="text-muted">School Name</Form.Label>
                    <Form.Control required type="text" placeholder="" className="w-100 p-4" value={formData.schoolName} onChange={(e) => setFormData({ ...formData, "schoolName": e.target.value })} />
                </Form.Group>
            </Col>
            <Col xs={12} >
                <Form.Group controlId="" className="w-100">
                    <Form.Label className="text-muted">Your Graduation</Form.Label>
                    <div className="d-flex">
                        <MaterialUIPickers setDate={setDob} disabled={!!formData.currentlyAttending} />
                        {/* <Form.Control required type="text" placeholder="" className="w-50 p-4 mr-2" disabled={!!formData.currentlyAttending} value={formData.graduationYear} onChange={(e) => setFormData({ ...formData, "graduationYear": e.target.value })} /> */}
                        <FormControlLabel
                            style={{ marginLeft: 0 }}
                            control={<Checkbox checked={!!formData.currentlyAttending} onChange={(e) => setFormData({ ...formData, "currentlyAttending": e.target.checked ? 1 : 0 })} name="Currently Attending" />}
                            label="Currently Attending"
                        />
                    </div>

                </Form.Group>
            </Col>

        </Row>

        <Form.Group className="w-100 d-flex ">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 ml-3">
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