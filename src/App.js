import './App.scss'
import { Grid, Button, ButtonGroup } from './components'

function App() {
  return (
    <Grid tag="main" isContainer>
      <Grid tag="section" areColumns>
        <Grid id="foo" isColumn>
          <h1>Testing</h1>
          <Button>Testing</Button>
          <ButtonGroup className="yo">
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Grid>
        <Grid isColumn areColumns>
          <Grid isColumn>
            <p>Este es un grid sencillo</p>
          </Grid>
          <Grid isColumn>
            <p>Este es un grid sencillo</p>
          </Grid>
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
      <Grid areColumns>
        <Grid colSize="3">
          <p>Por número</p>
        </Grid>
        <Grid tabletSize="8">
          <p>Por número</p>
        </Grid>
        <Grid colSize="1" tabletSize="1">
          <p>Sólo grid</p>
        </Grid>
      </Grid>
      <Grid areColumns>
        <Grid>
          <p>Sin options</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
