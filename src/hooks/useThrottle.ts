import { useEffect, useState } from "react"

type Value = string | number | (() => void)

const useThrottle = (value: Value, duration: number) => {

    const [throttledValue, setThrottledValue] = useState("")
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

export default useThrottle