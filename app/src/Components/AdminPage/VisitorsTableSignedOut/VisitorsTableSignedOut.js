import React from "react";
import '../VisitorsTableSignedIn/visitorsTable.css';

class VisitorsTableSignedOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorPackage: {
                "Data": []
            },
            bearerToken: localStorage.getItem('bearerToken'),
            appUrl: localStorage.getItem('appUrl'),
            signedOutTableVisible: 'd-none'
        };
    }

    componentDidMount() {
        this.fetchVisitors();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.signedOutTableVisible !== this.props.signedOutTableVisible) {
            if (this.props.signedOutTableVisible) {
                this.setState({signedOutTableVisible: 'd-block'})
            } else if (!this.props.signedOutTableVisible) {
                this.setState({signedOutTableVisible: 'd-none'})
            }
        }
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
            let dateOfVisit = this.reformatDateOfVisit(tableData[i].DateOfVisit);

            timeOfSignIn = timeOfSignIn.substring(0,5);
            timeOfSignOut = timeOfSignOut.substring(0,5);

            result.push(
                <tr key={i} className="d-flex">
                    <td className="col-3">{tableData[i].Name}</td>
                    <td className="col-3">{tableData[i].Company}</td>
                    <td className="col-2">{dateOfVisit}</td>
                    <td className="col-2">{timeOfSignIn}</td>
                    <td className="col-2">{timeOfSignOut}</td>
                </tr>
            )
        }
        return result;
    };

    reformatDateOfVisit = (originalDateFormat) => {
        let yearMonthDay = originalDateFormat.split('-');
        let permutation = [2, 1, 0];
        let dayMonthYear = [];

        permutation.forEach((i) => {
            dayMonthYear.push(yearMonthDay[i])
        });
        return dayMonthYear.join('/');
    };

    render() {
        const signedOutTableClass = 'col-12 visitorsTable ' + this.state.signedOutTableVisible;
        return (
            <div className={signedOutTableClass}>
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