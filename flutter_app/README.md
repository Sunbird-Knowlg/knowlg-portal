# Getting Started with Flutter App

For Existing flutter app follow the below steps to integrate pdf player as web component

- Copy all the  files from web component folder
  [files](https://github.com/project-sunbird/sunbird-pdf-player/tree/master/web-component/) to public/libs/sunbird-pdf-player folder

- Import below paths for "assets" in pubspec.yaml file
    ```bash
    - public/libs/sunbird-pdf-player/
    - public/libs/sunbird-pdf-player/assets/
    - public/libs/sunbird-pdf-player/assets/pdfjs/build/
    - public/libs/sunbird-pdf-player/assets/pdfjs/web/
    ```

- Import below dependencies  in pubspec.yaml file
    ```bash
    webview_flutter_plus: ^0.3.0+2
    ```

- Create web_view.dart file in lib folder and add  below code 
    ```bash
	import 'package:flutter/material.dart';
	import 'package:webview_flutter_plus/webview_flutter_plus.dart';

	class HomeScreen extends StatefulWidget {
  	const HomeScreen({Key? key}) : super(key: key);

  	@override
  	State<HomeScreen> createState() => _HomeScreenState();
	}

	class _HomeScreenState extends State<HomeScreen> {
  	@override
  	Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Container(
          child: const WebViewPlus(
            initialUrl: 'public/libs/sunbird-pdf-player/index.html',
            javascriptMode: JavascriptMode.unrestricted,
          ),
        ),
      ),
    );
  	}
	}
    ```	

- Import below code in main.dart file
    ```bash
    import 'package:flutter/material.dart';
    import 'package:flutter_app/web_view.dart';

	void main() {
	   runApp(const MyApp());
	}

	class MyApp extends StatelessWidget {
  	const MyApp({Key? key}) : super(key: key);

  	@override
  	Widget build(BuildContext context) {
    	return MaterialApp(
      	debugShowCheckedModeBanner: false,
      	theme: ThemeData(
        	primarySwatch: Colors.orange,
      	),
      	home: const HomeScreen(),
    	);
  		}
	}
    ```	 

- Create  .eslintignore  file in root folder and update below paths
    ```bash
    public/*
    ```
- Update below in "/android/build.gradle"  
    ```bash
    defaultConfig {
	...	
	minSdkVersion 20
	...
	}
	...
	android {
	...
    compileSdkVersion 32
	...
	}
    ```
- Update below in "/android/app/src/main/AndroidManifest.xml"  
    ```bash
    android:label="knowlg_app"
    ```
