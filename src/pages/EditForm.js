import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import { Link } from "react-router-dom";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 13
    },

}));



export const EditForm = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    let [countChild, setCountChild] = React.useState(1)
    let [countPet, setCountPet] = React.useState(1)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
            <Header handleOpen={handleOpen} />
            <Row className="border border-silver p-3" >
                <Container>
                    <Row className="align-items-center">
                        <p className="">My Care.com</p> <DoubleArrowIcon className="blue-text" classes={{ root: classes.root }} />
                        <p>My Profile</p> <DoubleArrowIcon className="blue-text" classes={{ root: classes.root }} /> <p className="blue-text"> Edit Profile</p>
                    </Row>
                </Container>
            </Row>

            <Row>
                <Col xs={12}>
                    <p className="p-3 h5 text-center" style={{ backgroundColor: "#F2F5F7" }}>Edit Your Profile</p>
                </Col>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className="m-2">
                    <form>
                        <Form.Group controlId="" className="my-3">
                            <Form.Label className="text-dark ">
                                Family Bio</Form.Label>
                            <FormControl required as="textarea" aria-label="With textarea" placeholder="Get noticed by the right caregivers - add details 
about your family’s needs and interests." rows={4} />
                        </Form.Group>
                        <Form.Group controlId="" className="my-3">
                            <Form.Label className="text-dark">
                                Care needs <span className="text-muted">(Select Multiple)</span></Form.Label>
                            <div className="d-flex flex-wrap">

                                {[{ name: "Child care" }, { name: "Special needs " }, { name: "Senior care " }, { name: "Tutoring & lessons" }, { name: "Pet care " }, { name: "Errands & odd jobs" },]
                                    .map((val, i) => <p key={i} className={`${i === 0 && "gender-active"}` + ' border border-silver gender mr-2 my-2 p-3 px-2'} // onClick={(e) => setFormData({ ...formData, "language": val.id })}
                                    >{val.name}</p>)}
                            </div>
                        </Form.Group>

                        <Form.Group controlId="" className="w-100">
                            <Form.Label className="text-muted">Number of children including children you are expecting</Form.Label>
                            <p className="p-3 d-flex justify-content-between border border-silver align-items-center">
                                <img src={process.env.PUBLIC_URL + "/assets/icons/minus.png"} width="18" alt="" onClick={() => countChild > 1 && setCountChild(--countChild)} /> {countChild} Child
                    <img src={process.env.PUBLIC_URL + "/assets/icons/plus.png"} alt="" height="15" onClick={() => countChild < 4 && setCountChild(++countChild)} /> </p>
                        </Form.Group>
                        <Form.Group controlId="" className="w-100">
                            <Form.Label className="text-muted">Number of Pets</Form.Label>
                            <p className="p-3 d-flex justify-content-between border border-silver align-items-center">
                                <img src={process.env.PUBLIC_URL + "/assets/icons/minus.png"} width="18" alt="" onClick={() => countPet > 1 && setCountPet(--countPet)} /> {countPet} Pets
                    <img src={process.env.PUBLIC_URL + "/assets/icons/plus.png"} alt="" height="15" onClick={() => countPet < 4 && setCountPet(++countPet)} /> </p>
                        </Form.Group>



                        <Form.Group controlId="" className="my-3">
                            <Form.Label className="text-dark">
                                Caregiver preferences <span className="text-muted">(Select Multiple)</span></Form.Label>
                            <div className="d-flex flex-wrap">

                                {[{ name: "Comfortable with pets " }, { name: "Non-Smoker " }, { name: "Has transportation" }]
                                    .map((val, i) => <p key={i} className={`${i === 0 && "gender-active"}` + ' border border-silver gender mr-2 my-2 p-3 px-2'} // onClick={(e) => setFormData({ ...formData, "language": val.id })}
                                    >{val.name}</p>)}
                            </div>
                        </Form.Group>


                        <Form.Group controlId="" className="my-3">
                            <Form.Label className="text-dark">
                                Payment preferences <span className="text-muted">(Select Multiple)</span></Form.Label>
                            <div className="d-flex flex-wrap">

                                {[{ name: "Payments via OngsterCare.com " }, { name: "Check" }, { name: "Payroll Service " }, { name: "Cash" }]
                                    .map((val, i) => <p key={i} className={`${i === 0 && "gender-active"}` + ' border border-silver gender mr-2 my-2 p-3 px-2'} // onClick={(e) => setFormData({ ...formData, "language": val.id })}
                                    >{val.name}</p>)}
                            </div>
                        </Form.Group>


                        <Form.Group controlId="" className="my-3">
                            <Form.Label className="text-dark">
                                Are you or your spouse a member of the military?</Form.Label>
                            <div className="d-flex flex-wrap">

                                {[{ name: "Yes" }, { name: "No" }]
                                    .map((val, i) => <p key={i} className={`${i === 0 && "gender-active"}` + ' border border-silver gender mr-2 my-2 p-3 px-5 '} // onClick={(e) => setFormData({ ...formData, "language": val.id })}
                                    >{val.name}</p>)}
                            </div>
                        </Form.Group>

                        <Form.Group className="w-100 d-flex">
                            <p type="button" className="p-2 w-25 ml-auto text-center" >
                                <Link to="/edit-profile">
                                    &lt; Back
                            </Link>
                            </p>
                            <Button variant="flat" type="submit" className="p-2 mx-3 w-25"
                            // onClick={handleStep}
                            // disabled={loading || !profileImage}
                            >
                                Save
</Button>

                        </Form.Group>
                    </form>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>





            <Footer />



            <style type="text/css">
                {`
                       .btn-flat1 {
                        background-color: white;
                        border:1px solid #a2deed;
                        color: black;
                             }
                        .btn-flat1:hover {
                        background-color: #a2deed;
                        color: white;
                             }      
                       .btn-flat2 {
                        background-color: white;
                        border:1px solid #FC3480;
                        color: black;
                             }
                        .btn-flat2:hover {
                        background-color: #FC3480;
                        color: white;
                             }  
                             .MuiTab-textColorInherit.Mui-selected{
                                color:#28ace2
                             }   
                            .MuiButtonBase-root.MuiTabScrollButton-root.MuiTabs-scrollButtons.MuiTabs-scrollButtonsDesktop.Mui-disabled{
                                display:none
                            } 
                `}
            </style>
        </div >
    )
}