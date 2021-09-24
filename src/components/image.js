const Imagen = ({
  layout,
  src,
  alt = "imagen alt",
  srcset = null,
  className = null,
  width = null,
  height = null,
}) => {
  let name = src;
  let nameOfImage = "";
  if (name.search(".png")) {
    nameOfImage = name.replace(".png", "");
  }
  if (name.search(".jpg")) {
    nameOfImage = name.replace(".jpg", "");
  }
  // let name = src.split(".");

  // let nameOfImage = name.pop().
  return (
    <picture height={height} width={width} className={className}>
      <source srcSet={nameOfImage + ".webp"} type="image/webp"></source>
      <img
        className="image"
        loading="lazy"
        height={height}
        width={width}
        src={src}
        layout={layout}
        alt={alt}
        srcSet={srcset}
      />
    </picture>
  );
};

export default Imagen;
