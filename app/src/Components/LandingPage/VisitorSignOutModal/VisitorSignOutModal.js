import React from "react";
import './VisitorSignOutModal.css'
const columnHeader = ['Name', 'Time Signed In'];

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
        let tableData = this.state.visitorPackage.Data;

        for(var i = 0; i < tableData.length; i++) {
            let timeOfSignIn = tableData[i].TimeOfSignIn;
            timeOfSignIn = timeOfSignIn.substring(0,5);
            result.push(
                <tr key={i} data-id={tableData[i].id}>
                    <td key={tableData[i].Name}>{tableData[i].Name}</td>
                    {/*<td key={tableData[i].Company}>{tableData[i].Company}</td>*/}
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
