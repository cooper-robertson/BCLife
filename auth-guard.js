import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

/*
  Only these two Firebase users may access the site.
*/

const ALLOWED_USER_IDS = [
  "38hHSdhnpbb4R8esqyjiKVaUmXy1",
  "eQXWaqfny0OXrBKUrxpaUEjmSFf1",
];

onAuthStateChanged(auth, async (user) => {
  /*
    No Google account is currently signed in.
  */

  if (!user) {
    window.location.replace("login.html");
    return;
  }

  /*
    A Google account is signed in, but it is not
    one of the two approved Firebase users.
  */

  if (!ALLOWED_USER_IDS.includes(user.uid)) {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(
        "Unauthorized account could not be signed out:",
        error
      );
    }

    window.location.replace(
      "login.html?error=unauthorized"
    );

    return;
  }

  /*
    The signed-in user is approved.
    Make the protected page visible.
  */

  document.documentElement.classList.remove(
    "auth-check"
  );

  const signedInEmail =
    document.getElementById("signedInEmail");

  if (signedInEmail) {
    signedInEmail.textContent =
      user.email ?? "";
  }

  const logoutButton =
    document.getElementById("logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener(
      "click",
      async () => {
        try {
          await signOut(auth);

          window.location.replace(
            "login.html"
          );
        } catch (error) {
          console.error(
            "Sign out failed:",
            error
          );

          alert(
            "You could not be signed out. Please try again."
          );
        }
      },
      {
        once: true
      }
    );
  }
});

/* ACTIVATE THIS CODE IF THE OTHER DOESN"T WORK"
import { auth } from "./firebase-config.js";

import {
  onAuthStateChanged,
  signOut
} from
  "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.replace("login.html");
    return;
  }

  /*
    We will add the two-UID restriction after
    Cooper and Bradley have each signed in once.


  document.documentElement.classList.remove(
    "auth-check"
  );

  const signedInEmail =
    document.getElementById("signedInEmail");

  if (signedInEmail) {
    signedInEmail.textContent =
      user.email ?? "";
  }

  const logoutButton =
    document.getElementById("logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener(
      "click",
      async () => {
        await signOut(auth);

        window.location.replace(
          "login.html"
        );
      },
      {
        once: true
      }
    );
  }
});
*/
