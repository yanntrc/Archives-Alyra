import Header from "./components/Header"
import Footer from "./components/Footer"
import GradientsApp from "./components/GradientsApp"

function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <GradientsApp />
      </main>
      <Footer />
    </div>
  )
}

export default App
