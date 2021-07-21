import Gallery from "./gallery";
const TourDetail = () => {
  return (
    <div className="detail">
      <div className="gallery">
        <Gallery
          imagenes={[
            "/temporal/img/rocks_2.png",
            "/temporal/img/rocks_3.png",
            "/temporal/img/rocks.png",
            "/temporal/img/rocks_2.png",
          ]}
        />
      </div>
      <div className="includes">
        <h4>Includes</h4>
        <p>
          • Deluxe motor coach <br />
          • Professional bilingual guide <br />
          • Continental breakfast and refreshments on board (beer, soda or
          water) <br />
          • Fresh water while touring the site. <br />• Buffet lunch in a
          beautiful hacienda-style hotel.
        </p>
      </div>
      <div className="total">
        <ul>
          <li>
            <div className="description">Chichen Itzá Unique</div>
            <div className="price">$190 USD</div>
          </li>
          <li>
            <div className="description">
              Exclusive Limited Time Discount to Mr. **LAST NAME*
            </div>
            <div className="price">-$50 USD</div>
          </li>
          <li>
            <div className="description">Special Price</div>
            <div className="price totalPrice">$140 USD</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TourDetail;
