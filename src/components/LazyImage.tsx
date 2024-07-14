import { useEffect, useRef, useState } from "react";

import type { ImgHTMLAttributes } from "react";

/* En este archivo mostramos 4 formas (hay más) de crear
un componetne de React en TypeScrip */
/* #1 Tipado implícito
export const RandomFox = () => {
  return <img />
} */

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;

/* #2 Tipar el retorno de la función */
export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  /* Debemos tipar useRef utilizando el genérico e indicarle
  cuál es el tipo de elemento en el dom que vamos a usar con useRef: */
  const node = useRef<HTMLImageElement>(null);
  /* El valor inicial del useState es una imagen transparente
  de 320 de alto por 320 de ancho en base 64 que es un formato
  muy comprimido para evitar hacer una petición http para obtener la imagen*/
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);

  useEffect(() => {
    if (isLazyLoaded) {
      return;
    }

    /* Crear nuevo observador */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
          return;
        }

        /* Elemento está dentro de la pantalla, así que
        ahora sí cargamos la imagen en el navegador: */
        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoaded(true);

        if (typeof onLazyLoad === "function") {
          onLazyLoad(node.current);
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
  }, [src, onLazyLoad, isLazyLoaded]);

  return (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img src={currentSrc} ref={node} {...imgProps} />
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
