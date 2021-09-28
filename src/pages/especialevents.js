import Header from "../sections/header";
import { getTexto } from "../libs/language";
import Section from "../components/sectionsummary";
import Imagen from "../components/image";
import Formulario from "../components/formularioevents";
import { useGetInfoAboutPeopleIDFromDT, useQuery } from "../hooks/index";
import { urlImagenes } from "../libs/config";

import "../scss/tour_summary.scss";
import { useEffect } from "react";
const Especialevents = () => {
  const [infoByPeople, setPeopleID] = useGetInfoAboutPeopleIDFromDT();
  const query = useQuery();

  useEffect(() => {
    if (query !== null) {
      if (query.peopleID) {
        setPeopleID(query.peopleID);
      }
    }
  }, [infoByPeople, setPeopleID, query]);

  return (
    <div className="summary">
      <Header title="Special Events" description="Creating magical moments" />
      <div className="title_summary">
        <div className="description">
          <h3>%%USERNAME%%, Are you celebrating something special?</h3>
          <p>
            {getTexto(
              "Add even more magic to your upcoming vacation with these packages."
            )}
          </p>
        </div>
      </div>
      <Section
        inverted
        title="ROMANTIC DINNER"
        description="From the beach to a waterfront terrace, a Romantic Dinner is the perfect way to celebrate an anniversary, birthday or engagement and whenever you want to add even more Mexican Caribbean magic to your vacation."
        gallery={[
          `${urlImagenes}romantic-dinner-1.jpg`,
          `${urlImagenes}romantic-dinner-2.jpg`,
          `${urlImagenes}romantic-dinner-3.jpg`,
          `${urlImagenes}romantic-dinner-4.jpg`,
        ]}
      >
        <ul className="itemsInclude">
          <li>
            <Imagen
              src="/img/specialevents/icon-dinner.png"
              alt="icon dinner"
            />
            Delicious menu for two{" "}
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-location.png"
              alt="icon location"
            />
            Choice of locations
          </li>
          <li>
            <Imagen src="/img/specialevents/icon-toast.png" alt="icon toast" />
            One bottle of wine, choose from a selection{" "}
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-service.png"
              alt="icon service"
            />
            Service for two hours
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-waiter.png"
              alt="icon waiter"
            />
            Romantic décor
          </li>
          <li>
            <Imagen src="/img/specialevents/icon-rose.png" alt="icon rose" />
            Your own waiter{" "}
          </li>
        </ul>
        <div className="totalSection">
          <span>US$250</span> for two people. Tax include
        </div>
      </Section>
      <Section
        title="ROMANTIC ROOM DECOR"
        description="Celebrate your love, a touch of luxury for your room."
        img={`${urlImagenes}room-decor.jpg`}
      >
        <ul className="itemsInclude">
          <li>
            <Imagen src="/img/specialevents/icon-rose.png" alt="icon rose" />
            Rose petal decoration
          </li>
          <li>
            <Imagen src="/img/specialevents/icon-wine.png" alt="icon wine" />
            Bottle of Moët Chandon Brut champagne
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-strawberry.png"
              alt="icon strawberry"
            />
            Chocolate-dipped strawberries
          </li>
        </ul>
        <div className="totalSection">
          <span>US$125</span> tax include
        </div>
      </Section>
      <Section
        title="BIRTHDAY DECORATION"
        description="A birthday surprise for someone special."
        inverted
        img={`${urlImagenes}birthday-decoration.jpg`}
      >
        <ul className="itemsInclude">
          <li>
            <Imagen
              src="/img/specialevents/icon-ballons.png"
              alt="icon ballons"
            />
            Balloons{" "}
          </li>
          <li>
            <Imagen src="/img/specialevents/icon-cake.png" alt="icon cake" />
            Small cake
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-cellebration.png"
              alt="icon celebration"
            />
            Happy birthday banner
          </li>
          <li>
            <Imagen
              src="/img/specialevents/icon-bottle.png"
              alt="icon bottle"
            />
            Bottle of sparkling wine
          </li>
        </ul>
        <div className="totalSection">
          <span>US$125</span> tax include
        </div>
      </Section>
      <Formulario data={infoByPeople} />
    </div>
  );
};
export default Especialevents;