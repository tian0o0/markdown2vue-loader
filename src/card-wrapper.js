module.exports = function cardWrapper(html) {
  // html字符串转换为 h2/h3分类的数组
  const DIVIDE_ID = ':::';
  const DIVIDE_ID_H2 = DIVIDE_ID + '<h2';
  const DIVIDE_ID_H3 = DIVIDE_ID + '<h3';
  const group = html.replace(/<h3/g, DIVIDE_ID_H3).replace(/<h2/g, DIVIDE_ID_H2).split(DIVIDE_ID);

  return group
    .map(fragment => {
      // 以h3划分card
      // h3后的非h2/h3节点都会放进card
      if (fragment.indexOf('<h3') !== -1) {
        return `<div class="card">${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
};
