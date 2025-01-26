
interface IProps{
    serial:number;
    imageUrl?:string;
    title:string;
    price:string;
    description:string;
    website:string;
}
export function GitClientItem(props:IProps){
    return <li>
    {!!props.imageUrl && <img width={30} height={'auto'}
      src={props.imageUrl}
      alt={`${props.title} logo`}
    />}
    <h3>{props.serial} .{props.title}</h3>
    <p>
        <strong>Website:</strong> <a target="_blank" href={props.website}>{props.website}</a>
    </p>
    <p>
      <strong>Price:</strong> {props.price}
    </p>
    <p><strong>OS Support:</strong> Windows, Mac, & Linux</p>
    <p>
      <strong>Description:</strong> {props.description}
    </p>
  </li>
}