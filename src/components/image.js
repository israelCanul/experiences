const Imagen = ({
  layout,
  src,
  alt = "imagen alt",
  srcset = null,
  className = null,
  width = null,
  height = null,
}) => {
  return (
    <picture height={height} width={width} className={className}>
      <source></source>
      <img
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
