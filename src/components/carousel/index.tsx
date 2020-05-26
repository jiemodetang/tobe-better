
import React from 'react';
import { Carousel } from 'antd';
import './index.less'



export default () => {
    return (
        <Carousel effect="fade" autoplay >
            <img src="https://img.crawler.qq.com/lolwebschool/0/JAutoCMS_LOLWeb_d668a1e5c3b458bc16e30d21eac829e2/0" alt="" className='carouselImg' />
            <img src="https://game.gtimg.cn/images/daojushop/zb/ad/202005/20200501000045_347411.jpg" alt="" className='carouselImg' />
        </Carousel>
    )
}