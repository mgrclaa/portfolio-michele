import './opening.css'

function Opening({ setStarted }) {
  return (
    <div className="opening">

      <span className="sparkle sparkle-1">✦</span>
      <span className="sparkle sparkle-2">✧</span>
      <span className="sparkle sparkle-3">✦</span>
      <span className="sparkle sparkle-4">✧</span>
      <span className="sparkle sparkle-5">✦</span>
      <span className="sparkle sparkle-6">✧</span>
      <span className="sparkle sparkle-7">✦</span>

      <div className="opening-content">

        <h1>MICHELLE</h1>
        <h2>GRACIELA</h2>

        <p className="subtitle">
          INFORMATION SYSTEMS STUDENT
        </p>

        <button
          className="start-button"
          onClick={() => setStarted(true)}
        >
          &gt; PRESS ENTER TO START &lt;
        </button>

      </div>

    </div>
  )
}

export default Opening