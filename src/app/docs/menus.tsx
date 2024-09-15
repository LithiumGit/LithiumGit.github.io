import { DocumentMenus, useMultiState } from "../../lib";
import { IMenu } from "../../lib/interfaces"

interface IState{
    selectedMenu:IMenu;
}

export function DocsMenus(){
    const [state,setState] = useMultiState<IState>({selectedMenu:DocumentMenus.list[0]});
    return (
        <div>
            {DocumentMenus.list.map(m=>(
                <div key={m.url}>
                    <a href={m.url}>{m.name}</a>
                </div>
            ))}
        </div>
    )
}