import gql from 'graphql-tag';

import { addEntity, getEntity } from "./common";
import { ADD_CONFIGS, SERVER_LOADING, ERROR_SERVER_LOADING } from "../constants/configuration";

const configurationsQuery = gql`
query configs {
      configs {
          id
          name
          move_types {
            id
            name
            kills {
              id
              name
            }
          } 
      }
    }
`;

export const addConfigurations = addEntity(ADD_CONFIGS);

export const fetchStart = () => ({
  type: SERVER_LOADING,
  payload: true
})
export const fetchEnd = () => ({
  type: SERVER_LOADING,
  payload: false
})
export const fetchError = (error = true) => ({
  type: ERROR_SERVER_LOADING,
  payload: error
})
export const createLoadConfigurations = getEntity(configurationsQuery, addConfigurations, 'configs', fetchStart, fetchEnd, fetchError);



