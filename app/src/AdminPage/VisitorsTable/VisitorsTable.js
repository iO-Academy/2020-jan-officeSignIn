import React from "react";
import './visitorsTable.css';
import visitorPackage from './visitorPackage';
const columnHeader = ['Name', 'Company', 'Date', 'Time Signed In'];

class VisitorsTable extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    generateRows = () => {
        let result = [];
        let tableData = visitorPackage.Data;

        for(var i = 0; i < tableData.length; i++) {
            result.push(
                <tr key={i} data-id={tableData[i].id}>
                    <td key={tableData[i].Name}>{tableData[i].Name}</td>
                    <td key={tableData[i].Company}>{tableData[i].Company}</td>
                    <td key={tableData[i].DateOfVisit}>{tableData[i].DateOfVisit}</td>
                    <td key={tableData[i].TimeOfSignIn}>{tableData[i].TimeOfSignIn}</td>
                </tr>
            )
        }
        return result;
    };

    generateHeader = () => {
        let result = [];
        for(var i = 0; i < columnHeader.length; i++) {
            result.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
        }
        return result;
    };

    //Async fetch to grab all data

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
                        {this.generateRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VisitorsTable;