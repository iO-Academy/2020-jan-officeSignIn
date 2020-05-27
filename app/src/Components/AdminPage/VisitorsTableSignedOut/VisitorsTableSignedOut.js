import React from "react";
import '../VisitorsTableSignedIn/visitorsTable.css';
import InfiniteScroll from "react-infinite-scroll-component";

class VisitorsTableSignedOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visitorPackage: [],
            lastFetchedVisitors: [],
            bearerToken: localStorage.getItem('bearerToken'),
            appUrl: localStorage.getItem('appUrl'),
            signedOutTableVisible: 'd-none',
            endMessageVisibility: 'd-block',
            hasMore: true
        };
    }

    componentDidMount() {
        this.initialTableRenderData()
    }

    initialTableRenderData = async () => {
        const count = 15;
        let start = await this.highestSignedOutVisitorId() + 1
        let firstBatch = await this.fetchVisitors(count, start);
        let orderedPackage = this.reorderVisitorPackage(firstBatch)
        await this.setState({
            visitorPackage: orderedPackage,
            lastFetchedVisitors: orderedPackage
        })

        if (firstBatch.length < count) {
            this.setState({
                endMessageVisibility: 'd-none',
                hasMore: false
            })
        }
    }

    highestSignedOutVisitorId = async () => {
        let data = await this.getAllSignedOutVisitors()
        return parseInt(data[0].id)
    }

    getAllSignedOutVisitors = async () => {
        const url = localStorage.getItem('apiUrl') + '/api/signedOutVisitors';
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })
        data = await data.json()
        await this.checkAuthorisation(data)

        localStorage.removeItem('bearerToken')
        return data.Data
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.signedOutTableVisible !== this.props.signedOutTableVisible) {
            if (this.props.signedOutTableVisible) {
                this.setState({signedOutTableVisible: 'd-block'})
            } else if (!this.props.signedOutTableVisible) {
                this.setState({signedOutTableVisible: 'd-none'})
            }
        }

        if (prevProps.visitorSignedOut !== this.props.visitorSignedOut) {
            this.initialTableRenderData()
        }
    }

    fetchVisitors = async (count, start) => {
        const url = localStorage.getItem('apiUrl') +
            `api/signedOutVisitorsByBatch?count=${count}&start=${start}`;
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })
        data = await data.json()
        await this.checkAuthorisation(data)

        if (!data.Data.length > 0 && this.state.visitorPackage < 1) {
            this.props.updateResponse('No visitors currently signed Out');
        }
        
        localStorage.removeItem('bearerToken')
        return data.Data
    };

    checkAuthorisation = (data) => {
        if (data.message === null || data.message ==='Invalid token' ||
            data.message === 'Malformed token' || data.message === 'Token has expired' ||
            data.message === 'Token error' || data.message === 'No token received') {
            localStorage.removeItem('bearerToken');
            window.location.replace(this.state.appUrl)
        }
    }

    generateRows = () => {
        let result = [];
        let tableData = this.state.visitorPackage;

        for(let i = 0; i < tableData.length; i++) {
            let timeOfSignIn = tableData[i].TimeOfSignIn;
            let timeOfSignOut = tableData[i].TimeOfSignOut;
            let dateOfVisit = this.reformatDateOfVisit(tableData[i].DateOfVisit);

            timeOfSignIn = timeOfSignIn.substring(0,5);
            timeOfSignOut = timeOfSignOut.substring(0,5);

            result.push(
                <tr key={i} className="d-flex" data-id={tableData[i].id}>
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

    reorderVisitorPackage = (originalOrder) => {
        return originalOrder.sort((visitor_1, visitor_2) => {
            if (new Date(visitor_1.DateOfVisit) > new Date(visitor_2.DateOfVisit)) return -1;
            if (new Date(visitor_1.DateOfVisit) < new Date(visitor_2.DateOfVisit)) return 1;
            if (visitor_1.TimeOfSignOut > visitor_2.TimeOfSignOut) return -1;
            if (visitor_1.TimeOfSignOut < visitor_2.TimeOfSignOut) return 1;
        })
    }

    updateTable = async () => {
        const count = 15;
        const start = this.state.lastFetchedVisitors.slice(-1)[0].id;

        if (start < 2) {
            this.setState({hasMore: false})
        }

        let fetchedNextBatch = await this.fetchVisitors(count, start)
        this.updateVisitorPackage(fetchedNextBatch)
        console.log(this.state.visitorPackage)
        console.log(start)
    }

    updateVisitorPackage = (data) => {
        let orderedPackage = this.reorderVisitorPackage(this.state.visitorPackage.concat(data))
        setTimeout(() => {
            this.setState({
                visitorPackage: orderedPackage,
                lastFetchedVisitors: data
            })
        }, 750)
    }

    render() {
        const signedOutTableClass = 'col-12 visitorsTable vSignedOutTable ' + this.state.signedOutTableVisible;
        const endMessageClass = 'endMessage ' + this.state.endMessageVisibility;
        return (
            <div className={signedOutTableClass}>
                <InfiniteScroll
                    dataLength={this.state.visitorPackage.length}
                    next={this.updateTable}
                    hasMore={this.state.hasMore}
                    loader={<h5>loading...</h5>}
                    endMessage={
                        <h5 className={endMessageClass}>
                            <b>You have reached the end, no more signed out visitors logged.</b>
                        </h5>
                    }
                >
                    <table className="table visitorSignedOutTable table-hover">
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
                </InfiniteScroll>
            </div>
        );
    }
}

export default VisitorsTableSignedOut;