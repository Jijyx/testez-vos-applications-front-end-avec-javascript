import { retrieveSensorsData } from './sensorsApi.js'
import { data } from '../../../data/mock-homepage-data'

/*
Test 
• Given : Je suis en environnement de test
• When : J’appelle la fontion retrieveSensorsData() pour récupérer les données des
capteurs de la page d’accueil
• Then : La fonction me retourne bien les données des façades mockées
*/

describe('isInTestEnv test', () => {
    
    it('should return les donnees des façades mockees', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })


})



