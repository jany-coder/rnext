"use client"
import { useRouter } from "next/navigation"

const Button = ({children}) => {

  const router = useRouter()  
  const handleClick = () => {
    console.log("Button clicked")
    router.push("/dashboard/analytics")
  }
  return (
    <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">{children}</button>
  )
}

export default Button