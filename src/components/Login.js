var firebase = require("firebase");
var firebaseui = require("firebaseui");

export default function Login() {
	var ui = new firebaseui.auth.AuthUI(firebase.auth());

	return;
}
