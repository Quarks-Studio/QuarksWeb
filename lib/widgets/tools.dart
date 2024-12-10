import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:carousel_slider/carousel_slider.dart';
import '../master.dart';

class ToolsSection extends StatefulWidget {
  const ToolsSection({super.key});

  @override
  ToolsSectionState createState() => ToolsSectionState();
}

class ToolsSectionState extends State<ToolsSection> {
  final List<String> imgList = [
    'assets/awsLogo.png',
    'assets/dartLogo.png',
    'assets/firebaseLogo.png',
    'assets/flutterLogo.png',
    'assets/androidLogo.png',
    'assets/iosLogo.png',
    'assets/pythonLogo.webp',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 16),
      color: color1,
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1200),
          child: LayoutBuilder(
            builder: (context, constraints) {
              if (constraints.maxWidth < 800) {
                return _buildSmallScreen(constraints);
              } else {
                return _buildLargeScreen(constraints);
              }
            },
          ),
        ),
      ),
    );
  }

  //*- Pantallas grandes -*\\
  Widget _buildLargeScreen(BoxConstraints constraints) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          'Herramientas con las que trabajamos',
          style: GoogleFonts.roboto(
            fontSize: 36,
            fontWeight: FontWeight.bold,
            color: color0,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Explora nuestras herramientas mas usadas',
          style: GoogleFonts.roboto(
            fontSize: 20,
            fontWeight: FontWeight.normal,
            color: color0.withOpacity(0.7),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 40),
        SizedBox(
          width: MediaQuery.of(context).size.width,
          height: 300,
          child: CarouselSlider(
            options: CarouselOptions(
              autoPlay: true,
              enlargeCenterPage: true,
              aspectRatio: 16 / 9,
              viewportFraction: 0.35,
              autoPlayInterval: const Duration(seconds: 5),
              autoPlayAnimationDuration: const Duration(seconds: 1),
              scrollPhysics: const BouncingScrollPhysics(),
            ),
            items: imgList
                .map((item) => Container(
                      margin: const EdgeInsets.symmetric(horizontal: 8),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.asset(
                          item,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ))
                .toList(),
          ),
        ),
      ],
    );
  }
  //*- Pantallas grandes -*\\

  //*- Pantallas pequeñas -*\\
  Widget _buildSmallScreen(BoxConstraints constraints) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          'Herramientas con las que trabajamos',
          style: GoogleFonts.roboto(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: color0,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Text(
          'Explora nuestras herramientas mas usadas',
          style: GoogleFonts.roboto(
            fontSize: 16,
            fontWeight: FontWeight.normal,
            color: color0.withOpacity(0.7),
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 40),
        SizedBox(
          width: MediaQuery.of(context).size.width,
          height: 150,
          child: CarouselSlider(
            options: CarouselOptions(
              autoPlay: true,
              enlargeCenterPage: true,
              aspectRatio: 16 / 16,
              viewportFraction: 0.7,
              autoPlayInterval: const Duration(seconds: 5),
              autoPlayAnimationDuration: const Duration(seconds: 1),
              scrollPhysics: const BouncingScrollPhysics(),
            ),
            items: imgList
                .map((item) => Container(
                      margin: const EdgeInsets.symmetric(horizontal: 8),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.asset(
                          item,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ))
                .toList(),
          ),
        ),
      ],
    );
  }
  //*- Pantallas pequeñas -*\\
}
