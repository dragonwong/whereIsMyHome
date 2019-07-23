import './style/index.css';
import './style/demo-center.css'

import DegreeColor from '../../util/DegreeColor';
import {
  $,
} from '../../util/selector';

import COMMUNITY from './data/community';
import PERSONAL from './data/personal';
import STATUS_COLOR_MAP from './data/status_color_map';

const degreeColor = new DegreeColor({
  max: 150000,
  min: 30000,
});

// 创建地图实例
const map = new AMap.Map("container", {
  zoom: 15,
  center: [116.472003, 39.923934],
  resizeEnable: true,
  mapStyle: 'amap://styles/dark',
});

// 绘制社区
const communities = COMMUNITY.map(community => {
  const name = community.name;
  let textBgColor = STATUS_COLOR_MAP.DEFAULT;
  let personalData = PERSONAL.community[name];
  if (personalData) {
    textBgColor = STATUS_COLOR_MAP[personalData.status];
  }

  var text = new AMap.Text({
    text: `${name}\n${community.age}, ¥${community.price}`,
    anchor: 'center', // 设置文本标记锚点
    draggable: true,
    style: {
      'padding': '.5rem',
      'border-radius': '.25rem',
      'background-color': textBgColor,
      'border-width': 0,
      'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
      'text-align': 'center',
      'color': 'white',
      'font-weight': 'bold',
    },
    position: community.textPosition,
  });

  text.setMap(map);
  
  const path = community.polygon.map(point => {
    return new AMap.LngLat(point[0], point[1]);
  });

  const fillColor = degreeColor.getColor(community.price);

  // 创建面覆盖物
  return new AMap.Polygon({
    path,
    fillOpacity: 0.7,
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillColor,
  });
});

// 添加多个覆盖物事件
map.add(communities);

$('#ctrOverlay').onclick = function() {
  var overlays = map.getAllOverlays('text');

  if (this.value === '隐藏浮层') {
    this.value = '显示浮层';
    overlays.forEach(item => item.hide());
  } else {
    this.value = '隐藏浮层';
    overlays.forEach(item => item.show());
  }
};