/* Generate a random function between 1 and 123 */
const random = () => Math.floor(Math.random() * 123) + 1;

/* En este archivo mostramos 4 formas (hay más) de crear
un componetne de React en TypeScrip */
/* #1 Tipado implícito
export const RandomFox = () => {
  return <img />
} */

/* #2 Tipar el retorno de la función */
export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <img
      className="rounded"
      src={image}
      alt="Image for a Fox"
      width="320"
      height="auto"
    />
  );
};

/* #3 Tipar la variable */
/* export const RandomFox: FunctionComponent = () => {
  return <img />
} */

/* #4 Tipar la variable */
/* export const RandomFox: FC = () => {
  return <img />
} */
