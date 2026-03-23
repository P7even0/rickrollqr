import { useState } from 'react'
import './App.css'
import dance1 from './assets/dance1.gif'
import dance2 from './assets/dance2.gif'
import headgif from './assets/headgif.gif'

const rickrollLinks = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=oHg5SJYRHA0',
  'https://www.youtube.com/watch?v=6_b7RDuLwcI',
  'https://www.youtube.com/watch?v=G8iEMVr7GFg',
  'https://www.youtube.com/watch?v=AyOqGRjVtls',
  'https://www.youtube.com/watch?v=6mhmcwmgWbA&list=LLh0zI6HBoJh3w94SSuZs4Hg&index=160&t=0s',
  'https://www.youtube.com/watch?v=SpZ2FsEfwP4',
  'https://www.youtube.com/watch?v=H01BwSD9eyQ',
  'https://www.youtube.com/watch?v=nrsnN23tmUA',
  'https://www.youtube.com/watch?v=8mkofgRW1II',
  'https://www.youtube.com/watch?v=rAx5LIul1N8',
  'https://www.youtube.com/watch?v=sO4wVSA9UPs',
  'https://www.youtube.com/watch?v=rrs0B_LM898',
  'https://www.youtube.com/watch?v=doEqUhFiQS4',
  'https://www.youtube.com/watch?v=epyRUp0BhrA',
  'https://www.youtube.com/watch?v=uK5WDo_3s7s',
  'https://www.youtube.com/watch?v=wzSVOcgKq04&feature=emb_title',
  'https://www.youtube.com/watch?v=7B--1KArxow',
  'https://www.youtube.com/watch?v=rbsPu1z3ugQ',
  'https://www.youtube.com/watch?v=ptw2FLKXDQE',
  'https://www.youtube.com/watch?v=E50L-JYWm3w',
  'https://www.youtube.com/watch?v=8leAAwMIigI',
  'https://www.youtube.com/watch?v=ByqFY-Boq5Y',
  'https://www.youtube.com/watch?v=E4ihJMQUmUQ',
  'https://www.youtube.com/watch?v=cjBHXvBYw5s',
  'https://www.youtube.com/watch?v=xaazUgEKuVA',
  'https://www.youtube.com/watch?v=TzXXHVhGXTQ',
  'https://www.youtube.com/watch?v=Uj1ykZWtPYI',
  'https://www.youtube.com/watch?v=EE-xtCF3T94',
  'https://www.youtube.com/watch?v=V-_O7nl0Ii0',
  'https://www.youtube.com/watch?v=cqF6M25kqq4',
  'https://www.youtube.com/watch?v=0SoNH07Slj0',
  'https://www.youtube.com/watch?v=xfr64zoBTAQ',
  'https://www.youtube.com/watch?v=j5a0jTc9S10',
  'https://www.youtube.com/watch?v=dPmZqsQNzGA',
  'https://www.youtube.com/watch?v=nHRbZW097Uk',
  'https://www.youtube.com/watch?v=BjDebmqFRuc',
  'https://www.youtube.com/watch?v=Gc2u6AFImn8',
  'https://www.youtube.com/watch?v=8VFzHYtOARw',
  'https://www.youtube.com/watch?v=cSAp9sBzPbc',
  'https://www.youtube.com/watch?v=Dx5i1t0mN78',
  'https://www.youtube.com/watch?v=Oo0twK2ZbLU',
  'https://www.youtube.com/watch?v=cvh0nX08nRw',
  'https://www.youtube.com/watch?v=lXMskKTw3Bc',
  'https://www.youtube.com/watch?v=7z_1E8VGJOw',
  'https://www.youtube.com/watch?v=VgojnNgmgVs',
  'https://www.youtube.com/watch?v=5wOXc03RwVA',
]

function App() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const cleanedUrl = url.trim()
    let finalUrl = ''

    if (rickrollLinks.includes(cleanedUrl)) {
      finalUrl = cleanedUrl
    } else {
      const selection = Math.floor(Math.random() * rickrollLinks.length)
      finalUrl = rickrollLinks[selection]
    }

    const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(finalUrl)}`
    setResult(qrUrl)
  }

  return (
    <div className="app">
      <div className={`card-wrap ${result ? 'generated' : ''}`}>
        <div className="heads top-heads row-1">
          <img src={headgif} alt="Rick head" className="head" />
          <img src={headgif} alt="Rick head" className="head" />
          <img src={headgif} alt="Rick head" className="head" />
        </div>

        <div className="heads top-heads row-2">
          <img src={headgif} alt="Rick head" className="head" />
          <img src={headgif} alt="Rick head" className="head" />
          <img src={headgif} alt="Rick head" className="head" />
        </div>

        <div className="dancers left-dancers">
          <img src={dance1} alt="Rick dancing" className="side-gif" />
          <img src={dance2} alt="Rick dancing" className="side-gif" />
          <img src={dance1} alt="Rick dancing" className="side-gif" />
        </div>

        <div className="dancers right-dancers">
          <img src={dance2} alt="Rick dancing" className="side-gif" />
          <img src={dance1} alt="Rick dancing" className="side-gif" />
          <img src={dance2} alt="Rick dancing" className="side-gif" />
        </div>

        <div className="card">
          <p className="title">Greetings! Generate your QR code here!</p>
          <p className="subtitle">Don&apos;t be afraid :)</p>

          {result && (
            <div className="qr-box">
              <img src={result} alt="Generated QR code" />
            </div>
          )}

          <div className="form-wrapper">
            <form className="qr-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
