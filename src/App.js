import Search  from './component/Search/index.js'
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Detail from './component/Detail/index.js'
import Header from './././component/Header/Header'
import Novigator from '././component/Navigator/Novigator'
import { API } from './config.js'
export default function App() {
  const [data, setData] = useState() 
  const [value, setValue] = useState('') 

  const search = async () => {
    let resp = await fetch(API + '&q=' + value)
    let data = await resp.json()
    console.log(data);
    setData(data.items)
  }
  useEffect(() => {
    search()
  }, [])

  return (
    <div>
    <Header value={value} setValue={setValue} search={search}/>
      <div style={{
      display: 'flex',
      justifyContent:'space-between',
    }}>
    <Novigator/>
      <Switch>
      <div>
        <Route exact path='/' render={()=><Search videos={data}/>}/>
        <Route exact path='/detail/:videoId' component={Detail}/>
        </div>
      </Switch>
      </div>
    </div>
  )
}
