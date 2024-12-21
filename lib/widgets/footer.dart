import 'package:flutter/material.dart';
import 'package:quark_web/lenguajes.dart';
import '../master.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color0,
      padding: const EdgeInsets.all(16),
      child: Text(
        footer(lenguaje),
        style: const TextStyle(color: Colors.white, fontSize: 14),
        textAlign: TextAlign.center,
      ),
    );
  }
}
