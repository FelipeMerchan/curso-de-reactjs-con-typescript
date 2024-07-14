import { useEffect, useRef, useState } from "react";

/* En este archivo mostramos 4 formas (hay más) de crear
un componetne de React en TypeScrip */
/* #1 Tipado implícito
export const RandomFox = () => {
  return <img />
} */

type Props = { image: string };

/* #2 Tipar el retorno de la función */
export const RandomFox = ({ image }: Props): JSX.Element => {
  /* Debemos tipar useRef utilizando el genérico e indicarle
  cuál es el tipo de elemento en el dom que vamos a usar con useRef: */
  const node = useRef<HTMLImageElement>(null);
  /* El valor inicial del useState es una imagen transparente
  de 320 de alto por 320 de ancho en base 64 que es un formato
  muy comprimido para evitar hacer una petición http para obtener la imagen*/
  const [src, setSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    /* Crear nuevo observador */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /* Elemento está dentro de la pantalla, así que
          ahora sí cargamos la imagen en el navegador: */
          setSrc(image);
        }
      });
    });

    /* Observar nodo */
    if (node.current) {
      observer.observe(node.current);
    }

    return () => {
      /* Desconectar observador */
      observer.disconnect();
    };
  }, [image]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="rounded bg-gray-300"
      src={src}
      ref={node}
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
