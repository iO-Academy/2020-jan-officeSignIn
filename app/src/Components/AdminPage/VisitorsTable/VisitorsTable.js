import React from "react";
import './visitorsTable.css';
const columnHeader = ['Name', 'Company', 'Time In', 'Sign Out'];

class VisitorsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorPackage: {
                "Data": []
            },
            bearerToken: localStorage.getItem('bearerToken')
        };

        console.log(this.state.bearerToken)
    }

    componentDidMount() {
        this.fetchVisitors();
    }

    fetchVisitors = () => {
        const url = localStorage.getItem('apiUrl') + '/api/admin';
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })
        .then(data=>data.json())
        .then((data)=>{
            this.setState({
                visitorPackage: data
            })
        })
    };

    handleSignOut = async (e) => {
        let data = {
            "id": e.target.dataset.id
        };

        console.log(data);
    };

    //move fetch from signin form to somewhere I can access it here... context?

    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage.Data;

        for(var i = 0; i < tableData.length; i++) {
            let timeOfSignIn = tableData[i].TimeOfSignIn;
            timeOfSignIn = timeOfSignIn.substring(0,5);
            result.push(
                <tr key={i}>
                    <td key={tableData[i].Name}>{tableData[i].Name}</td>
                    <td key={tableData[i].Company}>{tableData[i].Company}</td>
                    <td key={timeOfSignIn}>{timeOfSignIn}</td>
                    <td className="text-danger tableSignOutBtn"
                        data-id={tableData[i].id}
                        onClick={this.handleSignOut}>Sign Out
                    </td>
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