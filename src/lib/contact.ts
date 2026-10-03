import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, doc, updateDoc, arrayUnion } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyCsY51y9ESMmjohIEdge2SxIaqKoFMsJ2E',
    appId: '1:1072530073766:web:a9b7733dce6b373235ec67',
    messagingSenderId: '1072530073766',
    projectId: 'quarks-studio-10f4a',
    authDomain: 'quarks-studio-10f4a.firebaseapp.com',
    storageBucket: 'quarks-studio-10f4a.firebasestorage.app',
};

export interface Consulta {
    nombre: string;
    mail: string;
    numero: string;
    mensaje: string;
}

export async function sendConsulta(c: Consulta): Promise<void> {
    const app = getApps()[0] ?? initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Mismo shape que la versión Flutter → la Function enviarConsultaActualizada no cambia
    await updateDoc(doc(db, 'Web', 'Consultas Clientes'), {
        Consultas: arrayUnion({
            Nombre: c.nombre,
            Mail: c.mail,
            'Número': c.numero,
            Mensaje: c.mensaje,
        }),
    });
}