import React from 'react';


class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
       this.setState({
           editMode: true
       })
    };

    deactivateEditMode = () => {
       this.setState({
           editMode: false
       });
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChenge = (e) => {
        this.setState({status : e.currentTarget.value});
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
        }
    }

    render() {
        console.log("render");
        return (
            <div>
                { !this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status  || "----" }</span>
                </div>
                }
                { this.state.editMode &&
                <div>
                    <input type="text" onChange={this.onStatusChenge} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}


export default Status;