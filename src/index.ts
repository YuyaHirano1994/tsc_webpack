import SaySomething from "./saySOmething";

const root: HTMLElement | null = document.getElementById("root");

const saySOmething = new SaySomething("hello ts")
saySOmething.sayText(root)