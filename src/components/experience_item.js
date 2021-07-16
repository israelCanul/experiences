import style from "../scss/Experiences.module.scss";
import Imagen from "../components/image";
import * as animationData from "../animations/lottie-success.json";
import LottieAnim from "./lottie_animation";

const Experience = ({ data, selected = false, selectFunction = (d) => {} }) => {
  return (
    <div
      className={style.experience}
      onClick={() => {
        selectFunction(data);
      }}
    >
      {selected ? (
        <LottieAnim anim={animationData.default} height={80} width={80} />
      ) : (
        ""
      )}
      <Imagen src={data.image} />
      <Imagen
        width="40px"
        height="40px"
        className={style.icon}
        src={data.icon}
      />
      <p>{data.name}</p>
    </div>
  );
};
export default Experience;
