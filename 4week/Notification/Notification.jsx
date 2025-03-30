import React from "react";

// 인라인 스타일 정의
const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);
        // 초기 state 정의(확장시 활용 가능)
        this.state = {};
    }
    
    // 컴포넌트가 마운트된 직후 호출되는 라이프사이클 메서드
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    // 컴포넌트가 업데이트된 후 호출되는 라이프사이클 메서드
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    // 컴포넌트가 언마운트되기 직전에 호출되는 라이프사이클 메서드
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }
    
    // 렌더링 함수: 컴포넌트의 UI를 정의하고 반환합니다.
    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
