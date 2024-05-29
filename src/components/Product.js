import one from "../assets/images/one.jpg";
import two from "../assets/images/two.jpg";
import three from "../assets/images/three.jpg";


// product component
function Product(){
    return(
        <div className="products">
            <div className="box">
            <img src={one} alt="Fogg Wood Extreme Perfume" />
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div className="box">
            <img src={two} alt="Fogg Wood Extreme Perfume" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
            <img src={three} alt="Designer Club-Be Spoke Perfume" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
            
        </div>
    )
}

export default Product;