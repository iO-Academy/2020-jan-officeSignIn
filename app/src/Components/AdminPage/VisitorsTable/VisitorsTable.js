import React from "react";
import './visitorsTable.css';
import visitorPackage from './visitorPackage';
const columnHeader = ['Name', 'Company', 'Time Signed In'];

class VisitorsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorPackage: visitorPackage
        }

    }

    //Make sure to include authentication in HEADERS
    // fetchVisitors = async () => {
    //     let response = await fetch('http://localhost:8080/api/admin', {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }
    //     });
    //
    //     let responseData = await response.json();
    //     this.setState({visitorPackage: responseData});
    //     console.log(this.state.visitorPackage);
    //     // this.generateRows();
    // };
    
    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage.Data;

        for(var i = 0; i < tableData.length; i++) {
            result.push(
                <tr key={i} data-id={tableData[i].id}>
                    <td key={tableData[i].Name}>{tableData[i].Name}</td>
                    <td key={tableData[i].Company}>{tableData[i].Company}</td>
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

    render() {
        return (
            <div className="col-12 visitorsTable">
                <table className="table table-bordered table-hover">
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