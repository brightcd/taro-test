import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.css'

export default class Card extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  static defaultProps = {
    item: {}
  }

  constructor (props) {
    super(props)
    this.state = {
      isLike: this.props.item.isLike
    }
  }

  handleLike (isLike, e) {
    let tips = !!isLike ? '取消点赞' : '点赞成功'
    Taro.showToast({
      title: tips,
      icon: 'none'
    })

    this.setState({
      isLike: !!isLike ? 0 : 1 
    })

    this.props.onLike(this.props.item);
  }

  render () {
    return (
      <View className='card'>
        <View className='title'>
          <View>{this.props.item.title}</View>
          <View 
            className={'like' + (this.state.isLike ? ' liked' : '')} 
            onClick={this.handleLike.bind(this, this.state.isLike)}
          />
        </View>
        <View className='desc'>{this.props.item.desc}</View>
        <Image className='item-img' src={this.props.item.img} mode='widthFix'></Image>
      </View>
    )
  }
}