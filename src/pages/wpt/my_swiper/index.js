import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.css'

export default class MySwiper extends Component {
  static propTypes = {
    imgs: PropTypes.array
  }

  static defaultProps = {
    imgs: []
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { imgs } = this.props
    return (
      <View>
        <Swiper 
          indicatorDots 
          autoplay
          circular
          interval={1000} 
          indicatorActiveColor='#D32F2F'
          className='swiper-container'
        >
        { imgs.map(item => (
          <SwiperItem taroKey={item.id}>
            <Image src={item.url} mode='widthFix' className='swiper-image' />
          </SwiperItem>
          ))
        }
        </Swiper>
        <View className='cover'></View>
      </View>
    )
  }
}