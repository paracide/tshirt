import Canvas from "./canvas/index.tsx";
import Customizer from "./pages/Customizer.tsx";
import Home from "./pages/Home.tsx";

function App() {

    return (
        <main className="app transition-all ease-in">
            <Home/>
            <Canvas/>
            <Customizer/>
        </main>
    )
}

export default App
