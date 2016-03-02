export default {
  name: 'definition-atom',
  type: 'dom',
  render({value}) {
    const element = document.createElement("span");
    element.className = 'definition-atom label label-info';
    element.appendChild(document.createTextNode(`${value}`));
    return element;
  }
};
