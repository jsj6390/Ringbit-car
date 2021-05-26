input.onButtonPressed(Button.A, function () {
    if (전원 == 0) {
        전원 = 1
    } else {
        전원 = 0
    }
})
function 라인트레이서 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2) && 전원 == 1) {
        RingbitCar.freestyle(40, 0)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1) && 전원 == 1) {
        RingbitCar.freestyle(0, 40)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0) && 전원 == 1) {
        RingbitCar.freestyle(50, 50)
    }
}
function 위치찾기 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3) && 전원 == 1) {
        RingbitCar.freestyle(10, 10)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 10)
    }
}
let 전원 = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
전원 = 0
basic.forever(function () {
    라인트레이서()
    위치찾기()
})
