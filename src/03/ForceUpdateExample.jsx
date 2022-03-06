import React, { Component } from 'react';

class ForceUpdateExample extends Component {
    
    constructor(props) {
        super(props);

        this.loading = true;
        this.formData = 'no data';

        // 이후 콜백 함수를 다를 때 bind를 선언하는 부분에 대해 다룹니다.
        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new data';

        this.loading = false;
        this.forData = data + this.formData;
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {/* state 데이터는 this.state로 접근 가능합니다. */}
                <span>로딩중: {String(this.loading)}</span>
                <span>결과: {this.formData}</span>
            </div>
        );
    }
}

export default ForceUpdateExample;