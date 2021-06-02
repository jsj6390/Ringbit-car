def on_button_pressed_a():
    global 전원
    if 전원 == 0:
        전원 = 1
        basic.show_number(전원)
    else:
        전원 = 0
        basic.show_number(전원)
input.on_button_pressed(Button.A, on_button_pressed_a)

def _break():
    if 전원 == 0:
        RingbitCar.brake()
        basic.show_icon(IconNames.ANGRY)
def 라인트레이서():
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_2) and 전원 == 1:
        RingbitCar.freestyle(35, 0)
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_1) and 전원 == 1:
        RingbitCar.freestyle(0, 35)
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_0) and 전원 == 1:
        RingbitCar.freestyle(50, 50)
def 위치찾기():
    if RingbitCar.tracking(RingbitCar.TrackingStateType.TRACKING_STATE_3) and 전원 == 1:
        RingbitCar.freestyle(10, 10)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.RIGHT, 20)
    else:
        RingbitCar.brake()
전원 = 0
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
전원 = 0
basic.show_number(전원)

def on_forever():
    라인트레이서()
    위치찾기()
    _break()
basic.forever(on_forever)
