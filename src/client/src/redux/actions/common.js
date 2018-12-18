import ApolloClient from 'apollo-boost';


export const client = new ApolloClient({ 
  uri: 'http://localhost:4000/graphql'
});

export const getEntity = (entityQuery, loadedAction, entity, fetchStart, fetchEnd, fetchError) => (dispatch) => () => () => {
  dispatch(fetchStart());
  client.query({ query: entityQuery}).then(({data}) => {
      dispatch(fetchEnd());
      dispatch(loadedAction(data[entity]))
  }).catch((e) => {
      dispatch(fetchError(e));
  });
}


export const addEntity = (type) => (entities) => ({
  type: type,
  payload: entities.reduce((payload, entity) => ({...payload, [entity.id]: entity}), {})
})
