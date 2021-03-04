export const Styles = ({ step, stage }) =>

(
  <style type="text/css">
    {`
.page-slider {
background-image: url('${process.env.PUBLIC_URL + `/assets/icons/sidepanel${stage === 1 ? "" : stage === 2 ? "2" : stage === 3 ? "3" : "4"}.png`}');
background-repeat: no-repeat;
height: 100vh;
background-color: white;
display:flex;
}

.page-slider1 {
  
  background-repeat: no-repeat;
  height: 100vh;
  background-color: white;
  display:flex;
  }
.slider > div{
  height:100vh;
}
.head-div{
  margin: 0;
padding-bottom: 7px;
position: relative;
border-bottom: 2px solid grey;
}
.head-div:before {
position: absolute;
background: #a2deed;
height: 3px;
content: '';
width: ${
      stage === 1
        ? step === 1
          ? "20%"
          : step === 2
          ? "40%"
          : step === 3
          ? "60%"
          : step === 4
          ? "80%"
          : "100%"
        : stage === 2
        ? step === 1
          ? `${(1 / 8) * 100}%`
          : step === 2
          ? `${(2 / 8) * 100}%`
          : step === 3
          ? `${(3 / 8) * 100}%`
          : step === 4
          ? `${(4 / 8) * 100}%`
          : step === 5
          ? `${(5 / 8) * 100}%`
          : step === 6
          ? `${(6 / 8) * 100}%`
          : step === 7
          ? `${(7 / 8) * 100}%`
          : "100%"
        : stage === 3
        ? step === 1
          ? `${(1 / 3) * 100}%`
          : step === 2
          ? `${(1 / 2) * 100}%`
          : "100%"
        : "100%"
    };
bottom: -2px;
left: 0;
}
.w-20{
width: 20%;
}
.w-40{
width: 40%;
}
.w-60{
  width:60%
}

.andar button{
width:100%;
padding:.8rem 1rem
}
.for-button{
padding:.8rem 1rem!important
}
.gender-active{
border:2px solid #a2deed!important;
}
.gender{
padding: .8rem;
width: 40%;
text-align: center;
}
.btn-flat2 {
background-color: #28ace2;
color: white;
     }
.btn-flat2:hover {
background-color: #28ace280;
color: white;
}
.blowtxt{
color: grey;
font-size: 14px;
padding: 1rem;
}

.gmaps{
  background-image: url(${process.env.PUBLIC_URL + "/assets/icons/gmaps.png"});
  background-repeat: no-repeat;
height: 25vh;
background-color: white;
display:flex;
align-items:center;
justify-content:center;
background-size: 100%;
}
.OR{
  width: 15%;
  text-align: center;
  border-bottom: 1px solid #b5b5b5;
  line-height: 0.1em;
  margin: 10px 12px 25px;
}
.OR span { 
  padding:0 10px; 
}
.btn-flat1 {
  background-color: white;
  border:1px solid #28ace2;
  color: black;
       }
  .btn-flat1:hover {
  background-color: #a2deed;
  color: white;
       }

       #photo_id{
        width: 150px;
        height: 150px;
        border-radius: 300px;
       }
`}
  </style>
);
