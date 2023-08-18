import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import About from '../components/About'
import Resume from '../components/Resume'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Jeremy Goolsby</title>
        <meta name="description" content="Systems Administrator/Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="App">
      <Header data={props.data.main}/>
      <About data={props.data.main} />
      <Resume data={props.data.resume} />
      <Portfolio data={props.data.portfolio} />
      <Contact data={props.data.main} />
      <Footer data={props.data.main} />
      
    </div>
      
    </div>
  )
}
