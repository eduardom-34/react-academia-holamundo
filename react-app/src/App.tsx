import Card, { CardBody } from './components/Card';
import { List } from './components/List';

function App() {

  const list = [
    'Goku',
    'Tanjiro',
    'Eren'
  ]

  const handleSelect = (elemento: string) => {
    console.log('imprimiendo', elemento);
  }
  const handleSelect2 = (elemento: string) => {
    console.log('mostrando', elemento);
  }

  return <Card>
    <CardBody title='Hola mundo' text='Este es el texto'></CardBody>
    <List data={ list } onSelect={ handleSelect } />
    <List data={ list } onSelect={ handleSelect2 } />
  </Card>
}

export default App;