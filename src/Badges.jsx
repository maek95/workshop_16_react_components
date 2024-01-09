
export default function Badge(props) {
/*   const badgeName = props.badgeName; 
  const badgeNum = props.badgeNum;  
  const badgeNumBg = props.badgeNumBg; */

  // the following is good practice since it is easy to add default values if we want...
  const {badgeName, badgeColor = "gray"} = props;

  const Badgeicon = props.badgeIcon; // cant import along with all the other props...?

  return (
    <>
        <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
          
          {badgeName} 
          {/* inline block so we can edit the size of the span "container" */}
          <Badgeicon style={{color: badgeColor}}/>
          
          {/* <span style={{backgroundColor: badgeNumBg, borderRadius: "50%", display: "inline-block", paddingRight: "8px", paddingLeft: "8px", marginLeft: "8px" }}>6</span> */}
        </div>      
    </>
  )
}