import React, { FC, useState } from 'react';
import './index.less';
import { connect, HeroModelState, ConnectProps,history } from 'umi';
import { Row, Col, Radio, Card, Carousel } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface'
import CarouselComponent from '../../components/carousel/index'



interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const RadioGroup = Radio.Group;
const heroType = [
  { key: 'all', value: '全部' },
  { key: "fighter", value: '战士' },
  { key: 'mage', value: '法师' },
  { key: "tank", value: '坦克' },
  { key: "assassin", value: '刺客' },
  { key: "marksman", value: '射手' },
  { key: "support", value: '辅助' },
];

const Hero: FC<PageProps> = (props) => {
  console.log(props.hero);
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
