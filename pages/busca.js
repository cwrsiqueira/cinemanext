import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Busca({list}) {
    const [searchText, setSearchText] = useState('')
    const [movieList, setMovieList] = useState([])

    async function handleSearch () {
        const res = await fetch("http://localhost:3000/api/search/?q="+searchText)
        const json = await res.json()

        setMovieList(json.list)
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>CinemaNext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Busca
        </h1>

        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} placeholder='Buscar por...' />
        {searchText == '' && 
          <button onClick={handleSearch} disabled>Buscar</button>
        }
        {searchText != '' && 
          <button onClick={handleSearch}>Buscar</button>
        }
        

        <hr/>

        <ul>
          {movieList.map(item=>(
            <li key={item}>
              <a href={`/movie/${item.id}`}>
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt='poster' width={150} layout='fill' /> <br/>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        Powered by CWRSdev
      </footer>
    </div>
  )
}
