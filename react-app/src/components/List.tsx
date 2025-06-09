
type Props = {
  data: string[]
};

export const List = (props: Props) => {

  const { data } = props;

  return (
    <ul className="list-group">
      {data.map(elemento => (
        <li key={elemento} className="list-group-item">{ elemento }</li>

      ))}
    </ul>
  )
}
