import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Coching from './Coching';
import Events from './Events';
import Ateliers from './Ateliers';
import Formation from './Formation';
function App() {
  return (
    <Router>
    <div>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>DishDash-Weekly-Food</title>
      {/* Boostrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />

      {/* Remix Icons */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* Style CSS */}
      <link rel="stylesheet" href="./App.css" />
    </head>

    <body data-bs-spy="scroll" data-bs-target=".navbar">
   <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coaching" element={<Coching/>}/>
        <Route path="/ateliers" element={<Ateliers/>}/>
        <Route path="/formations" element={<Formation/>}/>
        <Route path="/evenements" element={<Events/>}/>

        

    
      </Routes>
   

  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
    </body>

  </div>
  </Router>

);
}


export default App;
