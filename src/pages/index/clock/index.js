import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return (
      <View>
        <Text>当前时间是：</Text>
        <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    )
  }
}