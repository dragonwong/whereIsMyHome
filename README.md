# Where Is My Home

这个项目旨在帮我在北京找到一个家。

[English Document](./README_EN.md)

## 功能

- [x] 配置自己的小区浏览记录
- [x] 小区颜色随价格变深
- [ ] 小区支持显示自己的判断状态：通过，不通过，待定

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
