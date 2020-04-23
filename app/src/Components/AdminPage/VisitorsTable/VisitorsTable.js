import React from "react";
import './visitorsTable.css';
const columnHeader = ['Name', 'Company', 'Time Signed In'];

class VisitorsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorPackage: {
                "Data": []
            }
        };

        this.fetchVisitors();
    }

    fetchVisitors = () => {
        fetch('http://localhost:8080/api/admin')
            .then(data=>data.json())
            .then((data)=>{
                this.setState({
                    visitorPackage: data
                })
            })
    };

    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage.Data;

        for(var i = 0; i < tableData.length; i++) {
            let timeOfSignIn = tableData[i].TimeOfSignIn;
            timeOfSignIn = timeOfSignIn.substring(0,5);
            result.push(
                <tr key={i} data-id={tableData[i].id}>
                    <td key={tableData[i].Name}>{tableData[i].Name}</td>
                    <td key={tableData[i].Company}>{tableData[i].Company}</td>
                    <td key={timeOfSignIn}>{timeOfSignIn}</td>
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