import Card, { CardBody } from './components/Card';
import { List } from './components/List';

function App() {

  const list = [
    'Goku',
    'Tanjiro',
    'Eren'
  ]

  return <Card>
    <CardBody title='Hola mundo' text='Este es el texto'></CardBody>
    <List data={ list }/>
  </Card>
}

export default App;