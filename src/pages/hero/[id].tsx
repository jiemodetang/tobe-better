import React, { useState, useEffect } from 'react';
import { request, useIntl } from 'umi'
import { Card, Tabs, Divider, Carousel } from 'antd';
import _get from 'lodash/get'
interface HeroInfor {
    spells: any,
    hero: any,
    skins: any
}
const { TabPane } = Tabs;
export default function (props: { match: any; }) {
    const intl = useIntl()
    const { match } = props
    // 进来的时候要调接口啊，然后用id去取，然后渲染
    const [heroInfor, setHeroInfor] = useState<HeroInfor>({ hero: {}, spells: [], skins: [] })
    const [activeTabKey, setActiveTabKey] = useState('')
    useEffect(() => {
        request(`/images/lol/act/img/js/hero/${match.params.id}.js`).then(function (response) {
            setHeroInfor(response)
        })
    }, [])
    const onTabChange = (key: any) => {
        setActiveTabKey(key)
    };
    return (
        <div  >
            <Carousel autoplay>
                {
                    heroInfor.skins.map((item: any, index: any) => {
                        return (
                            item.mainImg && <img src={item.mainImg} alt="" key={index} />
                        )
                    })
                }
            </Carousel>
            <Card title="背景故事" bordered={false} style={{ width: '100%' }} headStyle={{ margin: ' 47px 0 20px', fontSize: '24px', color: '#338c7a' }}>
                <p> {heroInfor.hero.shortBio}</p>
            </Card>

            <Tabs defaultActiveKey="1" onChange={onTabChange}>
                {
                    heroInfor.spells.map((item: any, index: { toString: () => string | undefined; }) => {
                        return (
                            <TabPane tab={<img src={item.abilityIconPath} alt="" />} key={index.toString()}>
                                <h1>{item.name}&nbsp;&nbsp;&nbsp;<b style={{ fontSize: '14px', color: '#999' }}>快捷键：{item.spellKey == "passive" ? '被动' : item.spellKey}</b></h1>
                                <p>{item.description}</p>
                            </TabPane>
                        )
                    })
                }
            </Tabs>

            <Card title="使用技巧" bordered={false} style={{ width: '100%' }} headStyle={{ margin: ' 27px 0 20px', fontSize: '24px', color: '#338c7a' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#338c7a', paddingBottom: '8px', }}> 当你使用狂战士</p>
                {
                    _get(heroInfor, ['hero', 'allytips'], []).map((item: any, index: any) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
                <Divider />
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#338c7a', paddingBottom: '8px', }}> 敌人使用狂战士</p>
                {
                    _get(heroInfor, ['hero', 'enemytips'], []).map((item: any, index: any) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })
                }
            </Card>

        </div>
    );
}