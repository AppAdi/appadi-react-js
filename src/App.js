import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ListPokemon from "./components/ListPokemon";
import DetailPokemon from "./components/DetailPokemon";
import './stylesheet.css';

function App(){
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<ListPokemon/>}/>
                <Route path='/pokemon/:id' element={<DetailPokemon/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;