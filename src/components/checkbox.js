import React, { Component } from 'react';

// Styling
import '../style/components/checkbox.css';

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.state = { checked: false }
    }

    onChangeAction() {
       this.setState({ checked: !this.state.checked })
    }

    render() {
        return (
            <label className="container">{this.props.name}
                <input type="checkbox" onChange={this.onChangeAction.bind(this)} checked={this.state.checked} />
                    <span className="checkmark" />
            </label>
        );
    }
}

export default Checkbox;