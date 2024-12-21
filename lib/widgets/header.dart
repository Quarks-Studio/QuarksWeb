import 'package:flutter/material.dart';
import 'package:quark_web/lenguajes.dart';
import '../master.dart';

class Header extends StatefulWidget implements PreferredSizeWidget {
  const Header({
    super.key,
    required this.scrollController,
    required this.keyIntroduction,
    required this.keyServices,
    required this.keyPortfolio,
    required this.keyContact,
    required this.keyTools,
  });

  final ScrollController scrollController;
  final GlobalKey keyIntroduction;
  final GlobalKey keyServices;
  final GlobalKey keyPortfolio;
  final GlobalKey keyContact;
  final GlobalKey keyTools;

  @override
  HeaderState createState() => HeaderState();

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}

class HeaderState extends State<Header> {
  @override
  Widget build(BuildContext context) {
    return PreferredSize(
      preferredSize: widget.preferredSize,
      child: Container(
        color: color1,
        padding: const EdgeInsets.symmetric(horizontal: 20.0),
        child: LayoutBuilder(
          builder: (context, constraints) {
            if (constraints.maxWidth > 800) {
              return _buildLargeScreen();
            } else {
              return _buildSmallScreen(context);
            }
          },
        ),
      ),
    );
  }

  //*- Pantallas grandes -*\\
  Widget _buildLargeScreen() {
    return Center(
      child: ConstrainedBox(
        constraints: const BoxConstraints(
          maxWidth: 1200,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/isologo.png',
              height: 60,
            ),
            const Expanded(child: SizedBox()),
            Row(
              children: [
                buildHeaderButton(nosotros(lenguaje), widget.keyIntroduction),
                buildHeaderButton(servicios(lenguaje), widget.keyServices),
                buildHeaderButton(herramientas(lenguaje), widget.keyTools),
                buildHeaderButton(clientes(lenguaje), widget.keyPortfolio),
                buildHeaderButton(contacto(lenguaje), widget.keyContact),
              ],
            ),
          ],
        ),
      ),
    );
  }
  //*- Pantallas grandes -*\\

  //*- Pantallas pequeñas -*\\
  Widget _buildSmallScreen(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Image.asset(
          'assets/isologo.png',
          height: 60,
        ),
        IconButton(
          icon: const Icon(Icons.menu, color: color0, size: 30),
          onPressed: () {
            Scaffold.of(context).openEndDrawer();
          },
        ),
      ],
    );
  }
  //*- Pantallas pequeñas -*\\
}
