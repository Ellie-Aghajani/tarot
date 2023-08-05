import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return(
    <Grid templateAreas={`'nav nav' 'aside main' `}>
      <GridItem area='nav' bg='red'> Nav</GridItem>
      <GridItem area='aside' bg='blue'> aside</GridItem>
      <GridItem area='main' bg='yellow'> main</GridItem>

    </Grid>
  ) ;

export default App;
