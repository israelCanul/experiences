import style from "../scss/Experiences.module.scss";
import { Link } from "react-router-dom";
import { getTexto, getLanguage } from "../libs/language";
import { saveExperiencesSelected, getCookieForm } from "../libs/cookieManager";
import { useExperiences } from "../hooks/index";
import Experience from "./experience_item";
import { useEffect, useState } from "react";
import AboutStay from "./about_your_stay";
import { useHistory } from "react-router-dom";
import { setPreferencesToCRM, setTaskToCRM } from "../api/index";

const ExperiencesList = () => {
  let history = useHistory();
  const [selecteds, setSelecteds] = useState([]);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [celebration, setCelebration] = useState("");
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

  let renderContinue = () => {
    if (getCookieForm("nights", getLanguage()) < 4) {
      return (
        <a
          onClick={(e) => {
            e.preventDefault();
            setModal(true);
          }}
          href="/"
        >
          {getTexto("Continue")}
        </a>
      );
    } else {
      return (
        <Link to="/experiences" state={{ search: window.location.search }}>
          {getTexto("Continue")}
        </Link>
      );
    }
  };

  let continueHandlerIn4Nights = (e) => {
    e.preventDefault();
    console.log("llego aqui");
    console.log(celebration);
    setPreferencesToCRM(
      () => {
        //     console.log("Completado");
        let objToTask = { celebration: celebration };
        setTaskToCRM(objToTask)
          .then((res) => {
            if (parseInt(res.data.code) >= 0) {
              history.push("/confirmation?noagree=false");
            } else {
              setError(res.data.data);
            }
          })
          .catch((err) => {
            setError(err);
          });
      },
      (err) => {
        setError(err);
      }
    );
  };

  return (
    <div className={style.ExperiencesList}>
      {renderExperiences}
      <div className={style.actions}>
        {selecteds.length > 0 ? (
          renderContinue()
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
      <Modal
        open={modal}
        toggleModal={setModal}
        error={error}
        continueHandler={continueHandlerIn4Nights}
        setCelebration={setCelebration}
        celebration={celebration}
      />
      ;
    </div>
  );
};

export default ExperiencesList;

const Modal = ({
  open = true,
  toggleModal = () => {},
  error,
  continueHandler = () => {},
  setCelebration,
  celebration,
}) => {
  return (
    <div className={`modal ${open === true ? "active" : ""}`}>
      <div className="modal_background"></div>
      <div className="modal_contenido">
        <div className="modal_action">
          <div
            className="close"
            onClick={() => {
              toggleModal(false);
            }}
          ></div>
        </div>
        <>
          <AboutStay
            isNotAplicable={true}
            setCelebration={setCelebration}
            continueHandler={continueHandler}
            celebration={celebration}
          />
        </>

        <p className="error">{error}</p>
      </div>
    </div>
  );
};
