import { useState, useEffect, useCallback } from 'react';
import { Nullable } from '@custom-types/common';

const useLongPress = (callback: () => void, { speed = 300 } = {}) => {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        let timerId: Nullable<ReturnType<typeof setInterval>> = null;
        if (startLongPress) {
            timerId = setInterval(callback, speed);
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [callback, speed, startLongPress]);

    const start = useCallback(() => {
        callback();
        setStartLongPress(true);
    }, [callback]);

    const stop = useCallback(() => {
        setStartLongPress(false);
    }, []);

    return {
        onMouseDown: start,
        onMouseUp: stop,
        onMouseLeave: stop,
        onTouchStart: start,
        onTouchEnd: stop,
    };
};

export default useLongPress;
