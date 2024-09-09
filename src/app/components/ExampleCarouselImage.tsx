interface IProps{
    text:string;
    src:string
}

export function ExampleCarouselImage(props:IProps){
    return (
        <img style={{height:'75vh',width:'auto'}} src={props.src} alt="imgage" />
    )
}