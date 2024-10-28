import type { components } from "./../../generated/api/api.ts";

export type GeneratedObject = components['schemas']['Color'];
type ColorsType = GeneratedObject['color']; 

// ex 1:
export const Colors = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
    YELLOW: 'YELLOW'
    // PURPLE: "PURPLE" 

} as const;

type Assert<T extends U, U> = T extends U ? (U extends T ? true : never) : never;
let assert1: Assert<ColorsType, keyof typeof Colors | undefined>;

// exV 2:
type Col = "RED" | "GREEN" | "BLUE" | "YELLOW";
type UnionToTuple<U> = 
    U extends infer I 
        ? [I, ...UnionToTuple<Exclude<U, I>>]
        : [];

        
type ConstClassValToTuple<T> = 
    T extends { [key: string]: infer V } 
        ? V extends string 
            ? V[] 
            : [] 
        : [];        
type ColorTuple = UnionToTuple<Col>; 
type Color2Tuple = UnionToTuple<ColorsType>; 
type Colors3Tuple = ConstClassValToTuple<typeof Colors>;

let assert2: Assert<Color2Tuple, ColorTuple>;
let assert3: Assert<ColorTuple, Colors3Tuple>;

