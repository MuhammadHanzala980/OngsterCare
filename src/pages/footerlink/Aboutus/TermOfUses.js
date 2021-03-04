// import React , {useState} from "react";
// import { Header } from "../../../components/header2";
// import { Footer } from "../../../components/footer";
// export default function TermOfUses() {
// const [open, setOpen] = useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   return (
//     <div>
//       <Header handleOpen={handleOpen} />
//       <h1   style={{textAlign: 'center',marginTop:50 , border:"3px solid black"  , backgroundColor:'lightblue'}}>Terms of Use</h1>
      
//       <div style={{marginTop:"20%"}}>
//       <Footer/>
//       </div>
     
//     </div>
//   );
// }



import React , {useState} from "react";
// import { Header } from "../../../components/header2";
import { Header } from '../../../components/header';
import { Header as Header2 } from '../../../components/header2';
import { Footer } from "../../../components/footer";
import TraModal from '../../../components/Models/popup';
import { useDispatch, useSelector } from 'react-redux'
export default function TermOfUses({ careSeeker, setCareSeeker }) {
  const [open, setOpen] = React.useState(false);
// const [careSeeker , setCareSeeker]=useState(true);
const user = useSelector(state => state.getDataReducer.user);
const handleOpen = () => {
  setOpen(true);
};
  return (
    <div>
      {/* <Header handleOpen={handleOpen} /> */}

      {user ? <Header2 /> : <Header handleOpen={handleOpen} setCareSeeker={setCareSeeker} />}
      <h1  style={{textAlign: 'center' , border:"3px solid black"  , backgroundColor:'lightblue' , marginTop:50}}>Terms of use</h1>
      <div style={{marginTop:"20%"}}>
      <Footer/>
      <TraModal open={open} setOpen={setOpen} setCareSeeker={setCareSeeker} />
      </div>
     
    </div>
  );
}
