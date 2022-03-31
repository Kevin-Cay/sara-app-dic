import db from './firebase_config'
import { getDoc, getDocs, doc, collection, addDoc } from './firebase_config'

export const getServicios = async() => {
    const servicios = await getDocs(collection(db, 'servicios'))
    return servicios.docs
}