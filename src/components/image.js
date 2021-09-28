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
  if (name.search(".png") >= 0) {
    nameOfImage = name.replace(".png", "");
  }
  if (name.search(".jpg") >= 0) {
    nameOfImage = name.replace(".jpg", "");
  }
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
