import Api from './Api';
  
const api = Api.getInstance();


export const handleError = (error) => {
  return dispatch => {
    console.log(error)
    window.location.href = '/oops';
  };
};

export const handleErrorWithoutRedirect = (error) => {
  return dispatch => {
    console.log(error)
  };
};

export const sendMessageToBackend = (error, useRedirect = true) => {
  return dispatch => {
      api.post('/explorer/v1/error', error)
      .then(res=> {
        if (useRedirect) {
          dispatch(handleError(error));
        } else {
          dispatch(handleErrorWithoutRedirect(error));
        }
      });
  }

};

// expects the window.location.pathname style of path
export default function isExpectedPath(pathname, expectedPath) {
    if(pathname === expectedPath) {
        return true
    } else if(expectedPath.replace(/\//g, '') == '') {
        return false
    } else if(pathname.split('/')[1].indexOf(expectedPath.replace(/\//g, '')) >= 0) {
        return true
    } else {
        return false
    }
}