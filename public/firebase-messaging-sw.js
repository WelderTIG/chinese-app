// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.

// self.addEventListener('notificationclick', function (event) {
//   const url = event.notification.data.FCM_MSG.notification.click_action;
//   event.waitUntil(
//     clients.matchAll({ type: 'window' }).then(windowClients => {
//       // Check if there is already a window/tab open with the target URL
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i];
//         // If so, just focus it.
//         console.log(client.url)
//         if ((client.url === url || !url) && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       // If not, then open the target URL in a new window/tab.
//       if (clients.openWindow && url) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// })

// firebase.initializeApp({
//   apiKey: "AIzaSyAdXIm_mAmUiR0m1ahG5w7mtTOEGpcZlgY",
//   authDomain: "testproj-b2617.firebaseapp.com",
//   databaseURL: "https://testproj-b2617-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "testproj-b2617",
//   storageBucket: "testproj-b2617.firebasestorage.app",
//   messagingSenderId: "790248812944",
//   appId: "1:790248812944:web:e4321d7bee54f59e76c315",
//   measurementId: "G-2TBCVYX081"
// });

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
// const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]