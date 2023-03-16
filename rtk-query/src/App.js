import Albums from './components/Albums';
import NewAlbumForm from './components/NewAlbum';
import UpdateAlbumForm from './components/updateAlbumForm';
import { useState } from 'react';


function App() {

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  
  return(
  <div>
    <Albums/>
    <NewAlbumForm/>
    <UpdateAlbumForm selectedAlbum={selectedAlbum} />
  </div>
  )
}

export default App;
