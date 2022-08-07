function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="flex-center">
          <img className="logo" src="./broken-link.png"  alt="logo"></img>
          <div className="logo-name">link preview</div>
        </div>
      </header>

      <main id="main">
        <div className="main-wrapper">
          <div className="main-left">
          <img className="logo-title" src="./broken-link.png" alt="logo"></img>
            <h1>Link Preview</h1>
            <p className="main-desc">
              View the link preview using our App. Use the API to generate link
              preview in your app.
            </p>
            <div className="ctas">
            <button className="know-more-btn">Try it out</button>
            <button className="know-more-btn know-more-btn-secondary">Try the API</button>
            </div>
          </div>
          <div className="main-right">
            <img src="./headerlink.svg"  alt="logo" className="mockup" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
