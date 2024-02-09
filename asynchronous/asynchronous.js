document.addEventListener('DOMContentLoaded', function() {
    // Promise example
function fetchDataPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = 'This is some fetched data using Promise';
            resolve(data);
        }, 1500);
    });
}

// Promise usage
fetchDataPromise()
    .then(function(data) {
        console.log('Promise result:', data);
    })
    .catch(function(error) {
        console.error('Promise error:', error);
    });

});