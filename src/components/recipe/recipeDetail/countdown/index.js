import React, { Component } from "react"
import PropTypes from 'prop-types'
import Alarm from '../../../../sounds/Wecker-sound.mp3'
export default class Countdown extends Component {
    constructor(props) {
        super(props);
        this.url = Alarm
        this.audio = new Audio(this.url)
      }
    static propTypes = {
        color: PropTypes.string,
        backgroundColor: PropTypes.string,
        size: PropTypes.number,
        hideDay: PropTypes.bool,
        hideHours: PropTypes.bool,
        onEnd: PropTypes.func,
    }

    static defaultProps = {
        color: '#000',
        backgroundColor: '#fff',
        size: 30,
        hideDay: true,
        hideHours: true, //will be reassigne to show hours
    }
    state = {
        count: this.props.cookingMinutes ? this.props.cookingMinutes * 60 : 0 ,
        isStarted: false,
        isPaused: false,
        setTimerButton: true,
        isVisible: true,
        invisible: 'none',
        play: false
    }

    componentWillUnmount() {
        clearInterval(this.intervalReference)
    }

    myTimer = () => {
        this.intervalReference = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount > 1 && this.state.isStarted && newCount
            })
        }, 1000)
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

    handleProcrastinateAlarm = (e) => {
        this.audio.pause()
        this.setState({count: e.target.value * 60})
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

    format = time => {
        const {
            color,
            backgroundColor,
            size,
            hideDay,
        } = this.props
        const { count, setTimerButton, isStarted, isVisible } = this.state
        let showHours  = this.props.hideHours
        showHours = count < 3600 && setTimerButton ? false : true

        let seconds = time % 60;
        let minutes = Math.floor(time / 60) % 60;
        let hours = Math.floor(time / 3600) % 24;
        let day = Math.floor(time / 86400);
        day = day.toString().length === 1 ? `0${day}` : day;
        minutes = minutes.toString().length === 1   ? `0${minutes}` : minutes
        seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds
        hours = hours.toString().length === 1 ? `0${hours}` : hours;
        isStarted
        && !count
        && this.audio.play()

        return (
            <div style={ {fontSize: `${size}px`} }>
                {!hideDay && (
                    <span style={{
                        color,
                        backgroundColor,
                        display: !isVisible && 'none'
                        }}>
                    {day}
                  </span>
                        )}
                        { !hideDay  && <span>:</span> }
                        { showHours && (
                            <span
                                style={{
                                    color,
                                    backgroundColor,
                                    display: !isVisible && 'none'
                                }}
                            >
                    { hours }
                  </span>
                        )}
                        { showHours && <span>:</span>}
                        <span style={{
                            color,
                            backgroundColor,
                            display: !isVisible && 'none'
                            }}>
                  {minutes}
                </span>
                        {setTimerButton && <span>:</span>}
                        <span style={{
                            color,
                            backgroundColor,
                            display: !isVisible  || !setTimerButton && 'none'

                        }}>
                  {seconds}
                </span>
            </div>
        );
    };

    render() {
        const { count, isPaused, isStarted } = this.state;
        const { className } = this.props
        return (
            <div style={{position: 'relative'}} >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        border: '3px gray solid',
                        borderRadius: '10px',
                        position: 'absolute',
                        top: '0',
                        right: '30%',
                        background: 'white',
                        zIndex: '10'
                    }}
                className={`root-react-component-countdown-timer ${className}`}>
                <div>{this.format(count)}</div>
                <div className='center'>
                    {
                        this.state.isStarted
                        && count !== 0
                        && !isPaused
                        && <button
                                style={{ width: '100%'}}
                                onClick={this.handlePause}
                                className='btn-small grey'
                            >Pause
                            </button>
                    }

                    { this.state.setTimerButton &&
                        <button
                            style={{width: '100%', minWidth: '100%'}}
                            onClick={ this.handleSetTimer }
                            className='btn-small grey'
                        >Set Timer
                        </button>
                    }

                    {
                        !this.state.setTimerButton &&
                        <>
                           <div style={{display: 'flex', flexDirection: 'column'}}>
                               <div style={{display:" flex"}}>
                                    <label className='center'>Hour
                                        <div style={{display: 'flex'}}>
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
                                        <div style={{display: 'flex'}}>
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
                                {
                                    this.props.cookingMinutes &&
                                    <button onClick={this.handleSetCookingTime} className='btn-small grey'>Cooking time</button>
                                }
                                { this.state.count > 0 &&
                                    <button onClick={this.handleReset} className='btn-small grey sm'>Reset</button>
                                }

                           </div>
                        </>
                    }
                       {
                        !isStarted && count > 0
                        && <button style={{ width: '100%'}} onClick={this.handleStart} className='btn-small grey'>Start</button>
                    }
                </div>
                {
                    this.state.isStarted
                    && !count
                    && <div>The time is over!!!</div>
                    && <>
                            <button
                                style={{width: '100%'}}
                                onClick={() => {
                                this.setState({isStarted: !isStarted})
                                this.audio.pause()}} class="btn red">stop</button>
                            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                                <button value='5' onClick={ this.handleProcrastinateAlarm } className="btn-small grey">+ 5 min</button>
                                <button value='10' onClick={ this.handleProcrastinateAlarm } className="btn-small grey">+ 10 min</button>
                                <button value='15' onClick={ this.handleProcrastinateAlarm } className="btn-small grey">+ 15 min</button>
                                <button value='30' onClick={ this.handleProcrastinateAlarm } className="btn-small grey">+ 30 min</button>
                            </div>
                        </>
                }
            </div>
            </div>
        );
    }
}









