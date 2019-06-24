import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input} from '@tarojs/components';
import './index.css';

export default class SearchHeader extends Component {
  constructor() {
    super()
    this.state = {
      placeHolder: '请输入拍品或店铺名称'
    }
  }

  render() {
    return (
      <View className='header'>
        <Image className='logo' src='https://cdn.weipaitang.com/static/20190412ff95a68a-9274-4a68-87c3-078d92f22044-W68H63'/>
        <View className='search-box'>
          <Image className='icon' src='https://cdn.weipaitang.com/static/20190412ccdba8aa-1b35-4cc6-8403-50e6e6bccbe1-W48H45' />
          <Input className='input' placeholder={this.state.placeHolder} placeholderStyle='color: #FFF' />
        </View>
      </View>
    )
  }
}