import { FaAngleRight } from "react-icons/fa6";
import { useMultiState } from "../../lib";
import { IMenu } from "../../lib/interfaces"
import { FaAngleDown } from "react-icons/fa";

interface IProps{
    menu:IMenu;
    isSelected:boolean;
    onMenuSelect?:()=>void;
}

interface IState{
    isExpanded:boolean;
}

export function SingleMenu(props:IProps){
    const [state,setState] = useMultiState<IState>({isExpanded:false});
    
    return (
        <div className={`docs-menu-item ${props.isSelected ? "selected" : ""}`} onClick={()=> props.onMenuSelect?.()}>
            <div>
                {!!props.menu.subMenus.length ?
                (<span className="docs-menu-toggle" onClick={()=> setState({isExpanded:!state.isExpanded})}>
                    <span>{props.menu.name}</span>
                    <span>{state.isExpanded ?<FaAngleDown />: <FaAngleRight />}</span>                               
                </span>
                )
                :
                <a href={props.menu.url} className="docs-menu-link">{props.menu.name}</a>
            }                
            </div>
            {!!props.menu.subMenus.length && state.isExpanded && (
                <div className="docs-submenu">
                    {props.menu.subMenus.map(sm=>(
                        <SingleMenu key={sm.name} menu={sm} isSelected={props.isSelected} />
                    ))}
                </div>
            )}
        </div>
    )
}