export function deleteRequest(id) {
  return {
    type: '@deliveryman/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(id) {
  return {
    type: '@deliveryman/DELETE_SUCCESS',
    payload: { id },
  };
}

export function addRequest(name, email, avatar_id) {
  return {
    type: '@deliveryman/ADD_REQUEST',
    payload: { name, email, avatar_id },
  };
}

export function addSuccess(deliveryman) {
  return {
    type: '@deliveryman/ADD_SUCCESS',
    payload: { deliveryman },
  };
}

export function updateRequest({ id, name, email, avatar_id }) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    id,
    name,
    email,
    avatar_id,
  };
}
