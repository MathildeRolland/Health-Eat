import { useState, useEffect } from 'react';

export default function useDimensions() {
    const [ width, setWidth ] = useState();

    useEffect(() => {
        
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        updateWidth();
        
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, []);

    return width;
}
