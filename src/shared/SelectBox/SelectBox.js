import React, {Component} from 'react';
import Select from 'react-select';
import './SelectBox.scss'

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: null,
        }
    }
  
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }
    
    render () {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={this.props.options}
                styles={{
                    indicatorSeparator: base => ({
                        ...base,
                        display: 'none'
                    }),
                    container: 
                    base => ({
                        ...base,
                        width: this.props.width
                    })
                }}
                placeholder={this.props.placeholder}
                className="select"
                classNamePrefix="react-select"
            />
        )
    }
}

export default SelectBox;