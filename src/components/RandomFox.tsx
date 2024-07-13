/* En este archivo mostramos 4 formas (hay más) de crear
un componetne de React en TypeScrip */
/* #1 Tipado implícito
export const RandomFox = () => {
  return <img />
} */

type Props = { image: string };

/* #2 Tipar el retorno de la función */
export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
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
