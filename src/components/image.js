const Imagen = ({
  layout,
  src,
  alt = "imagen alt",
  srcset = null,
  className = null,
  width = null,
  height = null,
}) => {
  let name = src.split(".");
  return (
    <picture height={height} width={width} className={className}>
      <source srcSet={name[0] + ".webp"} type="image/webp"></source>
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
