import { useContext, useEffect } from "react";
import { AppCtx } from "../components/Carousel";
import { navigateToRight } from "../context/actions";

// checks device whether mobile or not
export const isMobile: boolean = navigator.userAgent.indexOf("Mobi") > -1;

// animated item animation
export const setCssAnimationDefault = (
  itemRef: React.MutableRefObject<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>
) => {
  itemRef.current.style.objectPosition = "0px";
  itemRef.current.style.transition = "all 200ms ease-out";
};

export const setCssAnimationOnload = (
  itemRef: React.MutableRefObject<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>
) => {
  itemRef.current.style.objectPosition = "0px";
  itemRef.current.style.animation = "CarouselAnimation 0.4s linear";
};

export const setCssAnimationEnd = (
  itemRef: React.MutableRefObject<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | HTMLDivElement>
) => {
  itemRef.current.style.animation = undefined;
};

export const getObjectPosX = (
  itemRef: React.MutableRefObject<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>
): number =>
  parseFloat(itemRef.current.style.objectPosition.split(" ")[0].split("px")[0]);

// animated prop types
export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

// set carousel css settings (width & height ...)
export const carouselCSS: React.CSSProperties = {
  width: isMobile ? (window.innerWidth * 0.9) : 400,
  height: isMobile ? (window.innerHeight * 0.5) : 400,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
}

// animated item initial css
export const initialCSS: React.CSSProperties = {
  width: carouselCSS.width,
  height: "inherit",
  objectFit: "none",
  objectPosition: "0px",
  userSelect: "none",
  borderRadius: "5px",
  border: "1px solid black"
};

// pagination css
export const paginationCSS: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: carouselCSS.width,
  height: "1.5vh",
  padding: "0.5rem",
  margin: "auto"
};

// navigation buttons css
export const NavigButtonsCSS: React.CSSProperties = {
  width: carouselCSS.width,
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
};

export const textElementTypes: string[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
  "p",
  "span",
  "strong",
  "em",
  "blockquote",
  "code",
  "pre",
  "mark",
  "ins",
  "del",
  "sup",
  "sub",
  "small",
  "i",
  "b",
  "a",
];

export const useInterval = (delay: number | string) => {
  const { dispatch } = useContext(AppCtx);
  let interval: number;
  useEffect(() => {
    interval = window.setInterval(() => dispatch(navigateToRight()),
      typeof delay === 'string' ? parseFloat(delay) : delay);

    return () => window.clearInterval(interval);
  }, []);
}