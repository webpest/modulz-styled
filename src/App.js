import React, { Component } from 'react';

import Section from './components/Section.js';
import Container from './components/Container.js';
import Text from './components/Text.js';
import Heading from './components/Heading.js';
import Divider from './components/Divider.js';
import Grid from './components/Grid.js';

import ButtonSelection from './templates/ButtonSelection.jsx';
import Hero from './templates/Hero.jsx';
import CodeExport from './templates/CodeExport.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Section size3>
          <Container size3>
            <Heading size1>
              Love life.Love yourself.
            </Heading>
            <Heading size2>
              Love life.Love yourself.
            </Heading>
            <Heading size3>
              Love life.Love yourself.
            </Heading>
            <Heading size4>
              Love life.Love yourself.
            </Heading>
            <Heading size5>
              Love life.Love yourself.
            </Heading>
            <Heading size6>
              Love life.Love yourself.
            </Heading>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Text size1>
              Love life.Love yourself.
            </Text>
            <Text size2>
              Love life.Love yourself.
            </Text>
            <Text size3>
              Love life.Love yourself.
            </Text>
            <Text size4>
              Love life.Love yourself.
            </Text>
            <Text size5>
              Love life.Love yourself.
            </Text>
            <Text size6>
              Love life.Love yourself.
            </Text>
            <Text size7>
              Love life.Love yourself.
            </Text>
            <Text size8>
              Love life.Love yourself.
            </Text>
          </Container>
        </Section>

        <Section size3>
          <Container size4>
            <Divider vertical size3></Divider>
          </Container>
        </Section>

        <Section size3>
          <Container size3>
            <Grid cols2>
              <Text size5>
                It would have been Hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size5>
                It would have been Hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size5>
                It would have been Hilarious if Chris Tucker came out at the end!!!!
              </Text>
              <Text size5>
                It would have been Hilarious if Chris Tucker came out at the end!!!!
              </Text>
            </Grid>
          </Container>
        </Section>

        <ButtonSelection></ButtonSelection>
        <Hero></Hero>
        <CodeExport></CodeExport>
      </div>
    );
  }
}

export default App;
