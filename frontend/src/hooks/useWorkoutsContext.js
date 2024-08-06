import { WorkoutContext } from "../context/WorkoutContext"
import { useContext } from "react"

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error('useWorkoutsConext must bee used inside an WOrkoutsContextProvider')
    }

    return context
}