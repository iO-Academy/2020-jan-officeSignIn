import React from "react";
import './VisitorSignOutModal.css'
import {Spring} from "react-spring/renderprops-universal";
const columnHeader = ['Name', 'Time Signed In', 'Sign Out'];

class VisitorSignOutModal extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            modalClass: this.props.signOutModalVisible ? 'visible' : 'hidden',
            visitorPackage: this.props.dataForSignOutModal,
            response: '',
            success: false,
            successTick: false,
            successTickVisible: 'hiddenOpacity'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.signOutModalVisible !== this.props.signOutModalVisible) {
            this.determineVisibleState()
        }

        if (prevProps.dataForSignOutModal !== this.props.dataForSignOutModal) {
            this.setState({visitorPackage: this.props.dataForSignOutModal})
        }

        if (prevState.successTick !== this.state.successTick) {
            if (this.state.successTick) {
                this.setState({successTickVisible: 'visible'})
            } else {
                this.setState({successTickVisible: 'hiddenOpacity'})
            }
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

        if (!this.state.success) {
            let responseData = await this.handleFetch(
                localStorage.getItem('apiUrl') + 'api/visitorSignOut',
                'PUT',
                data
            );

            if (responseData.Success) {
                setTimeout( () => {
                    setTimeout(() => {
                        this.toggleSuccessTick()
                    },400);
                    this.setSuccessTickHidden()
                }, 2000);
                this.toggleSuccessTick()
            }

        }

    };

    updateResponse = (newResponse) => {
        setTimeout(()=> {
            this.clearResponse();

            if (this.state.success) {
                this.setState({success: false});

                if (this.props.signOutModalVisible) {
                    this.props.updateSignOutModalVisible();
                }

            }
        }, 2000);
        this.setState({response: newResponse})
    };

    clearResponse = () => {
        this.setState({response : ''})
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
        if (responseData.Success) {
            this.setState({success: true});
        }
        this.updateResponse('');
        return responseData
    };

    toggleSuccessTick = () => {
        this.setState({successTick: !this.state.successTick})
    };

    setSuccessTickHidden = () => {
        this.setState({successTickVisible: 'hiddenOpacity'})
    };

    render() {
        const visibleState = 'signOutModal ' + this.state.modalClass;
        const successTickClass = 'successTick ' + this.state.successTickVisible;
        return (
            <div className={visibleState}>
                {!this.state.successTick ? (<div> </div>) : (
                    <Spring
                        from={{marginTop: -1000}}
                        to={{marginTop: 0}}
                    >
                        {props => (
                            <div  className={successTickClass} style={props}>
                                &#10004;
                            </div>
                        )}
                    </Spring>
                )}
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
                <div className="responseMessage responseMessageSuccess">{this.state.response}</div>
            </div>
        )
    }

}

export default VisitorSignOutModal;
