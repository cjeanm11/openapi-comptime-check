import type { components } from "./../../generated/api/api.ts";

export type GeneratedObject = components['schemas']['Color'];

export const Colors = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
    YELLOW: 'YELLOW'
    // PURPLE: "PURPLE" 

} as const;

type ColorsType = GeneratedObject['color']; 
type Assert<T extends U, U> = T extends U ? (U extends T ? true : never) : never;
type _ = Assert<ColorsType, keyof typeof Colors | undefined>;