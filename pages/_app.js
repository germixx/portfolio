import '../styles/default.css'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/media-queries.css'


import { useState, useEffect } from 'react'

if (typeof window === 'undefined') {
  global.window = {}
}

var data = require('./resumeData.json')

function MyApp({ Component, pageProps }) {

  const [resumeData, setResumedata] = useState({});

  useEffect(() => {
    setResumedata(data)
    // getResumeData();
  }, []);

  return <Component data={data} {...pageProps} />
}



export default MyApp
