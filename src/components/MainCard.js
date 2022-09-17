import { useSelector, useDispatch} from "react-redux"
import { getQuote } from "../features/quotes/quotesSlice";

export default function MainCard () { 
  return ( <div id="quote-box">
    <Text/>
    <Author/>
    <div className="buttons">
      <NewQuote/>
      <TweetQuote/>
    </div>
  </div> )
}


const Text = () =>{
  const content = useSelector( state=> state.quotes.content );
  return ( <h3 id="text">
    {content}
  </h3> )
}

const Author = () => {
  const author = useSelector( state => state.quotes.author )
  return ( <p id="author">
        {author}
  </p> )
}

const NewQuote = (e) => {
  const dispatch = useDispatch()

  const handleNewQuote = ()=> { 
    dispatch( getQuote () );
  }
  return ( 
    <button id="new-quote" onClick={ handleNewQuote }>New Quote</button> 
  )
}

const TweetQuote = (e) => {
  return (
  <a href="https://twitter.com/intent/tweet" target="_blank">
  <button id="tweet-quote">Tweet Quote</button>
  </a>
  )
}








