// Service worker file - network-only strategy

self.addEventListener('fetch', function (event) {
    event.respondWith(
        // Fetch from the network
        fetch(event.request)
            .then(function (response) {
                // Return the response from the network
                return response;
            })
            .catch(function (error) {
                // Handle fetch errors (if any)
                console.error('Error fetching data:', error);
                throw error;
            })
    );
});