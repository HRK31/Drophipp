import React from 'react';
import './App.css';


import '@shopify/polaris/dist/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';

import SettingsForm from './SettingsForm';
function App() {
  return (
    <AppProvider i18n={enTranslations}>
    <Page title="Settings">
      <SettingsForm/>
    </Page>
  </AppProvider>
  );
}

export default App;
