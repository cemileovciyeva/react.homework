import "./Gallery.css"
export const Gallery = () => {
    return(
        <section className="sixth">
        <div className="gallery">
          <div className="galleryOne">
            <img src="./images/Image (7).png" alt=""/>
            <div className="span"><span>Organic Juice</span></div> 
          </div>
          <div className="galleryTwo">
            <img src="./images/Image (8).png" alt=""/>
            <div className="span"><span>Organic Food</span></div> 
          </div>
          <div className="galleryThree">
            <img src="./images/Image (9).png" alt=""/>
            <div className="span"><span>Nuts Cookis</span></div> 
          </div>
        </div>
    </section>
    );
}