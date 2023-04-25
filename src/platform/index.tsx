import { useState } from 'react'
import '../styles/platform.css'
import { Header } from './src/header'
export function Platform() {
  const [count, setCount] = useState(0)
  return (
    <div className="platform-container">
      <Header />
      <main className="p-main">
        <section className="p-main--container__left">
          <div className="pl-shape">222</div>
        </section>
        <section className="p-main--center">3</section>
        <section className="p-main--container__right">4</section>
      </main>
      <footer className="p-footer">KonvaPlatform Ver0.0.1</footer>
    </div>
  )
}
