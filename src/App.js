import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'
import data from "./weather.json"

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossOrigin="anonymous"
      />
      <body style={{backgroundImage: "linear-gradient(rgb(0, 173, 204), white)"}}>
      <nav><Navigation /></nav>
        <article id="move"><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /><Navigation /></article>
        <footer><Navigation /></footer>
      </body>
    </>
  );
}

export default App;
