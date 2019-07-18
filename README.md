# Where Is My Home 🏠

这个项目旨在帮我在北京找到一个家。

- 📆 [更新日志](./CHANGELOG.md)
- 📖 [English Document](./README_EN.md)

## 功能

- [x] 独立配置个人浏览记录
- [x] 小区颜色随单价变深
- [x] 浮层文本显示小区信息：年代、单价
- [x] 浮层背景色表示个人的判断状态：通过绿色、不通过红色、待定黄色、未确认灰色
- [x] 浮层显隐可以随时切换


## 教程

### 安装

```bash
npm install
```

### 一些修改

在 `src/pages/find/index.html` 中, 把 `{{your_key}}` 用你自己从 https://lbs.amap.com/dev/key/app# 获取的 key 替换。

### 开始

```
npm start
```

访问 http://localhost/home/find 。
