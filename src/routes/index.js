import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import JobPost from "../pages/AccountSettings/JobPost/Post-job";
import { Home, JoinUs, AllInfo, BestMatch, Caregiver, CaregiverDetail, EditProfile, Job, Chat, EditForm, GoPremium, ApplicantDetail, AccountSettings, Safety } from "../pages";
import Carrer from "../pages/footerlink/Aboutus/Carrer";
import TermOfUses from "../pages/footerlink/Aboutus/TermOfUses";
import Privacy from "../pages/footerlink/Aboutus/Privacy";
import CA_Privacy from "../pages/footerlink/Aboutus/CA_privacy";
import Saftey from "../pages/footerlink/Get help/Saftey";
import Help from "../pages/footerlink/Get help/Help";
import HomePay from "../pages/footerlink/Diccovers/Homepay";
import Businees from "../pages/footerlink/Diccovers/businees";
import Benefits from "../pages/footerlink/Diccovers/Benefits";
import Affilates from "../pages/footerlink/Diccovers/BecomeAffliate";
import CareDictnoary from "../pages/footerlink/Diccovers/CareDictnoary";
import { SignUp } from "../pages/SignUp/SignUp";
// import HelpDesk from '../screens/HelpDesk';
import Varification from "../pages/Varification/Varification";
import CompanionOneTime from "../pages/AccountSettings/JobPost/CompanionOneTime/CompanionOneTime";
import PrivateRoute from "../components/PrivateRoute";

const Routers = () => {
  const [careSeeker, setCareSeeker] = React.useState(false);

  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          {/* use route instead of privateroute till best-match to last */}
          <Route exact path="/" component={() => <Home careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/join-us" component={() => <JoinUs careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/all-info" component={AllInfo} />
          <Route exact path="/best-match" component={BestMatch} />
          <Route exact path="/caregiver" component={Caregiver} />
          <Route exact path="/caregiver-detail/:id" component={CaregiverDetail} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/job" component={Job} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/edit-form" component={EditForm} />
          <Route exact path="/gopremium" component={GoPremium} />
          <Route exact path="/applicant-detail" component={ApplicantDetail} />
          <Route exact path="/account-settings" component={AccountSettings} />
          <Route exact path="/safety" component={() => <Safety careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />

          {/* component={() => <Carrer careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} */}

          <Route exact path="/career" component={() => <Carrer careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/termOfUses" component={() => <TermOfUses careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/privacy" component={() => <Privacy careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/cA_Privacy" component={() => <CA_Privacy careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/saftey" component={() => <Saftey careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/help" component={() => <Help careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />

          <Route exact path="/homePay" component={() => <HomePay careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/businees" component={() => <Businees careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/Benefits" component={() => <Benefits careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/affilates" component={() => <Affilates careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />
          <Route exact path="/careDictnoary" component={() => <CareDictnoary careSeeker={careSeeker} setCareSeeker={setCareSeeker} />} />

          <Route exact path="/post-job" component={JobPost} />
          <Route exact path="/post-job/companion-one-time" component={CompanionOneTime} />

          {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
          <Route exact path="/auth/email_verify/:token" component={Varification} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Routers;
