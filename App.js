import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthProvider } from './src/navigation/AuthProvider';
import Routes from './src/navigation/Routes';
// import { authentication } from './src/firebase/firebase_config';

const App = () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
};

export default App;
