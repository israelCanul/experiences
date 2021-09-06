import Imagen from "../components/image";
import { getTexto, getLanguage } from "../libs/language";
const TourOnList = ({ data }) => {
  // ConverterCarrouselImage: ""
  // ConverterClassID: "3"
  // ConverterCode: "1564S"
  // ConverterDescEng: "DANCER CATAMARAN"
  // ConverterDescSpa: "CATAMARAN DANCER"
  // ConverterID: "24"
  // ConverterImage: ""
  // ConverterIncludesEng: "Domestic open bar: tequila, vodka, beer, cocktails, sodas, and juices,Light Breakfast of various breads, fresh fruit, juices, and coffee,Snorkeling equipment,Trampoline, water-slide, lounge chairs aboard,Lunch: fish ceviche, beef and chicken fajitas, salad, rice, chips, and guacamole & quesadilla. Everything is freshly prepared and cooked on board,1 hour Golf cart sightseeing tour to Isla Mujeres,Free time at Isla Mujeres"
  // ConverterIncludesSpa: "Barra libre nacional: ron, tequila, vodka, cerveza, cocteles, refrescos y jugos,Desayuno ligero: pan dulce, fruta fresca, jugos y café,Equipo de snorkel,Trampolín, tobogán y camastros abordo,Comida abordo: ceviche de pescado, fajitas de arrachera, fajitas de pollo, ensalada, arroz, guacamole, quesadilla y totopos. (Todo preparado al momento por nuestro chef),1 hora de paseo Guiado por Isla Mujeres,Tiempo libre en Isla Mujeres \n"
  // ConverterProperty: "CUN"
  // ConverterRegularPrice: "94"
  // ConverterSeq: "1"
  // ConverterSpecialPrice: "66"
  // ItemRegularImage: ""
  // ItemRegularLInk: "https://www.thomasmoretravel.com/tour/isla-mujeres/dancer-cruise"
  return (
    <div className="tour">
      <div className="info">
        <Imagen
          src={
            data.ConverterImage !== ""
              ? data.ConverterImage
              : "/img/default.png"
          }
          className="tour_image"
        />
        <h3>
          {getLanguage() === "es-MX"
            ? data.ConverterDescSpa
            : data.ConverterDescEng}
        </h3>
        <div className="price">
          <div className="price_item regular">
            {getTexto("Regular price")}: $82 USD
          </div>
          <div className="price_item special">
            {getTexto("Special price")}:
            <span className="special"> $47 USD</span>
          </div>
        </div>
      </div>
      <a href="/" className="select">
        {getTexto("Select Experience")}
      </a>
    </div>
  );
};
export default TourOnList;
