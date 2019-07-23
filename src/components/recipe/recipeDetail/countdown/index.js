import React, { Component } from "react"
import PropTypes from 'prop-types'
import Alarm from '../../../../sounds/Wecker-sound.zip'

export default class Countdown extends Component {
    static propTypes = {
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        size: PropTypes.number,
        hideDay: PropTypes.bool,
        hideHours: PropTypes.bool,
        onEnd: PropTypes.func,
    };

    static defaultProps = {
        color: '#000',
        backgroundColor: '#fff',
        size: 52,
        hideDay: true,
        hideHours: true, //will be reassigne to show hours
    };
        state = {
            count: this.props.cookingMinutes ?this.props.cookingMinutes * 60 : 0 ,
            isStarted: false,
            isPaused: false,
            setTimerButton: true,
            isVisible: true,
            visible: 'block',
            invisible: 'none',
            newTime: 0
        }

    componentWillUnmount() {
        clearInterval(this.intervalReference)
        // clearInterval(this.blinkInterval)
    }

    myTimer = () => {
        this.intervalReference = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount > 1 && this.state.isStarted && newCount
            })
        }, 1000)
    }
    blinkTimer = () => {
        this.blinkInterval = setInterval(() => {
            console.log(this.state.isVisible)
            this.setState({
                isVisible: !this.state.isVisible
            })
            clearInterval(this.blinkInterval)
        }, 300)
    }

    handleStart = () => {
        this.setState({
            isStarted: !this.state.isStarted,
            isPaused: false,
            setTimerButton: true
        })
        this.myTimer()
    }
    handleReset = () => {
        this.setState({
            isStarted: false,
            count: 0
        })
        clearInterval(this.intervalReference)
    }

    handleSetCookingTime = () => {
        this.setState({
            count: this.props.cookingMinutes * 60,
            isStarted: false,
            setTimerButton: true
        })
        clearInterval(this.intervalReference)
    }

    handlePause = () => {
        this.setState({
            isStarted: false,
            isPaused: true,
            count: this.state.count,
            setTimerButton: true
        })
        clearInterval(this.intervalReference)
    }

    handleCountdown = seconds => {
        this.setState({
            count: seconds,
        });
    }
    handleSetTimer = () => {
        this.handleReset()
        this.setState({
            setTimerButton: false,
            isPaused: false,

        })
    }
    handleNewTimer = (e) => {
        this.setState({
            setTimerButton: false
        })
        switch (e.target.id) {
            case 'hour+':
                return this.setState({
                    count: this.state.count + 3600
                })
            case 'hour-':
                return this.state.count >= 3600 &&
                this.setState({
                    count: this.state.count - 3600
                })
            case "minute-":
                return this.state.count >= 60 &&
                this.setState({
                    count: this.state.count - 60
                })
                case "minute+":
                    return this.setState({
                        count: this.state.count + 60
                    })
            default:
                return
        }

    }
    handleCounterMinuntesPlus= (e) => {
        console.log(e.target.value)
        this.setState({
            setMinutes: this.state.setMinutes + 60
        })
    }

    handleCounterMinuntesMinus= () => {
        this.state.setMinutes > 0 &&
        this.setState({
            setMinutes: this.state.setMinutes - 60
        })
    }


    format = time => {
        const {
            color,
            backgroundColor,
            size,
            hideDay,
        } = this.props

        let showHours  = this.props.hideHours
        showHours = this.state.count < 3600 && this.state.setTimerButton ? false : true

        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600) % 24;
        let day = Math.floor(time / 86400);
        day = day.toString().length === 1 ? `0${day}` : day;
        minutes = minutes.toString().length === 1   ? `0${minutes}` : minutes
        seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds
        hours = hours.toString().length === 1 ? `0${hours}` : hours;

        return (
            <div style={{fontSize: `${size}px`}}>
                {!hideDay && (
                    <span style={{
                        color,
                        backgroundColor,
                        display: !this.state.isVisible && 'none'
                        }}>
                    {day}
                  </span>
                        )}
                        {!hideDay  && <span>:</span>}
                        { showHours && (
                            <span
                                style={{
                                    color,
                                    backgroundColor,
                                    display: !this.state.isVisible && 'none'
                                }}>
                    {hours}
                  </span>
                        )}
                        { showHours && <span>:</span>}
                        <span style={{
                            color,
                            backgroundColor,
                            display: !this.state.isVisible && 'none'
                            }}>
                  {minutes}
                </span>
                        {this.state.setTimerButton && <span>:</span>}
                        <span style={{
                            color,
                            backgroundColor,
                            display: !this.state.isVisible  || !this.state.setTimerButton && 'none'

                        }}>
                  {seconds}
                </span>
            </div>
        );
    };

    render() {
        const { count } = this.state;
        const { className } = this.props
        return (
            <div >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        border: '3px gray solid',
                        borderRadius: '10px',
                        position: 'fixed',
                        top: '75%',
                        right: '10%',
                        background: 'white',
                        zIndex: '10'
                    }}
                className={`root-react-component-countdown-timer ${className}`}>
                <div>{this.format(count)}</div>
                <div>
                    { this.state.count > 0 &&
                        <button onClick={this.handleReset} className='btn-small grey sm'>Reset</button>
                    }
                    {
                        !this.state.isStarted && this.state.count > 0
                        && <button onClick={this.handleStart} className='btn-small grey'>Start</button>
                    }
                    {
                        this.state.isStarted
                        && <button onClick={this.handlePause} className='btn-small grey'>Pause</button>
                    }

                    { this.state.setTimerButton &&
                        <button onClick={ this.handleSetTimer } className='btn-small grey'>Set Timer</button>
                    }
                    {
                        !this.state.setTimerButton &&
                        <>
                           <div style={{display: 'flex', flexDirection: 'column'}}>
                               <div style={{display:" flex"}}>
                                    <label className='center'>Hour
                                        <div>
                                            <input
                                                onClick={ this.handleNewTimer }
                                                className='btn-small grey'
                                                value='+'
                                                id={'hour+'}
                                                type='button'
                                            />
                                            <input
                                                onClick={ this.handleNewTimer }
                                                className='btn-small grey'
                                                value='-'
                                                id={'hour-'}
                                                type='button'
                                            />
                                        </div>
                                    </label>
                                    <label className='center'>Minutes
                                        <div>
                                            <input
                                                onClick={ this.handleNewTimer }
                                                className='btn-small grey'
                                                value='+'
                                                id={'minute+'}
                                                type='button'
                                            />
                                            <input
                                                onClick={ this.handleNewTimer }
                                                className='btn-small grey'
                                                value='-'
                                                id={'minute-'}
                                                type='button'
                                            />
                                        </div>
                                    </label>
                                </div>

                               <button onClick={this.handleSetCookingTime} className='btn-small grey'>Cooking time</button>

                           </div>


                        </>
                    }
                </div>
            </div>
            </div>
        );
    }
}









