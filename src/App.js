import './App.scss'
import { Grid, Button } from './components'

function App() {
  return (
    <Grid htmlTag="main" className="container">
      <Grid htmlTag="section" className="columns">
        <Grid id="foo" className="column">
          <Button>Testing</Button>
        </Grid>
        <Grid className="column">
          <Button>Otro boton</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
