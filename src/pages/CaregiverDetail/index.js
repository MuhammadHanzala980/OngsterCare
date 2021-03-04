import React from "react";
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col, Button } from 'react-bootstrap';
import StandardSelect from "../../components/standardSelect";
import { Header } from '../../components/header2';
import { Footer } from '../../components/footer';
import { Bio, Reviews, Availability, Experience, Safety, Education, Skill, Payment } from './details'
import { useDispatch, useSelector } from 'react-redux'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { user } from '../../redux/actions/dataAction';

import {
    Tabs,
    Tab,
    TextField,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: 13
    },
    tabs: {
        '& button': {
            padding: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "0 3px" : 0,
            fontSize: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "xx-small" : "small",
            // color: "#28ace2",
            outline: "none",
        },
        width: "100%",
        border: "1px solid silver"
    },

}));



export const CaregiverDetail = ({ match: { params: { id } } }) => {
    const classes = useStyles();
    const history = useHistory();
    const dataState = useSelector(state => state.getDataReducer.data);
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState({
        "Have a Car": { value: false, name: "haveCar" },
        "Non-Smoker": { value: false, name: "nonSmoker" },
        "Comfortable with Pets": { value: false, name: "comfortableWithPet" },
        "Accept Online Payment through OngsterCare.com": { value: false, name: "onlinePayment" },
        "Accept Profesional Payment": { value: false, name: "professionalPayment" },

    })
    const [caregiver, setCaregiver] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        let updatedOptions = { ...options };
        (async _ => {
            try {
                const respJSON = await fetch(`https://api.ongstercare.com/get-caregiver-detail`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        userId: id
                    })
                });
                const resp = await respJSON.json();
                if (resp.data) {
                    setCaregiver(resp.data);
                    for(let key in updatedOptions) {
                        updatedOptions[key].value = !!resp.data[0].bioData[updatedOptions[key].name];
                    }
                    setOptions(updatedOptions);
                }

            } catch (err) {
                console.log('caregiverDetail-->useEffect', err);
            }
        })()

    }, []);

    return (
        <div>
            <Header handleOpen={handleOpen} />
            <Row className="border border-silver p-3" >
                <Container>
                    <Row className="align-items-center">
                        <p className="">Home</p> <DoubleArrowIcon className="blue-text" classes={{ root: classes.root }} />
                        <p>Child Care</p> <DoubleArrowIcon className="blue-text" classes={{ root: classes.root }} /> <p> Search Results</p>
                        <DoubleArrowIcon className="blue-text" classes={{ root: classes.root }} /> <p> {caregiver && `${caregiver[0].bioData.firstName} ${caregiver[0].bioData.middleName} ${caregiver[0].bioData.lastname}`}</p>
                    </Row>
                </Container>
            </Row>

            <Container>
                <Row className="p-2">
                    {caregiver && <Col xs={12} md={3}>
                        <div className="position-relative">


                            <IconButton aria-label="add to favorites" style={{ outline: "none", position: "absolute", outline: "none", right: 10 }}>
                                <FavoriteIcon />
                            </IconButton>


                            <span style={{ width: 247, height: 220 }}>

                                <img src={!!caregiver[0].bioData.image ? `https://api.ongstercare.com${caregiver[0].bioData.image}` : `${process.env.PUBLIC_URL}/assets/icons/no-img.png`} alt="" className="w-100" />
                            </span>

                            <img src={process.env.PUBLIC_URL + "/assets/icons/shield(1).png"} alt="" className="position-absolute" style={{ left: "12%", bottom: 10 }} />
                            <img src={process.env.PUBLIC_URL + "/assets/icons/gem.png"} alt="" className="position-absolute" style={{ left: "32%", bottom: 10 }} />
                            <img src={process.env.PUBLIC_URL + "/assets/icons/Group 391.png"} alt="" className="position-absolute" style={{ left: "55%", bottom: 10 }} />
                            <img src={process.env.PUBLIC_URL + "/assets/icons/noun_Check_1219089.png"} alt="" className="position-absolute" style={{ left: "75%", bottom: 10 }} />


                        </div>

                        <div>
                            <div className="d-flex justify-content-between">
                                <p style={{ fontSize: 18 }}>{caregiver[0].bioData.firstName} {caregiver[0].bioData.middleName} {caregiver[0].bioData.lastname} <span className="small text-muted">4 hr ago</span> </p>
                            </div>
                            <p className="blue-text">{caregiver[0].bioData.hourlyRate.min} - {caregiver[0].bioData.hourlyRate.max} hr</p>
                            <hr />
                            <p>New York,NY</p>
                            <p>22 Yr Old <span>.</span> {caregiver[0].bioData.experience} Experience  </p>
                            <hr />
                        </div>
                        <div className="">
                            <Button variant="flat" className="w-100" onClick={_ => history.push('/chat')}>
                                <img src={process.env.PUBLIC_URL + "/assets/icons/chat.png"} alt="" />
                                Message
                    </Button>
                        </div>

                        <div>
                            {
                                Object.keys(options).map((v, i) => {
                                    return <p key={i} className=' gender w-100 my-2' style={{ textAlign: "inherit" }} /*onClick={(e) => handleOptions(v)}*/>
                                        {options[v].value ? <img src={process.env.PUBLIC_URL + "/assets/icons/bluecheck.png"} alt="" /> :
                                            <img src={process.env.PUBLIC_URL + "/assets/icons/grey.png"} alt="" />} {v}
                                    </p>

                                })
                            }
                        </div>
                    </Col>}
                    <Col xs={12} md={9} className="position-relative">
                        <Tabs
                            value={value}
                            className={classes.tabs}
                            onChange={handleChange}
                            variant="scrollable"
                            TabIndicatorProps={{ backgroundColor: "white" }}
                        >
                            <Tab label="Bio" />
                            <Tab label="Reviews" />
                            <Tab label="Availability" />
                            <Tab label="Experience" />
                            <Tab label="Safety" />
                            <Tab label="Education" />
                            <Tab label="Skill" />
                            <Tab label="Payment" />
                        </Tabs>

                        { caregiver &&
                           (value === 0 ? <Bio bioData={caregiver[0].bioData} /> :
                                value === 1 ?
                                    <Reviews /> :
                                    value === 2 ?
                                        <Availability availability={caregiver[1].availability} /> :
                                        value === 3 ?
                                            <Experience options={options} /> :
                                            value === 4 ?
                                                <Safety /> :
                                                value === 5 ?
                                                    <Education education={caregiver[2].education} /> :
                                                    value === 6 ?
                                                        <Skill language={caregiver[3].language} /> :
                                                        value === 7 ?
                                                            <Payment /> :
                                                            <></>)
                        }



                    </Col>
                </Row>
            </Container>


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