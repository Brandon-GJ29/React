export default function TabButton({children,onSelect, inSelected}){
    

    return (<li>
            <button className={inSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>);
}