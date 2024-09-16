import { FaAngleRight } from "react-icons/fa6";
import { useMultiState } from "../../lib";
import { IMenu } from "../../lib/interfaces"
import { FaAngleDown } from "react-icons/fa";

interface IProps{
    menu:IMenu;
}

interface IState{
    isExpanded:boolean;
}

export function SingleMenu(props:IProps){
    const [state,setState] = useMultiState<IState>({isExpanded:false});

    return (
        <div className="py-1 hover w-100">
            <div>
                {!!props.menu.subMenus.length ?
                (<span onClick={()=> setState({isExpanded:!state.isExpanded})}>
                    <span>{props.menu.name}</span>
                    <span>{state.isExpanded ?<FaAngleDown />: <FaAngleRight />}</span>                               
                </span>
                )
                :
                <a href={props.menu.url} className="d-flex w-100">{props.menu.name}</a>
            }                
            </div>
            {!!props.menu.subMenus.length && state.isExpanded && (
                <div className="ps-2">
                    {props.menu.subMenus.map(sm=>(
                        <SingleMenu key={sm.name} menu={sm} />
                    ))}
                </div>
            )}
        </div>
    )
}