function 라인트레이서 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(40, 0)
        basic.pause(100)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, 40)
        basic.pause(100)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0)) {
        RingbitCar.freestyle(50, 50)
        basic.pause(100)
    }
}
function 위치찾기 () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3)) {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 10)
        RingbitCar.freestyle(10, 10)
    }
}
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.forward()
basic.forever(function () {
    라인트레이서()
    위치찾기()
    RingbitCar.freestyle(70, 70)
})
