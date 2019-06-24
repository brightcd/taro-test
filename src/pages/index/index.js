import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Clock from './clock/index'
import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGoWptIndex(e) {
    Taro.navigateTo({ url: '/pages/wpt/index' });
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Clock></Clock>
        <Button type='primary' onClick={this.handleGoWptIndex}>跳转微拍堂首页</Button>
      </View>
    )
  }
}
