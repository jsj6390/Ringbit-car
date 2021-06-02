input.onButtonPressed(Button.A, function () {
    if (전원 == 0) {
        전원 = 1
        basic.showNumber(전원)
    } else {
        전원 = 0
        basic.showNumber(전원)
    }
})
function _break () {
    if (전원 == 0) {
        RingbitCar.brake()
        basic.showIcon(IconNames.Angry)
    }
}
function 라인트레이서 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2) && 전원 == 1) {
        RingbitCar.freestyle(35, 0)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1) && 전원 == 1) {
        RingbitCar.freestyle(0, 35)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0) && 전원 == 1) {
        RingbitCar.freestyle(50, 50)
    }
}
function 위치찾기 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3) && 전원 == 1) {
        RingbitCar.freestyle(10, 10)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 20)
    } else {
        RingbitCar.brake()
    }
}
let 전원 = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
전원 = 0
basic.showNumber(전원)
basic.forever(function () {
    라인트레이서()
    위치찾기()
    _break()
})
