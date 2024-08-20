import { createContext, useContext } from "react"

type TabContextProps = {
    activeTab: number
    setActiveTab: (index: number) => void
}

export const TabContext = createContext<TabContextProps | undefined>(undefined)

export const useTabContext = () => {
    const context = useContext(TabContext)

    if(!context){
        throw new Error("Tab context must be used within its provider") 
    }

    return context
}