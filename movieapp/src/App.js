import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import MovieList from './component/MovieList';
import Navbar from './component/Navbar';


function App() {
  const [movies, setmovies] = useState([
    { name: "Avengers Endgame",
  posterurl:"https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie.jpg",
  description:"After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. ",
  rating:4,
  },
  { name: "Broken Skine",
  posterurl:"https://i.pinimg.com/736x/f6/d3/e3/f6d3e3f8351cc091ecd8ed109a2f95ed.jpg",
  description:"A teenage boy, Diego, connects with his teenage ex girlfriend, Karina, .",
  rating:5,
  },
  { name: "Wonder Women",
  posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SFUPhK_g3lAprV2SZVjHTkrueIv8VKe1C2Tkc37F9Rh7ynU_PyMAHS6a-gwiCgkx0JY&usqp=CAU",
  description:"Raised on a sheltered island paradise, when a pilot crashes on their ",
  rating:3,
  },
  { name: "Dawen Of The Seven",
  posterurl:"https://cdn.wallpapersafari.com/49/47/GvK7uD.jpg",
  description:"Seven who will fight. Seven who will restore light and hope, and see .",
  rating:3,
  },
  { name: "AVATAR I",
  posterurl:"https://i.ytimg.com/vi/8zRNHh0lbNM/maxresdefault.jpg",
  description:"The life of the Navi tribe before the arrival of people .",
  rating:5,
  },
  { name: "Detective Dee",
  posterurl:"https://bestsimilar.com/img/movie/thumb/1b/12100.jpg",
  description:"The film tells the story of Di Renjie (Andy Lau), one of.",
  rating:4,
  },
  { name: "WHITE SNAKE",
  posterurl:"https://lesaliens.com/aliens/wp-content/uploads/2022/03/white-snake_affiche_cinema_kmbo_creation-agence-les-aliens-studio-print_campagne-promotionnelle-instagram.jpg",
  description:"The story follows the Chinese fable the Legend of the White Snake..",
  rating:2,
  },
  { name: "Thor",
  posterurl:"https://cultea.fr/wp-content/uploads/2022/07/117-1024x512.jpg",
  description:"After reigniting a dormant war, Thor is banished from Asgard to Earth.",
  rating:2,
  },
  { name: "Le Visiteur de Futur",
  posterurl:"https://fr.web.img4.acsta.net/c_310_420/pictures/22/08/23/14/53/3574724.jpg",
  description:"Alice, a young girl, protest against the construction of a nuclear plant .",
  rating:4,
  },
  { name: "Matrix",
  posterurl:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/410/matrix-resurrections-affiche-1410304.jpg",
  description:"The Matrix is a computer-generated dream world designed to keep these.",
  rating:3,
  },
  { name: "Secrets Of Dumbledore",
posterurl:"https://www.adoxa.info/wp-content/uploads/2022/06/Animaux-Fantastiques-3-le-final-pourrait-creer-un-probleme-de.jpg",
description:"Set several years after the events of its predecessor, the film sees ",
rating:4,
},
{ name: "Gemeni Man",
posterurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4jQJFmWC5o9DcA2Y4nicBwwCJll8p0O1Uw&usqp=CAU",
description:"Henry Brogan, un tueur professionnel, est soudainement pris pour cible et poursuivi par un mystérieux et jeune ",
rating:5,
},
  ]);

  const [text, settext] = useState("");
  const [rate, setrate] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
<Navbar settext={settext} setrate={setrate} />

<MovieList movies={movies} setmovies={setmovies} text={text} rate={rate} />
      </header>
    </div>
  );
}

export default App;
