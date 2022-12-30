# Getting Started with React Native App

For Existing react native app follow the below steps to integrate pdf player as web component

- Copy all the files from web component folder 
  [files](https://github.com/project-sunbird/sunbird-pdf-player/tree/master/web-component/assets) to /android/app/src/main/assets/libs/sunbird-pdf-player/assets folder

- Copy index.html, styles.csss and sunbird-pdf-player.js  files from web component folder
  [files](https://github.com/project-sunbird/sunbird-pdf-player/tree/master/web-component/) to /android/app/src/main/assets/libs/sunbird-pdf-player/ folder


- Import below dependencies in package.json file
    ```bash
     "react-native-webview": "^11.26.0"
    ```

- Import below dependencies  in App.js file
    ```bash
    import { WebView } from 'react-native-webview';
    ```

- Import below code in App.js file
    ```bash
    <WebView 
    originWhitelist={['*']}
    source={{ uri: 'file:///android_asset/libs/sunbird-pdf-player/index.html' }}
    javaScriptEnabled={true}
    allowFileAccessFromFileURLs={true} />
    ```

- Update below in "/android/app/src/main/res/values/strings.xml"  
    ```bash
   <string name="app_name">KnowlgApp</string>
    ```