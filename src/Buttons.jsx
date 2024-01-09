
export default function Button(props) {
  

  // NOTE: I need default values for height and width otherwise there is an error when giving buttons a height and width????
  const { title = "defaultTitle", color,  size = { height: 'auto', width: 'auto' }, disabled = false } = props; // disabled = false is unneccesary as a default value... 

  const styles = {
    width: size.width,
    height: size.height,
    color: color
  }

  return (
    <>
      {/* <button disabled={disabled} style={ { width: size.width, height: size.height}}>{title}</button> */}
      <button disabled={disabled} style={styles}>{title}</button>
    </>
  )
}