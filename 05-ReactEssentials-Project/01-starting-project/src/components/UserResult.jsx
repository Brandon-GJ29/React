export default function UserResult({nameColum, result}){ 
    return(
        <table id="result-table">
        <thead>
            <tr>
                <th>{nameColum}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> {result} </td>
          
            </tr>
        </tbody>
        </table>
        
    );
}