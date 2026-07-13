import { useState } from "react"
import "./Product.css"
import img1 from "./assets/car1.jpg"
import img2 from "./assets/car2.jpg"
import img3 from "./assets/car3.jpg"
import img4 from "./assets/car4.jpg"
function Product() {
    const [img, setimg] = useState(img1)
   
    return (
        <>
            <div>
                <img src={img} alt="" className="image"onClick={() => setimg(img1)}/>
            </div>
            <img src={img1} alt="Car1" className="imge" onClick={() => setimg(img1)}/>

            <img src={img2} alt="Car2" className="imge" onClick={() => setimg(img2)}/>

            <img src={img3} alt="Car3" className="imge" onClick={() => setimg(img3)}/>

            <img src={img4} alt="Car4" className="imge" onClick={() => setimg(img4)} />

        </>

    );
}
export default Product