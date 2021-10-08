import Gallery from "./gallery/gallery";
import { Fragment } from "react";
import { getTexto } from "../libs/language";
const TourDetail = ({ data = null }) => {
  let includes = "";
  if (data != null) {
    includes = data.ConverterIncludes.split(",");
    includes = includes.map((incl, id) => {
      return (
        <Fragment key={id}>
          • {incl}
          <br />
        </Fragment>
      );
    });

    return (
      <div className="detail">
        <div className="gallery">
          <Gallery
            imagenes={
              data.ConverterCarrouselImage !== ""
                ? data.ConverterCarrouselImage.split(",")
                : [
                    "/temporal/img/rocks_2.png",
                    "/temporal/img/rocks_3.png",
                    "/temporal/img/rocks_2.png",
                    "/temporal/img/rocks_3.png",
                  ]
            }
          />
        </div>
        <div className="includes">
          <h4>{getTexto("Includes")}</h4>
          <p>{includes}</p>
        </div>
        <div className="total">
          <ul>
            <li>
              <div className="description">
                <strong>{data.ConverterDesc}</strong>
              </div>
              <div className="price">${data.ConverterRegularPrice} USD</div>
            </li>
            <li>
              <div className="description">
                {/* Exclusive Limited Time Discount to Mr. **LAST NAME* */}
                {getTexto("Exclusive Limited Time Discount")}
              </div>
              <div className="price">
                -$
                {parseFloat(
                  parseFloat(data.ConverterRegularPrice).toFixed(2) -
                    parseFloat(data.ConverterSpecialPrice).toFixed(2)
                ).toFixed(2)}{" "}
                USD
              </div>
            </li>
            <li>
              <div className="description">{getTexto("Special Rate")} </div>
              <div className="price totalPrice">
                ${data.ConverterSpecialPrice} USD
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detail skeleton">
        <div className="gallery">
          <div className="wrapper_gallery">
            <div className="thumbnails">
              <div className="thumbnail">
                <div className="section">
                  <div className="info" style={{ minHeight: "50px" }}></div>
                </div>
              </div>
              <div className="thumbnail">
                <div className="section">
                  <div className="info" style={{ minHeight: "50px" }}></div>
                </div>
              </div>
              <div className="thumbnail">
                <div className="section">
                  <div className="info" style={{ minHeight: "50px" }}></div>
                </div>
              </div>
              <div className="thumbnail">
                <div className="section">
                  <div className="info" style={{ minHeight: "50px" }}></div>
                </div>
              </div>
            </div>
            <div className="viewer">
              <div className="section">
                <div className="info"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="includes">
          <h4>Includes</h4>
          <div className="section">
            <div className="info"></div>
          </div>
        </div>
        <div className="total">
          <div
            className="section"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <div className="info"></div>
          </div>
        </div>
      </div>
    );
  }
};
export default TourDetail;
