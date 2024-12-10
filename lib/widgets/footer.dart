import 'package:flutter/material.dart';
import '../master.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color0,
      padding: const EdgeInsets.all(16),
      child: const Text(
        '© 2024 Quarks Studio - Todos los derechos reservados',
        style: TextStyle(color: Colors.white, fontSize: 14),
        textAlign: TextAlign.center,
      ),
    );
  }
}
