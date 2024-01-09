/* import { HiInformationCircle } from 'react-icons/hi'; */


export default function Alert(props) {

  const alertMessage = props.alertMessage;
  const Icon = props.icon; // capital letter since it is a component! Is it bad to send a component this way?

  const styles = {
    // some default styles...
    display: "flex", /* not sure why but flex makes the span container extend far outside the screen width?*/
    backgroundColor: props.bgColor, // PROP!
    gap: "10px",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px"
  }

  return (
    <>
     {/*  <span>
      <HiInformationCircle style= { {height: 25, width: 25}}/>
        {alertMessage}
      </span> */}

      {/* why span? */}
      <span style={styles}>
      {/* <Icon style={{height: 25, width: 25 }}/> */}
        
        <Icon/>
        {alertMessage}
      </span>
    </>
  )

}