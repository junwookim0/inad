import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const gridStyle = {
    background: 'yellow'
  }
  return (
    <div className="App">
    <button type="button" class="btn btn-primary">Primary</button>
    <container style={gridStyle}>
      <row>
        <cow>
          1
        </cow>
        <cow>
          2
        </cow>
        <cow>
          3
        </cow>
      </row>

    </container>

    
    </div>
  );
}

export default App;
