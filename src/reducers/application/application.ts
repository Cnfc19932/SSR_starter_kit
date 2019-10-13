export default (state = {
    meta: {
        title: 'Title',
        description: 'description',
    }
}, action) => {
  switch (action.type) {
      case 'CHANGE':
          const { meta } = action.payload;

          return {
              meta
          };
      default:
          return state;
  }
};