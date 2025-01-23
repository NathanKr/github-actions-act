import { test , expect} from "vitest";
import {max} from "../src/utils"

test('max - first argument',()=>{
    expect(max(3,2)).toBe(3)
})

test('max - second argument',()=>{
    expect(max(3,12)).toBe(12)
})