import React from "react";
import Notification from "./Notification";

// 해당 배열에 정의된 알림들이 순차적으로 화면에 출력
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

// 타이머 변수를 전역 변수로 선언
// setInterval 및 clearInterval에서 사용
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        // 초기 state는 notification 배열로 지정(처음에는 비어있음)
        this.state = {
            notifications: [],
        };
    }
    componentDidMount() {
        const { notifications } = this.state;
        // 1초마다 실행되는 타이머 설
        timer = setInterval(() => {
            // 예약된 알림의 개수보다 현재 notifications의 개수가 적으면 실행
            if (notifications.length < reservedNotifications.length) {
                // 현재 notifications의 길이를 인덱스로 사용하여 예약된 알림을 추가
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 모든 알림을 다 표시한 경우, notifications 배열을 초기화
                this.setState({
                    notifications: [],
                });
                // 타이머 정지
                clearInterval(timer);
            }
        }, 1000);
    }
    // 컴포넌트가 언마운트되기 전에 호출되는 라이프사이클 메서드
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    // render 메서드: 화면에 렌더링할 UI 정의
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}
export default NotificationList;
