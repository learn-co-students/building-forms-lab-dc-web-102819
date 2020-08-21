export default function manageBand(
  state = {
    bands: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_TEXT":
      return { bands: state.bands.concat(action.text) };
    default:
      return state;
  }
}
