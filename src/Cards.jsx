export default function Card(props) {

  
  const { imgSrc, imgAlt, children, href} = props;

  /* children is just everything inside the <Card></Card> */ 
  
  return (
    <>

      <div style={{width: "250px", outline: "solid", boxShadow: "0 4px 8px 0 rgba(0,0,0,1)"}}>
          <img style={{width: "100%", maxHeight: "180px", objectFit: "cover"}} src={imgSrc} alt={imgAlt} /> {/* objectFit so we cut the image instead of rescaling it on the height */}
        
        <div style={{padding: "10px"}}>
          {children} 

        </div>
        <div style={{padding: "10px"}} >
         <a href={href}>Link</a>

        </div>
      </div>
    </>
  )
}