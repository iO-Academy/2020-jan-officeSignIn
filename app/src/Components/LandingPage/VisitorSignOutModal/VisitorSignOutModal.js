import React from "react";
import './VisitorSignOutModal.css'
const columnHeader = ['Name', 'Time Signed In', ''];

class VisitorSignOutModal extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            modalClass: this.props.signOutModalVisible ? 'visible' : 'hidden',
            visitorPackage: this.props.dataForSignOutModal,
            response: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.signOutModalVisible !== this.props.signOutModalVisible) {
            this.determineVisibleState()
        }
        if (prevProps.dataForSignOutModal !== this.props.dataForSignOutModal) {
            console.log(this.props.dataForSignOutModal);
            this.setState({visitorPackage: this.props.dataForSignOutModal})
        }
    }

    determineVisibleState () {
        if(this.props.signOutModalVisible) {
            this.setState({modalClass: 'visible'})
        } else {
            this.setState({modalClass: 'hidden'})
        }
    }

    generateRows = () => {
        let result = [];
        if (this.state.visitorPackage.length > 1) {
            let tableData = this.state.visitorPackage;

            for(var i = 0; i < tableData.length; i++) {
                let timeOfSignIn = tableData[i].TimeOfSignIn;
                timeOfSignIn = timeOfSignIn.substring(0,5);
                result.push(
                    <tr key={i} data-id={tableData[i].id}>
                        <td key={tableData[i].Name}>{tableData[i].Name}</td>
                        <td key={timeOfSignIn}>{timeOfSignIn}</td>
                        <td className="text-danger tableSignOutBtn"
                            data-id={tableData[i].id}
                            onClick={this.handleSignOut}>Sign Out
                        </td>
                    </tr>
                )
            }
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

    handleSignOut = async (e) => {
        let data = {
            "id": e.target.dataset.id
        };

        await this.handleFetch(
            localStorage.getItem('apiUrl') + 'api/visitorSignOut',
            'PUT',
            data
        );

        console.log(data);

        // After handleFetch completed, display message on modal - success or failure,
        // and send you back after 3 seconds to login page if success.

    };

    updateResponse = (newResponse) => {
        setTimeout(()=> {
            this.clearResponse()
        }, 3000);
        this.setState({response : newResponse})
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
        console.log(responseData)
        // this.props.updateResponse(responseData.Message);
    };

    render() {
        let visibleState = 'signOutModal ' + this.state.modalClass;
        console.log(visibleState)
        return (
            <div className={visibleState}>
                <span className="instructions">When did you sign in?</span>
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
                <button className="closeModalBtn" onClick={this.props.updateSignOutModalVisible}>X</button>
                <div className="responseMessage">{this.state.response}</div>
            </div>
        )
    }

}

export default VisitorSignOutModal;
