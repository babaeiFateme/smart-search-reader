import { useEffect, useState } from "react";

/** 
 * @Author: Fateme Babaei 
 * @Date: 2025-05-26 00:40:21 
 * 
 * Custom hook that debounces a value by delaying its update until
 * after the specified delay has passed without changes.
 *
 * @param value - The input value to debounce.
 * @param delay - Delay in milliseconds.
 * @returns The debounced value.
 */

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
