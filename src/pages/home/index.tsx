import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.less';

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.');
  });

  let  a = '123';
  a ='1234';// asd


  return (
    <View className='index'>
      <Text>Hello world!Hello world!</Text>
      <View>Home</View>
    </View>
  );
}
