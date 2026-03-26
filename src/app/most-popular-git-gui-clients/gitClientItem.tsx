
interface IProps{
    serial:number;
    imageUrl?:string;
    title:string;
    price:string;
    description:string;
    website:string;
    keyFeatures?:string[];
    firstReleaseYear?:number;
    iconWidth?:number;
    bestFor?:string;
    pros?:string[];
    cons?:string[];
    os?:string;
}
export function GitClientItem(props:IProps){
    return <li>
    {!!props.imageUrl && <img width={props.iconWidth || 30} height={'auto'}
      src={props.imageUrl}
      alt={`${props.title} logo`}
    />}
    <h3>{props.serial}. {props.title}</h3>
    {props.bestFor && (
      <p className="best-for-label"><strong>⭐ {props.bestFor}</strong></p>
    )}
    <p className="pb-1">
        <strong>Website:</strong> <a target="_blank" rel="noopener noreferrer" href={props.website}>{props.website}</a>
    </p>
    <p className="pb-1">
      <strong>Price:</strong> {props.price}
    </p>
    <p className="pb-1"><strong>OS Support:</strong> {props.os || 'Windows, Mac, & Linux'}</p>
    {props.firstReleaseYear && (
      <p className="pb-1">
        <strong>First Released:</strong> {props.firstReleaseYear}
      </p>
    )}
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
    {(props.pros || props.cons) && (
      <div className="pros-cons">
        {props.pros && props.pros.length > 0 && (
          <div className="pros">
            <strong>Pros:</strong>
            <ul>
              {props.pros.map((pro, i) => <li key={i}>✅ {pro}</li>)}
            </ul>
          </div>
        )}
        {props.cons && props.cons.length > 0 && (
          <div className="cons">
            <strong>Cons:</strong>
            <ul>
              {props.cons.map((con, i) => <li key={i}>❌ {con}</li>)}
            </ul>
          </div>
        )}
      </div>
    )}
  </li>
}