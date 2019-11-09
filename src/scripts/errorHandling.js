/**
 * Handles certain errors received by client
 * 
 * @param {*} error 
 * @return {Boolean} whether or not the error was handled in the function
 */
export function errorHandling(error) {
    var errorData = error.response;
    // eslint-disable-next-line
    if(errorData.status == 403) {
        window.location.replace("/login");
        return true;
    } else {
        console.log(error);
        return false;
    }
}

