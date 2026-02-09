
import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter', () => {
    test('Should initialize with default value of 10', ()=>{
        const {result} = renderHook(()=>useCounter())
        expect(result.current.counter).toBe(10)
        
    })

    test('Should initialize with value 20', ()=>{
        const {result} = renderHook(()=>useCounter(20))
        expect(result.current.counter).toBe(20)
        
    });

    test('Should increment counter when handleAdd is called', ()=>{
        const {result} = renderHook(()=>useCounter())
        //Lo que voy a testear
        act(()=>{
            result.current.handleAdd()
        })
               
        //Lo que espero
        expect(result.current.counter).toBe(11)
        
    });
    test('Should decrement counter when handlesubtract is called', ()=>{
        const {result} = renderHook(()=>useCounter())
        //Lo que voy a testear
        act(()=>{
            result.current.handlesubtract()
        })

        //Lo que espero
        expect(result.current.counter).toBe(9)
        
    });
    test('Should reset counter when handleReset is called', ()=>{
        const {result} = renderHook(()=>useCounter())
        //Lo que voy a testear
        act(()=>{
            result.current.handleReset()
        })

        //Lo que espero
        expect(result.current.counter).toBe(10)
        
    });
    
});