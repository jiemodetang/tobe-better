import React, { FC, useState } from 'react';
import styles from './index.less';
import { connect, PartsModelState, ConnectProps } from 'umi';
import { Row, Col, Radio, Card, Popover } from 'antd';
import { RadioChangeEvent } from 'antd/es/radio/interface'
import CarouselComponent from '../../components/carousel/index'



interface PageProps extends ConnectProps {
  parts: PartsModelState;
}

const RadioGroup = Radio.Group;
const partsType = [
  { key: 'all', value: '全部' },
  { key: 'Armor', value: '防御类' },
  { key: "Damage", value: '攻击类' },
  { key: "ManaRegen", value: '法术类' },
  { key: "Boots", value: '移动速度' },
  { key: "Consumable", value: '消耗品' },
];

const parts: FC<PageProps> = (props) => {
  const { items = [] } = props.parts.parts;
  const [filterKey, setFilterKey] = useState('all')
  const onChange = (e: RadioChangeEvent) => {
    setFilterKey(e.target.value)
  };
  return (
    <div>
      <CarouselComponent />
      <RadioGroup onChange={onChange} value={filterKey} className={styles.radioGroupCss}>
        {partsType.map(data => (
          <Radio value={data.key} key={`parts-rodio-${data.key}`}>
            {data.value}
          </Radio>
        ))}
      </RadioGroup>
      <Row>
        {items.filter((item: any) => item.types.includes(filterKey) || filterKey === 'all').map((item: any, index: string | number | undefined) => (
          <Popover content={() => (<p dangerouslySetInnerHTML={{ __html: item.description }} />)} title="" trigger="hover" key={index}>
            <Col span={2} className={styles.partsitem} >
              <img src={item.iconPath} />
              <p>{item.name}</p>
            </Col>
          </Popover>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ parts }: { parts: PartsModelState }) => ({ parts }))(parts);
