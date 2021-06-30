import React from 'react';


class Status extends React.Component {
    state = {
        editMode: false,
    };

    activateEditMode = () => {
       this.setState({
           editMode: !this.state.editMode
       })
    };

    render() {
        return (
            <div>
                { !this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                </div>
                }
                { this.state.editMode &&
                <div>
                    <input type="text" autoFocus onBlur={this.activateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}


export default Status;