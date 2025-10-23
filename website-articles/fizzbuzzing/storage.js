import { writable } from "svelte/store";

const isOn = writable(false);

export { isOn };
