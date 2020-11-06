import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    
    <div className="container">
   <ul className="list-group">
  <li clasName="list-group-item">Cras justo odio</li>
  <li clasName="list-group-item">Dapibus ac facilisis in</li>
  <li clasName="list-group-item">Morbi leo risus</li>
  <li clasName="list-group-item">Porta ac consectetur ac</li>
  <li clasName="list-group-item">Vestibulum at eros</li>
</ul>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">previous</button>
  <button type="button" class="btn btn-secondary">play</button>
  <button type="button" class="btn btn-secondary">pause</button>
  <button type="button" class="btn btn-secondary">next</button>
</div>
</div>
   
  );
}

export default App;
