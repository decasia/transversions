// We often need a new copy of a mobiledoc object.

export default function blankMobileDoc() {
  return {
    version: "0.3.0",
    markups: [],
    atoms: [],
    cards: [],
    sections: []
  };
}
