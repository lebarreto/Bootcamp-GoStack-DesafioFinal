export function updateRequest({
  id,
  name,
  street,
  number,
  complement,
  city,
  state,
  zip,
}) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    id,
    name,
    street,
    number,
    complement,
    city,
    state,
    zip,
  };
}

export function deleteRequest(id) {
  return {
    type: '@recipient/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(id) {
  return {
    type: '@recipient/DELETE_SUCCESS',
    payload: { id },
  };
}

export function addRequest(name, street, number, complement, city, state, zip) {
  return {
    type: '@recipient/ADD_REQUEST',
    payload: {
      name,
      street,
      number,
      complement,
      city,
      state,
      zip,
    },
  };
}
