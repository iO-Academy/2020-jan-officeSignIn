import React from "react";
import './visitorsTable.css';
const columnHeader = ['Name', 'Company', 'Date', 'Time Signed In'];

class VisitorsTable extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    generateHeader = () => {
        let result = [];
        for(var i = 0; i < columnHeader.length; i++) {
            result.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
        }
        console.log(result);
        return result;
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {this.generateHeader()}
                        </tr>
                    </thead>
                    <tbody>
                    {/*{this.generateRows}*/}
                        {/*<tr>*/}
                        {/*    <td>Roger Rabit</td>*/}
                        {/*    <td>Pizza Hut</td>*/}
                        {/*    <td>10:12</td>*/}
                        {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VisitorsTable;