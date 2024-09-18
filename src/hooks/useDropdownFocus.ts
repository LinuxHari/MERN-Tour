import { useEffect, useRef, useState } from "react"

const useDropdownFocus = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleFocus = (e: MouseEvent) => {    
    if(!showDropdown && dropdownRef.current?.contains(e.target as Node)) setShowDropdown(true)
    
    else setShowDropdown(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleFocus)

    return () => document.removeEventListener("mousedown", handleFocus)
  },[])
  
    return {dropdownRef, showDropdown}
}

export default useDropdownFocus