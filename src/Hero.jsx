import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Sofie from '../public/sofie.png'
import { FaFacebook, FaKissBeam, FaKiss } from 'react-icons/fa'
import Dylan from '../public/Dylan.png'
import Mila from '../public/Mila.png'


const Hero = () => {
    
  return (

       <Container>
     
      <Row>


      <Col>
      <div className='Heading'>
      <br/><br/>
      <div className='cards1'>
      <div className='cardinner1'>
      <h1 className='txt'> ENDLESS STORY</h1>
      </div>
</div>

      <h1> Everything started in this neighborhood</h1>
      <p> We've got this same blood in our viens, and we'll be brothers untill death <br/> will tear us apart, and this is cause
      nobody could ever separate us.</p>
      </div>

      </Col>

      </Row>


      <br/>
<Row>
<Col>

{/* first card */}
    <div className='cards'>
      <div className='cardinner'>

      <img src={Sofie} alt='' className='img'/>
      <br/>
        <h6> Sofie Allure</h6>
        <h3> MANAGING PARTNER</h3>

        <h2> <FaFacebook className='social'/>  At Facebook since 2016</h2>
         <h2> <FaKiss className='sociall'/>  Outdors lover</h2>
         <h2> <FaKissBeam className='socialy'/>  Super friendly support team</h2>
      </div>
    </div>
    </Col>

    {/* second cards */}
    <Col>
    <div className='cards'>
      <div className='cardinner'>

      <img src={Dylan} alt='' className='img'/>
      <br/>
        <h6> Dulan Wyatt</h6>
        <h3> TEAM LEAD</h3>

        <h2> <FaFacebook className='social'/>  Dedicated entrepreneur</h2>
         <h2> <FaKiss className='sociall'/>  Urban exploration</h2>
         <h2> <FaKissBeam className='socialy'/>  Able to get good at everything</h2>
      </div>
    </div>
    </Col>

 {/* third cards */}
 <Col>
    <div className='cards'>
      <div className='cardinner'>

      <img src={Mila} alt='' className='img'/>
      <br/>
        <h6> Mila Skylar</h6>
        <h3> CONTENT CREATOR </h3>

        <h2> <FaFacebook className='social'/>  High quality publication</h2>
         <h2> <FaKiss className='sociall'/>  Storytelling</h2>
         <h2> <FaKissBeam className='socialy'/>  Master of words qualification</h2>
      </div>
    </div>
    </Col>

</Row>


















       </Container>




  )
}

export default Hero


