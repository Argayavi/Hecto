import "./GridView.css"
import image1 from "./Images/image1.png"
import image2 from "./Images/image2.png"
import image3 from "./Images/image3.png"
import image4 from "./Images/image4.png"
import image5 from "./Images/image5.png"
import image6 from "./Images/image6.png"
import image7 from "./Images/image7.png"
import image8 from "./Images/image8.png"
import image9 from "./Images/image9.png"
import image10 from "./Images/image10.png"
import image11 from "./Images/image11.png"
import image12 from "./Images/image12.png"
import Ellipse28 from "./Images/Ellipse28.png"
import Ellipse29 from "./Images/Ellipse29.png"
import Ellipse30 from "./Images/Ellipse30.png"
function GridView() {
    return<>
    
    <div className="GridView">
<div className="row1"> 
<div className="row1_1">
<div className="row1_image1">
<img src={image1} /></div>
<div className="row1_text"> 
<label> Vel elit euismod</label></div>
<div className="row1_button"> 
<button><img src={Ellipse28} /> </button>
<button><img src={Ellipse29} /></button>
<button><img src={Ellipse30} /> </button></div>
<div className="row1_text2"> 
<label> $26.00 $42.00</label></div></div>

</div>


<div className="row2"> </div>
<div className="row3"> </div>
</div>
    
    </>
}
export default GridView;