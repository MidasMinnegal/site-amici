export const extractImageProps = ({fields}) => (
  {
    src: `https:${fields.file.url}`,
    alt: fields.description,
  }
)