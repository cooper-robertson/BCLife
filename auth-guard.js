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
