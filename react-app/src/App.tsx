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

  
  return <Card>
    <CardBody title='Hola mundo' text='Este es el texto'></CardBody>
    { list.length !== 0 ? ( 
  <List data={ list } onSelect={ handleSelect } /> ) : ( 'No hay contenido') }
  </Card>
}

export default App;