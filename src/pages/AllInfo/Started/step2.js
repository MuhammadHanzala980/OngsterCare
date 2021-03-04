import React from 'react';
import { Button, Row, Col, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import GoogleMaps from '../../../components/autosuggest';


export const Step2 = ({ step, setStep, formData, setFormData }) => {

    let [miles, setMiles] = React.useState(1)
    // const [streetAdd, setStreetAdd] = React.useState([])
    // const handleStreetAddress = async (val) => {
    //     try {
    //         const resp = await fetch("https://api.ongstercare.com/street-address", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ "searchWord": val })
    //         })
    //         const respJSON = await resp;
    //         console.log(respJSON, "resp")
    //         respJSON && !!respJSON.length && setStreetAdd(respJSON.map(val => { return val["structured_formatting"].main_text }))
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }


    React.useEffect(() => {
        setFormData({ ...formData, rangeInMiles: miles });
    }, [miles])


    const handleOnSubmit = (e) => {
        if(formData.zipCode !="" && formData.streetAddress != ""){
            e.preventDefault();
            setStep(++step)
        }
        else{
            alert("Address and Zip code should not be Empty")
        }
       
    }

    return (<Form onSubmit={handleOnSubmit} autoComplete="off">
        <p className="text-capitalize text-dark px-3 pt-3">Please Enter your home location to start searching for jobs in your area </p>
        <Form.Group controlId="formBasicName" className=" p-3 mb-0" >
            <Row style={!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? { marginBottom: "6vh" } : {}}>
                <Col xs={12} md={6}>
                    <Form.Group controlId="" className="w-100">
                        <Form.Label>Enter Street Address</Form.Label>
                        {/* <GoogleMaps  // required
                        /> */}
                        <Form.Control required="true" type="text" placeholder="" className="w-100 p-4" value={formData.streetAddress} onChange={(e) => setFormData({ ...formData, "streetAddress": e.target.value })} />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                    <Form.Group controlId="" className="w-100">
                        <Form.Label>City, State or Zip Code</Form.Label>
                        <Form.Control required="true" type="text" placeholder="" className="w-100" style={{ padding: "1.66rem" }} value={formData.zipCode} onChange={(e) => setFormData({ ...formData, "zipCode": e.target.value })} />
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <div className="text-center gmaps"  >
                        <div>
                            {/* <img src={process.env.PUBLIC_URL + "/assets/icons/Group 409.png"} alt="" /> */}
                            <span >

                                <img src={process.env.PUBLIC_URL + "/assets/icons/minus1.png"} alt="" onClick={() => miles > 1 && setMiles(--miles)} />&nbsp,
                                <span className="position-relative">
                                    <img src={process.env.PUBLIC_URL + "/assets/icons/Ellipse 42.png"} alt="" />
                                    <span className="position-absolute text-white" style={{ left: "45px", top: "-6px", fontSize: "x-large" }}>
                                        {miles}
                                    </span>
                                </span>
                                &nbsp,
                                <img src={process.env.PUBLIC_URL + "/assets/icons/plus1.png"} alt="" onClick={() => setMiles(++miles)} />

                            </span>
                            <p className="text-uppercase" style={{fontWeight:'bold'}}>Miles willing to travel</p>
                        </div>
                    </div>
                    <p className="text-muted medium py-2 font-ssmall">We use your address to confirm your account. We will not share it with any families or any third party organizations</p>
                </Col>
            </Row>



        </Form.Group>

        <Form.Group className="w-100 d-flex footer-thing">

            <Button variant="flat" type="button" className="p-2 w-25 ml-auto" onClick={() => setStep(--step)}>
                &lt; Back
</Button>
            <Button variant="flat" type="submit" className="btn-flat2 w-25 p-2 mx-3"
            //  onClick={() => setStep(++step)}
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