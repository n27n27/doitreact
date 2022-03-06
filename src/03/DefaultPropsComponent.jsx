import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends Component {
    render() {
        let message1 = '';
        if(this.props.boolValue === false) {
            message1 = 'boolValue 기본값이 false입니다.';
        }
        let message2 = 'aa';
        if(this.props.boolValueWithoutDefault === true) {
            message2 = 'boolValueWithoutDefault 기본값이 false입니다';
        }
        return (
            <div className='message-container'>
                <div>{message1} </div>
                <span>{message2} </span>
            </div>
        );
    }
}

DefaultPropsComponent.propTypes = {
    boolValue: PropTypes.bool,
    boolValueWithoutDefault: PropTypes.bool,
}

// 기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
    boolValue: false,
    boolValueWithoutDefault: true,
};

export default DefaultPropsComponent;