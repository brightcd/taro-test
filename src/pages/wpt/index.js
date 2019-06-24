import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Api from '../../utils/mockData'
import './index.css'
import SearchHeader from './search_header/index'
import MySwiper from './my_swiper/index'
import FlexBox from './flex-box/index'
import Card from './card/index'

export default class WptIndex extends Component {
  constructor() {
    super()
    // 此处有坑，swiper右侧白边问题
    this.state = {
      imgs: [
        {
          id: 1,
          url: 'https://cdn.weipaitang.com/static/20190620fb6ee05a-a506-49cd-987a-969fad5f0478-W1125H450'
        },{
          id: 2,
          url: 'https://cdn.weipaitang.com/static/201906201ecc0dc2-83d8-4702-89cb-c64051e3a8f8-W1125H450'
        },{
          id: 3,
          url: 'https://cdn.weipaitang.com/static/201906200f1705db-6278-4e0e-9a1e-4b00697053b9-W1125H450'
        }
      ],
      items: [
        {
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        },{
          text: '精选',
          img: 'https://cdn.weipaitang.com/static/2019041345b3412a-6056-4730-b056-c64b66095323-W207H207'
        }
      ],
      cards: []
    }
  }

  componentDidMount() {
    this.setState(Api.getData())
  }

  onReachBottom() {
    this.setState({
      cards: [...this.state.cards, ...Api.getData().cards]
    })
  }

  handleLike(e) {
    console.log('事件上传：')
    console.log(e)
  }

  render () {
    const cards = this.state.cards
    return (
      <View>
        <SearchHeader /> 
        <MySwiper imgs={this.state.imgs} />
        <FlexBox listItems={this.state.items} />
        <View className='content'>
          { cards.map((item) => (
            <Card item={item} key={item.id} onLike={this.handleLike}></Card>
            ))
          }
        </View>
      </View>
    )
  }
}