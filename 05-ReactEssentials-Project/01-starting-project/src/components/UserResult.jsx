import { formatter } from "../util/investment";
export default function UserResult({ result}){ 
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
    return(
        <table id="result-table">
        <thead>
            <tr>
                <th>Year</th>
                <th> Investment Value</th>
                <th> Interest (year)</th>
                <th>Total interest</th>
                <th> Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(yearData => {
                const totalInterest = yearData.valueEndOfYear- yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear- totalInterest;
            return(
                <tr key= {yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                    
                </tr>
                );
            })}
        
        </tbody>
        </table>
        
    );
}