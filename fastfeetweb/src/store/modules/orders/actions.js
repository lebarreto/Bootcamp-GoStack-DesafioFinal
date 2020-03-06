export function updateRequest({ id, product }) {
  return {
    type: '@order/UPDATE_REQUEST',

    id,
    product,
  };
}

export function updateSuccess({ id, product }) {
  return {
    type: '@order/UPDATE_SUCCESS',

    id,
    product,
  };
}

export function addRequest(product, delivaryman_id, recipient_id) {
  return {
    type: '@order/ADD_REQUEST',
    payload: {
      product,
      delivaryman_id,
      recipient_id,
    },
  };
}

export function deleteRequest(id) {
  return {
    type: '@order/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteSuccess(id) {
  return {
    type: '@order/DELETE_SUCCESS',
    payload: { id },
  };
}

export function cancelRequest(order) {
  return {
    type: '@order/CANCEL_REQUEST',
    payload: { order },
  };
}

export function cancelSuccess(order) {
  return {
    type: '@order/CANCEL_SUCCESS',
    payload: { order },
  };
}
