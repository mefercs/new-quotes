import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getQuote  = createAsyncThunk('quote/getQuotes', async()=>{ 
  const value = fetch("https://api.quotable.io/random?maxLength=80").then( res => res.json() )
  return value
})

const initialState = {
  content: 'nothing',
  author:'nobody',
  status:null
}

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers:{},
  extraReducers:{ 
    [getQuote.pending] : state => { state.status = 'loading' }, 
    [getQuote.fulfilled] :  (state, {payload}) => { 
      state.content = payload["content"];
      state.author = payload["author"];
      state.status = 'success'; 
    },
    [getQuote.rejected]: state => {state.status ='failed'}
  }
})

export default quotesSlice.reducer;
