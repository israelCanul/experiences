import Imagen from "../image";
import Gallery from "../gallery/gallery";
const SectionSummary = ({
  children = null,
  data = null,
  inverted = null,
  img = null,
  gallery = "",
  title = "The title goes here",
  description = "The description goes here, you can set any text in this part",
  includes = [],
}) => {
  let left = (
    <div className="includes">
      <h3 style={{ marginBottom: "" }}>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
  let right = (
    <div className={`gallery ${gallery.length === 0 ? "image" : ""}`}>
      {img && <Imagen alt="Gallery" src={img} />}
      {gallery.length > 0 && <Gallery imagenes={gallery} />}
    </div>
  );

  return (
    <div className={`detail event ${inverted && "inverted"}`}>
      {inverted ? right : left}
      {inverted ? left : right}
    </div>
  );
};

export default SectionSummary;
