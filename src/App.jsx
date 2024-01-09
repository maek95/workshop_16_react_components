import './App.css'
import Title from './Title'
import Button from './Buttons'
import Alert from './Alert'
import Badge from './Badges'
import Card from './Cards'
import { HiInformationCircle } from 'react-icons/hi';
import { MdBusAlert } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { MdTaxiAlert } from "react-icons/md";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { BsBadgeHd } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";


export default function App() {

 /*  const props = {
    size: { width: '40px', height: '10x'}
  } */

  return (
    <>
    {/* <h2>Buttons</h2> */}

    <Title title="Buttons"></Title> 

    <div>
      <Button title="Button"></Button>
      <Button disabled={true}></Button>
      <Button color="blue"></Button>
      <Button color="red" size={{ height: '30px', width: '100px' }}></Button>
      <Button title="big disabled button" disabled={true} size={{ height: '50px', width: '100px' }}></Button>
    </div>

    <Title title="Alerts"></Title> 
    <div>
      <Alert alertMessage="Information!" icon={HiInformationCircle} bgColor="lightblue">
      </Alert>
      <Alert alertMessage="Bus!" icon={MdBusAlert} bgColor="lightgreen">
      </Alert>
      <Alert alertMessage="Triangle!" icon={FiAlertTriangle} bgColor="lightpink">
      </Alert>
      <Alert alertMessage="Taxi!" icon={MdTaxiAlert} bgColor="lightgray">
      </Alert>
    </div>
      
    <Title title="Badges"></Title> 
    <div>
      <Badge badgeName="News" badgeIcon={BiSolidBadgeCheck} badgeColor="green"></Badge>
      <Badge badgeName="Television" badgeIcon={BsBadgeHd} badgeColor="red"></Badge>
      <Badge badgeName="GitHub" badgeIcon={DiGithubBadge} badgeColor="gray"></Badge>
    </div>
    
    <Title title="Card"></Title> 
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <Card href="https://www.flowbite-react.com/docs/components/card#card-with-image" imgAlt="image 1" imgSrc="src\assets\card-image-1.jpg">
        <h3>Title</h3>
        <p>Text</p>
      </Card>

      <Card href="https://www.flowbite-react.com/docs/components/card#card-with-image" imgAlt="image 2" imgSrc="src\assets\card-image-2.jpg" >
        <h3>Below I imported my Badge component!</h3>
        <Badge badgeName="Badge" badgeIcon={BiSolidBadgeCheck} badgeColor="red"></Badge>
      </Card>

      <Card href="https://www.flowbite-react.com/docs/components/card#card-with-image" imgAlt="image 3" imgSrc="src\assets\card-image-3.png">
        <h3>Below I imported my Button component!</h3>
        <Button title="Button" color="red"></Button>
      </Card>

      <Card href="https://www.flowbite-react.com/docs/components/card#card-with-image" imgAlt="test no img link" imgSrc="test no link">
        <h3>Below I imported my Alert component!</h3>
        <Alert alertMessage="Information!" icon={HiInformationCircle} bgColor="lightblue">
      </Alert>
      </Card>
    </div>

    </>
  )
}


