import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';
import StandardSelect from "../components/standardSelect";
import { Header } from '../components/header2';
import { Footer } from '../components/footer';
import {
    TextField,
    Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

}));



export const Caregiver = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(state => state.getDataReducer.user);
    const [open, setOpen] = React.useState(false);
    const [originalUserList, setOriginalUserList] = React.useState([]);
    const [searchUserList, setSearchUserList] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [dropDownOptions] = React.useState([
        {
            data: ['Date & Time'],
            key: 'dateTime'
        },
        {
            data: ['Experience', '1 year', '2 years', '3 years', '4 years', '5 years', '6 years', '7 years', '8 years', '9 years', '10 years'],
            key: 'experience'
        },
        {
            data: ['Preferences', "Laundary", "Light housekeeping", "Grocery shopping", "Errands", "Carpool", "Crafts", "Swimming Supervision", "Travel"],
            key: 'preferences'
        },
        {
            data: ['Education', "Some High School", "High school degree", "Some college", "College degree", "Some graduate school", "Graduate degree"],
            key: 'education'
        }
    ]);
    const [dropDown, setDropDown] = React.useState({
        category: "Child care",
        withIn: "5 miles"
    });

    const handleOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        (async _ => {
            try {
                const respJSON = await fetch(`https://api.ongstercare.com/filter-by-multiple`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        zip: user.zip || 1234,
                        rangeInMiles: 123
                    })
                });
                const resp = await respJSON.json();
                if (resp.data) {
                    setOriginalUserList(resp.data);
                    setSearchUserList(resp.data);
                }

            } catch (err) {
                console.log('caregivers-->useEffect', err);
            }
        })()
    }, [])

    const handleSearch = e => {
        e.preventDefault();
        setSearchUserList(originalUserList.filter(userVal => (userVal.firstname.toLowerCase().startsWith(searchTerm.toLowerCase()) || userVal.lastname.toLowerCase().startsWith(searchTerm.toLowerCase()))))
    };

    const handleDropDownChange = (e, key) => {
        let newObj = { ...dropDown, [key]: e.target.value };
        if (e.target.value === "Date & Time" || e.target.value === "Experience" || e.target.value === "Preferences" || e.target.value === "Education") {
            delete newObj[key];
        }
        setDropDown(newObj);

        (async _ => {
            try {
                const respJSON = await fetch(`https://api.ongstercare.com/filter-by-multiple`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        zip: user.zip || 1234,
                        rangeInMiles: newObj.withIn || 123,
                        // startDate: null,
                        // endDate: null,
                        experience: newObj.experience || null,
                        helpOption: newObj.preferences || null,
                        highestLevelAchieved: newObj.education || null
                    })
                });
                const resp = await respJSON.json();
                if (resp.data) {
                    setSearchUserList(resp.data);
                }
                else {
                    alert(resp.message);
                }

            } catch (err) {
                console.log('caregivers-->useEffect', err);
            }
        })()
    }

    return (
        <div>
            <Header handleOpen={handleOpen} />
            <Row className="bg-light">
                <Col xs={12}>
                    <div className="d-flex">
                        <div className={`d-flex mx-auto my-2 bg-white p-2 align-items-center ${/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'w-100' : 'w-50'}`}>
                            <div className="pl-3">
                                <p className="small text-muted">Near</p>
                                <Typography variant="body1" display="inline" >11098</Typography> <span className="ml-4 border border-top-0 border-bottom-0 border-left-0 border-silver"></span>
                            </div>
                            <span className="w-100">
                                <StandardSelect value={dropDown.category} onChange={e => handleDropDownChange(e, 'category')} label="Category" dropOptions={["Child care", "Special needs", "Senior care ", "Tutoring & lessons", "Pet care ", "Errands & odd jobs"]} />
                            </span>
                            <span className="px-3">
                                <StandardSelect value={dropDown.withIn} onChange={e => handleDropDownChange(e, 'withIn')} label="Within" dropOptions={['5 miles', '10 miles', '15 miles', '20 miles', '25 miles', '30 miles']} />
                            </span>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row className=" border border-silver border-right-0 border-left-0 border-top-0">
                <Container>
                    <Row >
                        {dropDownOptions.map(val => {
                            return <div  style={{  padding: '0 1rem' }} className={`${/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'w-30' : 'w-30'}`}>
                                <StandardSelect value={dropDown[val.key] || val.data[0]} onChange={e => handleDropDownChange(e, val.key)} label={''} dropOptions={val.data} noMargin />
                            </div>
                        })}

                        <div style={{ width: "14.2857%" }}>
                            <form noValidate onSubmit={handleSearch} autoComplete="off" className="position-relative pl-3">
                                <TextField label="Keyword" variant="standard" value={searchTerm} size="small" onChange={e => setSearchTerm(e.target.value)} InputProps={{
                                    disableUnderline: true
                                }} />
                                <IconButton type="submit" style={{ outline: "none", position: "absolute", bottom: -5, right: 25 }}>
                                    <SearchIcon fontSize="medium" className="searchIcon" style={{ color: '#28ACE2' }} />
                                </IconButton>
                            </form>
                        </div>

                    </Row>



                </Container>
            </Row>

            <Row>

                <Col xs={12} className="d-flex justify-content-center">

                    <div className="d-flex justify-content-between result-found border border-dark border-left-0 border-right-0 border-top-0">
                        <p>{searchTerm ? searchUserList.length : originalUserList.length} RESULTS FOUND</p> <p>Sort By : <span className="blue-text">Distance <ExpandMoreIcon /></span> </p>
                    </div>

                </Col>
                {(!!originalUserList.length || !!searchUserList.length) &&
                    ((searchTerm || Object.keys(dropDown).length > 2) ? searchUserList : originalUserList).map((val, i) => {
                        return (
                            <Col key={i} xs={12}  className="d-flex box-height justify-content-center cursor-pointer">
                                <div className="d-flex   justify-content-between result-found pb-3 border border-silver border-right-0 border-left-0 border-top-0">
                                    <div className="position-relative d-flex justify-content-center" onClick={_ => history.push(`/caregiver-detail/${val.userId}`)}>
                                        <img src={!!val.image ? `https://api.ongstercare.com${val.image}` : `${process.env.PUBLIC_URL}/assets/icons/no-img.png`} alt="" width="180" height="200" />
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/Group 89.png"} alt="" className="premium-btn premium-center" />
                                    </div>
                                    <div className="p-2 mb position-relative">
                                        <p onClick={_ => history.push(`/caregiver-detail/${val.userId}`)} style={{ fontSize: 18 }}>{val.firstname} {val.lastname} <span className="small">New York,NY</span> </p>
                                        <p>Part Time &nbsp;&nbsp; 22 Yr Old &nbsp;&nbsp; {val.experience} Exp</p>
                                        <p className="text-muted ">I am a charismatic person who is always up for a
new challenge, with a love for both children…</p>
                                        <p className="blue-text mb2 d-flex justify-content-between align-items-center position-absolute w-100" style={{ fontSize: 18 }}>{val.hourlyRate.min}-{val.hourlyRate.max} per hour
                                            <div classNmae="ml-auto">

                                                <IconButton aria-label="add to favorites" style={{ outline: "none" }}>
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <IconButton onClick={_ => history.push('/chat')} aria-label="chat message" style={{ outline: "none" }}>
                                                    <img src={process.env.PUBLIC_URL + "/assets/icons/message_circle.png"} alt="" width="50" height="50" />
                                                </IconButton>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </Col>

                        )
                    })
                }

                {/* <Col xs={12} className="d-flex justify-content-center">
                    <div className="d-flex justify-content-between w-25 p-3">
                        <p className="blue-text"> 1 </p>
                        <p className="text-muted"> 2 </p>
                        <p className="text-muted"> 3 </p>
                        <p className="text-muted"> 4 </p>
                        <p className="text-muted"> 5 </p>
                        <NavigateNextIcon />
                    </div>
                </Col> */}
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

                             
                             
                `}
            </style>
        </div >
    )
}