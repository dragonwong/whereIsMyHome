import './index.css';

import COMMUNITY from './data/community';
import STATUS_COLOR_MAP from './data/status_color_map';

// 创建地图实例
const map = new AMap.Map("container", {
  zoom: 15,
  center: [116.43, 39.96],
  resizeEnable: true,
});

// 绘制社区
const communities = COMMUNITY.map(community => {
  var text = new AMap.Text({
    text: `${community.age}, ¥${community.price}`,
    anchor: 'center', // 设置文本标记锚点
    draggable: true,
    style: {
      'padding': '.5rem',
      'border-radius': '.25rem',
      'background-color': 'white',
      'border-width': 0,
      'box-shadow': '0 2px 6px 0 rgba(114, 124, 245, .5)',
      'text-align': 'center',
    },
    position: community.textPosition,
  });

  text.setMap(map);

  const path = community.polygon.map(point => {
    return new AMap.LngLat(point[0], point[1]);
  });
  // 创建面覆盖物
  return new AMap.Polygon({
    path,
    fillOpacity: 0.3,
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillColor: STATUS_COLOR_MAP[community.status],
  });
});

// 添加多个覆盖物事件
map.add(communities);
