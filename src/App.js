import './App.scss'
import { Grid, Button, ButtonGroup } from './components'

function App() {
  return (
    <Grid htmlTag="main" className="container">
      <Grid htmlTag="section" className="columns">
        <Grid id="foo" className="column">
          <h1>Testing</h1>
          <Button>Testing</Button>
          <ButtonGroup className="yo">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Grid>
        <Grid className="column">
          <h1>Testing 2</h1>
          <Button>Otro botón</Button>
          <ButtonGroup isVertical className="yo">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
