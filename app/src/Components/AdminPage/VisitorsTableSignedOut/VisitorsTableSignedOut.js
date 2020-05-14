import React from "react";
import '../VisitorsTableSignedIn/visitorsTable.css';
const columnHeader = ['Name', 'Company', 'Date', 'Time In', 'Time Out'];


class VisitorsTableSignedOut extends React.Component {
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
        const url = localStorage.getItem('apiUrl') + 'api/signedOutVisitors';
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
                    this.props.updateResponse('No visitors currently signed Out');
                }
                localStorage.removeItem('bearerToken')
            })
    };

    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage.Data;

        for(let i = 0; i < tableData.length; i++) {
            let timeOfSignIn = tableData[i].TimeOfSignIn;
            let timeOfSignOut = tableData[i].TimeOfSignOut;
            timeOfSignIn = timeOfSignIn.substring(0,5);
            timeOfSignOut = timeOfSignOut.substring(0,5);
            result.push(
                <tr key={i} className="d-flex">
                    <td key={tableData[i].Name} className="col-3">{tableData[i].Name}</td>
                    <td key={tableData[i].Company} className="col-3">{tableData[i].Company}</td>
                    <td key={tableData[i].Company} className="col-2">{tableData[i].DateOfVisit}</td>
                    <td key={timeOfSignIn} className="col-2">{timeOfSignIn}</td>
                    <td key={timeOfSignOut} className="col-2">{timeOfSignOut}</td>
                </tr>
            )
        }
        return result;
    };

    render() {
        return (
            <div className="col-12 visitorsTable">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr className="d-flex">
                        <th key="Name" className="col-3">Name</th>
                        <th key="Company" className="col-3">Company</th>
                        <th key="Date" className="col-2">Date</th>
                        <th key="Time in" className="col-2">Time in</th>
                        <th key="Time out" className="col-2">Time out</th>
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

export default VisitorsTableSignedOut;