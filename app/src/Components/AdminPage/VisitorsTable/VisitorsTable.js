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
            bearerToken: localStorage.getItem('bearerToken'),
            appUrl: localStorage.getItem('appUrl')
        };
    }

    componentDidMount() {
        this.fetchVisitors();
    }

    fetchVisitors = () => {
        const url = localStorage.getItem('apiUrl') + 'api/admin';
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })
        .then(data=>data.json())
        .then((data)=>{
            if (data.message === null || data.message ==='Invalid token' ||
                data.message === 'Malformed token' || data.message === 'Token has expired' ||
                data.message === 'Token error' || data.message === 'No token received') {
                localStorage.removeItem('bearerToken');
                window.location.replace(this.state.appUrl)
            }
            this.setState({
                visitorPackage: data
            });
            if (!data.Data.length > 0) {
                this.props.updateResponse(data.Message);
            }
            localStorage.removeItem('bearerToken')
        })
    };

    generateHeader = () => {
        let result = [];
        for(let i = 0; i < columnHeader.length; i++) {
            result.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
        }
        return result;
    };

    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage.Data;

        for(let i = 0; i < tableData.length; i++) {
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

    handleSignOut = async (e) => {
        let data = {
            "id": e.target.dataset.id
        };

        let responseData = await this.handleFetch(
            localStorage.getItem('apiUrl') + 'api/visitorSignOut',
            'PUT',
            data
        );

        this.props.updateSignOutResponse(responseData.Message);
        this.fetchVisitors()
    };

    handleFetch = async (url, requestMethod, dataToSend) => {
        let requestData = JSON.stringify(dataToSend);

        const response = await fetch(url, {
            method: requestMethod.toUpperCase(),
            body: requestData,
            headers: {
                "Content-Type" : "application/json"
            }
        });

        let responseData = await response.json();
        this.props.updateResponse(responseData.Message);
        return responseData;
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