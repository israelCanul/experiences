import style from "../scss/Experiences.module.scss";
import { Link } from "react-router-dom";
import { getTexto } from "../libs/language";
import { saveExperiencesSelected } from "../libs/cookieManager";
import { useExperiences } from "../hooks/index";
import Experience from "./experience_item";
import { useEffect, useState } from "react";
const ExperiencesList = () => {
  const [selecteds, setSelecteds] = useState([]);
  const Experiences = useExperiences();
  let renderExperiences = [];

  useEffect(() => {
    let idExperiences = [];
    if (selecteds.length > 0) {
      selecteds.map((select) => {
        idExperiences.push(select);
        return true;
      });
      saveExperiencesSelected(idExperiences);
    }
  }, [selecteds]);
  let addExperience = (experience) => {
    const experienceSelected = selecteds.find(
      (selected) => selected.id === experience.id
    );
    if (experienceSelected) {
      const newFilter = selecteds.filter((selected) => {
        return selected.id !== experience.id;
      });
      setSelecteds(newFilter);
    } else {
      if (selecteds.length > 2) {
        let tempSelecteds = [];
        selecteds.map((selected, id) => {
          if (id !== 0) {
            tempSelecteds.push(selected);
          }
          return true;
        });
        tempSelecteds.push(experience);
        setSelecteds(tempSelecteds);
      } else {
        setSelecteds([...selecteds, experience]);
      }
    }
  };
  if (Experiences != null) {
    //checking if the items area selected also we add the render item to the list
    Experiences.map((experience, id) => {
      const experienceSelected = selecteds.find(
        (selected) => selected.id === experience.id
      );
      renderExperiences.push(
        <Experience
          selected={experienceSelected ? true : false}
          key={id}
          selectFunction={addExperience}
          data={experience}
        />
      );
      return true;
    });
  } else {
    for (let index = 0; index < 12; index++) {
      renderExperiences.push(
        <div
          key={index}
          className={
            style.experience + " animatedBlue " + style.experiencexqueleton
          }
        ></div>
      );
    }
  }

  return (
    <div className={style.ExperiencesList}>
      {renderExperiences}
      <div className={style.actions}>
        {selecteds.length > 0 ? (
          <Link to="/tour_related" state={{ search: window.location.search }}>
            {getTexto("Continue")}
          </Link>
        ) : (
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
            }}
            className={style.action_disabled}
          >
            {getTexto("Continue")}
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperiencesList;
