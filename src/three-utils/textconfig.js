import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import Roboto from "./Roboto_Regular.json";
extend({ FontLoader });
const font = new FontLoader().parse(Roboto);

export const textOptionsTitle = {
  font,
  size: 0.4,
  height: 0.05,
};
export const textOptionsNormal = {
  font,
  size: 0.3,
  height: 0.03,
};
