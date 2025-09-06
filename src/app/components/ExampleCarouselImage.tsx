interface IProps{
    text:string;
    src:string
}

export function ExampleCarouselImage(props:IProps){
    return (
        <img style={{height:'auto',width:'95%'}} src={props.src} alt="image" />
    )
}