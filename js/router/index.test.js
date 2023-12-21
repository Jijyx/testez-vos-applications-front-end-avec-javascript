/**
* @jest-environment jsdom
*/

// Ici j'importe DOM Test Library
import { getByTestId } from '@testing-library/dom'

import { router } from './index.js'

/*
Test 1
• Given : En tant qu’utilisateur
• When : je vais sur l’URL /
• Then : je souhaite voir la page de connexion s’afficher avec le titre : “Veuillez vous connecter”
Test 2
• Given : En tant qu’utilisateur
• When : je vais sur l’URL /#/home
• Then : je souhaite voir la page d’accueil des capteurs s’afficher avec le titre “Vos capteurs”
Test 3
• Given : En tant qu’utilisateur
• When : je vais sur l’URL /#/facade-details
• Then : je souhaite voir la page d’accueil des capteurs s’afficher avec le titre “Détails du
capteur”
Test 4
• Given : En tant qu’utilisateur
• When : je vais sur l’URL /#/add-sensor
• Then : je souhaite voir la page d’accueil des capteurs s’afficher avec le titre “Ajout d’un
nouveau capteur”
*/

describe('Router DOM test', () => {
    it ('should display the login page', async() => {
        document.body.innerHTML = `
            <div id="root"></div>
        `
        await router()
        expect(getByTestId(document.body, 'sign-in-form-title').textContent).toBe('Veuillez vous connecter')
    })

    it ('should display the sensors page', async() => {
        document.body.innerHTML = `
            <div id="root"></div>
        `
        document.location = '/#/home'
        await router()
        expect(getByTestId(document.body, 'home-sensors-title').textContent).toBe('Vos capteurs')
    })

    it ('should display the facade details page', async() => {
        document.body.innerHTML = `
            <div id="root"></div>
        `
        document.location = '/#/facade-details'
        await router()
        expect(getByTestId(document.body, 'sensor-detail-title').textContent).toBe('Détails du capteur #7')
    })

    it ('should display the add sensor page', async() => {
        document.body.innerHTML = `
            <div id="root"></div>
        `
        document.location = '/#/add-sensor'
        await router()
        expect(getByTestId(document.body, 'add-sensor-title').textContent).toBe('Ajout d\'un nouveau capteur')
    })
})