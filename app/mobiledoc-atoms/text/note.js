export default {
  name: 'note-atom',
  type: 'text',
  render({value}) {
    return `[${value}]`;
  }
};
