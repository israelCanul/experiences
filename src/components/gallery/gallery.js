import { useState } from "react";
import Imagen from "../image";
import { urlImagenes } from "../../libs/config";

const Gallery = ({ imagenes = [] }) => {
  const [selected, setSelected] = useState(0);
  const setImage = (id) => {
    setSelected(id);
  };
  const renderThumbs = imagenes.map((imagen, id) => {
    return (
      <div key={id} className="thumbnail" onClick={() => setImage(id)}>
        <Imagen src={urlImagenes + imagen} className="imagen" />
      </div>
    );
  });
  if (imagenes.length === 0) {
    return <div className="wrapper_gallery"></div>;
  }
  return (
    <div className="wrapper_gallery">
      <div className="thumbnails">{renderThumbs}</div>
      <div className="viewer">
        <Imagen src={urlImagenes + imagenes[selected]} className="imagen" />
      </div>
    </div>
  );
};
export default Gallery;
