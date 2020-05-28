import React, { useEffect, useRef } from 'react';
import styles from './index.css';
import { Scene, LineLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';


export default class Index extends React.Component {
  private scene!: Scene;

  public componentWillUnmount() {
    this.scene.destroy();
  }
  // const inputR = useRef(null)  
  public async componentDidMount() {
    const scene = new Scene({
      id: 'map',
      map: new Mapbox({
        pitch: 0,
        style: 'dark',
        center: [ 107.77791556935472, 35.443286920228644 ],
        zoom: 2.9142882493605033
      })
    });
    scene.on('loaded', () => {
      fetch('https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt')
        .then(res => res.text())
        .then(data => {
          const layer = new LineLayer({
            blend: 'normal'
          })
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng1',
                y: 'lat1',
                x1: 'lng2',
                y1: 'lat2'
              }
            })
            .size(1)
            .shape('arc3d')
            .color(['#FF7C6A'])
            .animate({
              enable: true,
              interval: 0.1,
              trailLength: 0.5,
              duration: 2
            })
            .style({
              opacity: 0.8
            });
          scene.addLayer(layer);
        });
    });
    this.scene = scene;
  }
  render() {
    return (
      <div
        id="map"
        style={{
          position: 'absolute',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    )
  }
}
