/**
 * ajax
 * 只支持 get 方法
 */
function ajax({
  method = 'get',
  url,
  data,
  headers = {},
} = {}) {

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    if (data) {
      if (method === 'post') {
        // method: post
      } else {
        // method: get
        const dataArr = [];
        for (const i in data) {
          dataArr.push(`${encodeURIComponent(i)}=${encodeURIComponent(data[i])}`);
        }
        let search = dataArr.join('&');
        if (url.indexOf('?') !== -1) {
          url = `${url}&${search}`;
        } else {
          url = `${url}?${search}`;
        }
      }
    }

    xhr.open(method, url, true);
    
    if (method === 'post') {
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      for (const i in headers) {
        xhr.setRequestHeader(i, headers[i]);
      }

      xhr.send(JSON.stringify(data));
    } else {
      xhr.send(null);
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          try {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
          } catch (error) {
            reject(xhr);
          }
        } else {
          reject(xhr);
        }
      }
    };
  });
}

module.exports = ajax;
