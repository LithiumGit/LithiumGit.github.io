
interface IProps{
    serial:number;
    imageUrl?:string;
    title:string;
    price:string;
    description:string;
    website:string;
    keyFeatures?:string[];
}
export function GitClientItem(props:IProps){
    return <li>
    {!!props.imageUrl && <img width={30} height={'auto'}
      src={props.imageUrl}
      alt={`${props.title} logo`}
    />}
    <h3>{props.serial} .{props.title}</h3>
    <p className="pb-1">
        <strong>Website:</strong> <a target="_blank" href={props.website}>{props.website}</a>
    </p>
    <p className="pb-1">
      <strong>Price:</strong> {props.price}
    </p>
    <p className="pb-1"><strong>OS Support:</strong> Windows, Mac, & Linux</p>
    <p className="">
      <strong>Description:</strong> {props.description}
    </p>
    {props.keyFeatures && props.keyFeatures.length > 0 && (
      <div>
        <strong className="key-features-title">Key Features:</strong>
        <ul className="key-features-list">
          {props.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    )}
  </li>
}