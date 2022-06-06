import { useRef } from 'react';
import useScript from '../hooks/useScript';

// https://github.com/anthonyjgrove/react-google-login/issues/502
// https://developers.google.com/identity/gsi/web/reference/js-reference#CredentialResponse
export default function GoogleLogin({
  onGoogleSignIn = () => {},
  text = 'signin_with',
}) {
  const googleSignInButton = useRef(null);

  useScript('https://accounts.google.com/gsi/client', () => {
    // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.initialize
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    });
    // https://developers.google.com/identity/gsi/web/reference/js-reference#google.accounts.id.renderButton
    window.google.accounts.id.renderButton(
      googleSignInButton.current,
      { theme: 'filled_blue', size: 'large', text, width: '250' }, // customization attributes
    );
  });

  return <div ref={googleSignInButton}></div>;
}
