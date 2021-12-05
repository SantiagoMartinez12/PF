import banner1 from "../../../assets/banners1.jpg";
import banner2 from "../../../assets/banners2.jpg";
import banner3 from "../../../assets/banners3.jpg";

export default function Carrousel(){
    return<div>
         <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
               <div class="carousel-item active">
               <img class="d-block w-100 rounded" src={banner1} alt="First slide"/>
             </div>
            <div class="carousel-item">
              <img class="d-block w-100 rounded" src={banner2}alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 rounded" src={banner3} alt="Third slide"/>
              </div>
             </div>
            </div>
        <br/>
    </div>
}