export type Lang = 'en' | 'es';

export const paths: Record<Lang, string> = { en: '/', es: '/es/' };

const es = {
    seo: {
        title: 'Quarks Studio — Apps Flutter a medida para tu negocio',
        description:
            'En Quarks Studio desarrollamos apps móviles, web y software a medida con Flutter y Firebase. Transformamos tus ideas en soluciones digitales reales.',
        ogLocale: 'es_AR',
    },
    nav: {
        menu: 'Menú',
        about: 'Nosotros',
        services: 'Servicios',
        tools: 'Herramientas',
        clients: 'Clientes',
        contact: 'Contacto',
        theme: 'Cambiar tema',
        language: 'Idioma',
    },
    intro: {
        title: 'Deja el desarrollo en nuestras manos, enfócate en crecer',
        body: 'En Quarks Studio, transformamos tus ideas en soluciones digitales. Creación de apps móviles, web y software a medida, sin que tengas que preocuparte por el proceso técnico. ¡Nosotros nos encargamos del desarrollo, tú solo crece!',
        cta: 'Conoce nuestros servicios',
    },
    services: {
        title: 'Nuestros Servicios',
        description: 'Descubre lo que podemos hacer por ti y cómo podemos ayudarte.',
        mobile: {
            title: 'Creación de Apps Móviles',
            description:
                'Creamos aplicaciones móviles innovadoras y personalizadas para todas las plataformas, ayudándote a conectar con tu audiencia.',
        },
        web: {
            title: 'Desarrollo Web',
            description:
                'Diseñamos y desarrollamos sitios web modernos y funcionales que destacan en cualquier dispositivo.',
        },
        custom: {
            title: 'Software a Medida',
            description:
                'Desarrollamos software a medida para empresas y emprendedores, adaptándonos a tus necesidades y objetivos.',
        },
    },
    tools: {
        title: 'Herramientas con las que trabajamos',
        description: 'Explora nuestras herramientas más usadas',
    },
    portfolio: {
        tag: 'TRABAJO SELECCIONADO',
        title: 'Productos que\nconstruimos.',
        subtitle: 'Proyectos reales generando valor\npara negocios reales.',
    },
    contact: {
        title: 'Comencemos una\nconversación.',
        subtitle:
            '¡Estamos listos para ayudarte! Envíanos tus dudas y estaremos encantados de responderte.',
        location: 'Ubicación',
        nameLabel: 'Tu nombre',
        nameHint: 'Escribe tu nombre completo',
        phoneLabel: 'Tu teléfono',
        phoneHint: 'Escribe tu número de teléfono',
        mailLabel: 'Tu correo electrónico',
        mailHint: 'Escribe tu correo electrónico',
        msgLabel: 'Tu mensaje',
        msgHint: 'Escribe tu mensaje aquí...',
        send: 'Enviar Mensaje',
        incomplete: 'Por favor, completa todos los campos.',
        success: 'Formulario enviado correctamente.',
        error: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.',
    },
    footer: {
        tagline: 'Construimos apps Flutter que resuelven problemas reales para negocios reales.',
        contact: 'Contacto',
        rights: 'Todos los derechos reservados',
    },
    notFound: { title: 'Página no encontrada', back: 'Volver al inicio' },
};

export type Dict = typeof es;

const en: Dict = {
    seo: {
        title: 'Quarks Studio — Custom Flutter Apps for Your Business',
        description:
            'At Quarks Studio we build mobile apps, web apps and custom software with Flutter & Firebase. We turn your ideas into real digital solutions.',
        ogLocale: 'en_US',
    },
    nav: {
        menu: 'Menu',
        about: 'About us',
        services: 'Services',
        tools: 'Tools',
        clients: 'Clients',
        contact: 'Contact',
        theme: 'Toggle theme',
        language: 'Language',
    },
    intro: {
        title: 'Leave the development in our hands, focus on growing',
        body: 'At Quarks Studio, we transform your ideas into digital solutions. Creation of mobile apps, web and custom software, without you having to worry about the technical process. We take care of the development, you just grow!',
        cta: 'Know our services',
    },
    services: {
        title: 'Our Services',
        description: 'Discover what we can do for you and how we can help you.',
        mobile: {
            title: 'Mobile App development',
            description:
                'We create innovative and customized mobile applications for all platforms, helping you connect with your audience.',
        },
        web: {
            title: 'Web Development',
            description:
                'We design and develop modern and functional websites that stand out on any device.',
        },
        custom: {
            title: 'Custom Software',
            description:
                'We develop custom software for companies and entrepreneurs, adapting to your needs and goals.',
        },
    },
    tools: {
        title: 'Tools we work with',
        description: 'Explore our most used tools',
    },
    portfolio: {
        tag: 'SELECTED WORK',
        title: "Products we've built\nthat matter.",
        subtitle: 'Real projects generating value\nfor real businesses.',
    },
    contact: {
        title: "Let's start a\nconversation.",
        subtitle:
            'We are ready to help you! Send us your questions and we will be happy to answer you.',
        location: 'Location',
        nameLabel: 'Your name',
        nameHint: 'Write your full name',
        phoneLabel: 'Your phone number',
        phoneHint: 'Write your phone number',
        mailLabel: 'Your email',
        mailHint: 'Write your email',
        msgLabel: 'Your message',
        msgHint: 'Write your message here...',
        send: 'Send Message',
        incomplete: 'Please complete all fields.',
        success: 'Form submitted successfully.',
        error: "We couldn't send your message. Please try again or reach us on WhatsApp.",
    },
    footer: {
        tagline: 'We build Flutter apps that solve real problems for real businesses.',
        contact: 'Contact',
        rights: 'All rights reserved',
    },
    notFound: { title: 'Page not found', back: 'Back to home' },
};

export const ui: Record<Lang, Dict> = { es, en };