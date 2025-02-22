import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:quark_web/firebase_options.dart';
import 'package:quark_web/master.dart';
import 'screens/home_screen.dart';

Future<void> main() async {
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  static FirebaseAnalytics analytics = FirebaseAnalytics.instance;
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Quarks Studio',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.orange,
        indicatorColor: color3,
        textSelectionTheme: TextSelectionThemeData(
          cursorColor: color3,
          selectionColor: color3.withValues(alpha:0.3),
          selectionHandleColor: color3,
        ),
      ),
      home: HomeScreen(analytics: analytics),
    );
  }
}
