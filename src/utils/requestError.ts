// eslint-disable-next-line func-names
export default function (xhr: XMLHttpRequest) {
  return `Status: ${xhr.status}${xhr.response ? ', ' : '.'}${xhr.response?.reason || ''}`;
}
