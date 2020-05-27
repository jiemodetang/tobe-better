import React, { FC, useState } from 'react';
import './index.less';
import { connect, HeroModelState, ConnectProps,history } from 'umi';
import { Row, Col, Radio, Card, Carousel } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface'
import CarouselComponent from '../../components/carousel/index'
import {intl} from '../../utils/commonFun'


interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const RadioGroup = Radio.Group;

const Hero: FC<PageProps> = (props) => {
  const heroType = [
    { key: 'all', value: intl('tobe_all') },
    { key: "fighter", value: intl('tobe_fighter') },
    { key: 'mage', value: intl('tobe_mage') },
    { key: "tank", value: intl('tobe_tank') },
    { key: "assassin", value: intl('tobe_assassin') },
    { key: "marksman", value: intl('tobe_marksman') },
    { key: "support", value: intl('tobe_support') },
  ];
  
  const { hero = [] } = props.hero.heros;
  const [filterKey, setFilterKey] = useState('all')
  const onChange = (e: RadioChangeEvent) => {
    setFilterKey(e.target.value)
  };
  const goHeroInfoId = (id:any)=>{
    history.push({
      pathname:'/hero/'+id
    })
  }
  return (
    <div>
      <CarouselComponent />
      <RadioGroup onChange={onChange} value={filterKey} className='radioGroupCss'>
        {heroType.map(data => (
          <Radio value={data.key} key={`hero-rodio-${data.key}`}>
            {data.value}
          </Radio>
        ))}
      </RadioGroup>
      <Row>
        {hero.filter((item: any) => item.roles.includes(filterKey) || filterKey === 'all').map((item: any) => (
          <Col key={item.name} span={3} className='heroitem' onClick={()=>{goHeroInfoId(item.heroId)}}>
            <img src={"https://game.gtimg.cn/images/lol/act/img/champion/" + item.alias + '.png'} />
            <p>{item.name}</p>

          </Col>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);
