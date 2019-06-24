import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Image } from '@tarojs/components'
import './index.css'

export default class FlexBox extends Component {
  static propTypes = {
    listItems: PropTypes.array
  }

  static defaultProps = {
    listItems: []
  }

  constructor(props) {
    super(props)   
  }

  render() {
    let { listItems } = this.props
    return (
      <View className='box'>
      { listItems.map((item, index) => (
        <View className='box-item' key={index}>
          <Image src={item.img} className='img'></Image>
          <View>{item.text}</View>
        </View>
        ))
      }
      </View>  
    )
  }
}