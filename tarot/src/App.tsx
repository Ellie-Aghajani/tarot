import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return(
    <Grid templateAreas={`'nav nav' 'aside main' `}>
      <GridItem area='nav'> Nav</GridItem>
      <GridItem area='aside'> aside</GridItem>
      <GridItem area='main'> main</GridItem>

    </Grid>
  ) ;

export default App;
