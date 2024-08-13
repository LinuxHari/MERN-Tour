import { useEffect, useState } from "react"

type Value = string | number | (() => void)

export const useThrottle = (value: Value, duration: number) => {

    const [throttledValue, setThrottledValue] = useState<Value>("")
    const [isLocked, setLock] = useState(false)

    const handleLock = () => {
        setLock(false)
        setThrottledValue(throttledValue)
    }

    useEffect(() => {

        const callThrottle = () => {
            if(!isLocked){
                setTimeout(handleLock, duration)
                return true
            } else{
                return callThrottle() 
            }
        }

    callThrottle()
    }, [value])

  return throttledValue
}