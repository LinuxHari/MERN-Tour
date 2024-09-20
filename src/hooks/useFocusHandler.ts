import { useEffect, useRef, useState } from "react"

const useFocusHandler = () => {
  const [showContent, setShowContent] = useState(false)
  const focusRef = useRef<HTMLDivElement>(null)

  const handleFocus = (e: MouseEvent) => {    
    if(!showContent && focusRef.current?.contains(e.target as Node)) setShowContent(true)
    
    else setShowContent(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleFocus)

    return () => document.removeEventListener("mousedown", handleFocus)
  },[])
  
    return {focusRef, showContent, setShowContent}
}

export default useFocusHandler