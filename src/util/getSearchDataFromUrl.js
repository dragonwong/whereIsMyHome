// url search 部分解析方法
function getSearchDataFromUrl(url) {
  const data = {};
  let searchStr;

  if (url) {
    const urlArr = url.split('?');
    searchStr = urlArr[1];
  } else {
    const search = location.search || '';
    searchStr = search.slice(1);
  }

  if (searchStr) {
    const pairs = searchStr.split('&');
    pairs.forEach((pair) => {
      const pairArr = pair.split('=');
      const key = pairArr[0];
      const value = decodeURIComponent(pairArr[1]);
      data[key] = value;
    });
  }

  return data;
}

module.exports = getSearchDataFromUrl;
