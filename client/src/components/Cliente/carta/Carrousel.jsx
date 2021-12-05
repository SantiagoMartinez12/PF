import banner1 from "../../../assets/banners1.jpg";
import banner2 from "../../../assets/banners2.jpg";
import banner3 from "../../../assets/banners3.jpg";
import {Carousel} from 'react-bootstrap';

export default function Carrousel(){
    return<div>
      <Carousel>
     <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 rounded"
      src={banner1}
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 rounded"
      src={banner2}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 rounded"
      src={banner3}
    />
  </Carousel.Item>
</Carousel> 
  <br/>
    </div>
}