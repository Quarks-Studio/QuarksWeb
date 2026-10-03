import type { Lang } from '../i18n/strings';

type Localized = Record<Lang, string>;

export const ACCENTS = {
    blue: '#00509d',
    orange: '#da6a00',
} as const;

export interface Project {
    slug: string; // prefijo de las imágenes en src/assets/portfolio/
    name: string;
    accent: keyof typeof ACCENTS;
    category: Localized;
    description: Localized;
    tags: Record<Lang, string[]>;
}

export const projects: Project[] = [
    {
        slug: 'quiropraxia',
        name: 'Quiropraxia San Pablo',
        accent: 'blue',
        category: { es: 'APP WEB', en: 'WEB APP' },
        description: {
            es: 'Aplicación web donde los usuarios pueden acceder para programar sus citas y consultar los informes que se envían mediante el sistema de gestión diseñado para los profesionales, en el cual podrán organizar citas, planes, cargar informes y tener un control completo sobre sus pacientes.',
            en: 'Web application where users can access to schedule their appointments and consult the reports that are sent through the management system designed for professionals, in which they can organize appointments, plans, upload reports and have complete control over their patients.',
        },
        tags: {
            es: ['Flutter', 'Firebase', 'Checkout Mercado Pago', 'Python'],
            en: ['Flutter', 'Firebase', 'Mercado Pago Checkout', 'Python'],
        },
    },
    {
        slug: 'sanpablo',
        name: 'San Pablo Apóstol',
        accent: 'orange',
        category: { es: 'APP WEB', en: 'WEB APP' },
        description: {
            es: 'Aplicación web desarrollada para el grupo scout San Pablo Apóstol, orientada a digitalizar y simplificar la gestión de ventas de pastelitos. Los compradores pueden realizar y autogestionar sus pedidos eligiendo cantidades y sabores, abonando de forma rápida y segura a través de Mercado Pago. Los responsables acceden a un panel protegido donde visualizan el listado completo con filtros por rama y vendedor, gestionan el estado de entrega y consultan los totales en tiempo real.',
            en: 'Web application developed for the San Pablo Apóstol scout group, aimed at digitizing and simplifying the management of cupcake sales. Buyers can place and self-manage their orders by choosing quantities and flavors, paying quickly and securely through Mercado Pago. Those responsible access a protected panel where they view the complete list with filters by branch and seller, manage the delivery status and consult the totals in real time.',
        },
        tags: {
            es: ['Flutter', 'Firebase', 'Checkout Mercado Pago', 'Python'],
            en: ['Flutter', 'Firebase', 'Mercado Pago Checkout', 'Python'],
        },
    },
    {
        slug: 'eyhera',
        name: 'Distribuidora Eyhera',
        accent: 'blue',
        category: { es: 'SOFTWARE A MEDIDA', en: 'CUSTOM SOFTWARE' },
        description: {
            es: 'Aplicación web desarrollada para Distribuidora Eyhera, orientada a digitalizar y optimizar la operación diaria de una distribuidora. Cuenta con un catálogo inteligente donde los productos pueden cargarse mediante PDFs analizados con IA, que extrae y registra los ítems automáticamente. Incluye un planeador de rutas integrado con la API de Google Places que sugiere puntos de visita dentro de un radio configurable, un generador de planillas de carga para organizar cada salida de la camioneta, y un gestor completo de clientes para mantener el control de toda la cartera comercial.',
            en: 'Web application developed for Distribuidora Eyhera, aimed at digitizing and optimizing the daily operation of a distributor. It has an intelligent catalog where products can be loaded using PDFs analyzed with AI, which extracts and records the items automatically. It includes a route planner integrated with the Google Places API that suggests visiting points within a configurable radius, a load sheet generator to organize each van departure, and a complete customer manager to maintain control of the entire commercial portfolio.',
        },
        tags: {
            es: ['Flutter', 'Firebase', 'Python', 'Integración con IA', 'API de Google Maps'],
            en: ['Flutter', 'Firebase', 'Python', 'AI integration', 'Google Maps API'],
        },
    },
    {
        slug: 'atmtc',
        name: 'A tu mesa todo caserito',
        accent: 'orange',
        category: { es: 'PÁGINA WEB', en: 'LANDING PAGE' },
        description: {
            es: 'Página web diseñada para atraer clientes y asegurar ventas, con implementación SEO completa y redirección a Whatsapp',
            en: 'Website designed to attract customers and secure sales, with full SEO implementation and redirection to WhatsApp',
        },
        tags: {
            es: ['Flutter', 'Firebase', 'API de Whatsapp', 'SEO'],
            en: ['Flutter', 'Firebase', 'WhatsApp API', 'SEO'],
        },
    },
];

// Todas las capturas del portfolio, resueltas en build
const shots = import.meta.glob<{ default: ImageMetadata }>(
    '../assets/portfolio/*.{png,jpg,jpeg,webp}',
    { eager: true },
);

/** Devuelve las imágenes <slug>_1, <slug>_2, ... ordenadas */
export function projectImages(slug: string): ImageMetadata[] {
    const re = new RegExp(`/${slug}_\\d+\\.[a-z]+$`);
    return Object.entries(shots)
        .filter(([path]) => re.test(path))
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, mod]) => mod.default);
}