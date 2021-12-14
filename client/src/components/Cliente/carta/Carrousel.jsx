import banner1 from "../../../assets/banners1.jpg";
import banner2 from "../../../assets/banners2.jpg";
import banner3 from "../../../assets/banners3.jpg";
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from "react";
import serverFinder from "../../../store/deploy/serverFinder";
import axios from "axios";
import { useParams } from 'react-router';


export default function Carrousel() {
  const { idResto } = useParams()

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios.get(serverFinder(`banner/${idResto}`))
      .then((json) => {
        setDatos(json.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  return <div>
    {datos[0] ?
    <Carousel>
      {datos.map(el => { 
          return <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 rounded"
              src={el.image}
              alt='banner'
            />
          </Carousel.Item>
      })}
      </Carousel>
      :
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 rounded"
            src={banner1}
            alt='banner'
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded"
            src={banner2}
            alt='banner'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner3}
            alt='banner'
          />
        </Carousel.Item>
      </Carousel>
    }
    <br />
  </div>
}