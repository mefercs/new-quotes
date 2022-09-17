import MainCard from "./components/MainCard"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getQuote } from './features/quotes/quotesSlice'

export default function App(){
  
  const dispatch = useDispatch()

  useEffect( () => { 
    dispatch( getQuote() )
  },[])

  return ( <div className="main">
    <MainCard/>
  </div> )

}






























