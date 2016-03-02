export default {
  name: 'definition-atom',
  type: 'text',
  render({value}) {
    return `[${value}]`;
  }
};
