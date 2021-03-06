import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
import config from "../config/config.json"

const Auth0ProviderWithHistory = ({history, children}) => {
  const domain = config.REACT_APP_AUTH0_DOMAIN;
  const clientId = config.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default withRouter(Auth0ProviderWithHistory);
