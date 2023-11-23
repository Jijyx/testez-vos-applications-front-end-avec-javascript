/**
* @jest-environment jsdom
*/

// Ici j'importe DOM Test Library
import '@testing-library/jest-dom' 
import {
    getByRole,
    getByTestId,
    getByLabelText
} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import SignInPage from '../../pages/signIn/index'
import { handleSignInForm } from './index'


beforeEach(() => {
document.body.innerHTML = SignInPage.render()
handleSignInForm()
})


afterEach(() => {
document.body.innerHTML = ''
})

/*
Test 1
• Given : en tant qu’utilisateur déconnecté
• When : je complète les informations du formulaire avec une erreur dans l’e-mail thomas@thomas.com au lieu de thomas@facadia.com
• When : je clique sur le bouton submit
• Then : un message d’erreur s’affiche
Test 2
• Given : en tant qu’utilisateur déconnecté
• When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com
• When : je clique sur le bouton submit
• Then : un message d’erreur pour le mot de passe s’affiche
Test 3
• Given : en tant qu’utilisateur déconnecté
• When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com et le mauvais mot de passe qwerty
• When : je clique sur le bouton submit
• Then : un message d’erreur pour le mot de passe s’affiche
Test 4
• Given : en tant qu’utilisateur déconnecté
• When : je complète les informations du formulaire avec la bonne adresse e-mail thomas@facadia.com et le bon mot de passe azerty
• When : je clique sur le bouton submit
• Then : aucun message d’erreur ne s’affiche
*/

const goodEmail = 'thomas@facadia.com'
const goodPassword = 'azerty'

describe('Sign in form test suites', () => {
    it('should return an error if the user email is not valid', () => {
        // on récupère l'élément input ayant l'id user-email et on lui ajoute la valeur thomas@thomas
        userEvent.type(getByLabelText(document.body, 'Votre addresse e-mail'),'thomas@thomas.com')
        // on récupère l'élément button ayant le role button et on le clique
        userEvent.click(getByRole(document.body, 'button'))
        // on vérifie que l'élément avec le data-testid user-email-error-msg n'a pas la classe hidden 
        // car il doit être affiché car l'email n'est pas valide
        expect(getByTestId(document.body, 'user-email-error-msg')).not.toHaveClass('hidden')
    })

    it('should return an error if the user password is not writen', () => {
        userEvent.type(getByLabelText(document.body, 'Votre addresse e-mail'), goodEmail)
        userEvent.click(getByRole(document.body, 'button'))
        expect(getByTestId(document.body, 'user-password-error-msg')).not.toHaveClass('hidden')
    })

    it('should return an error if the user password is not valid', () => {
        userEvent.type(getByLabelText(document.body, 'Votre addresse e-mail'), goodEmail)
        userEvent.type(getByLabelText(document.body, 'Votre mot de passe'), 'gergzeg')
        userEvent.click(getByRole(document.body, 'button'))
        expect(getByTestId(document.body, 'user-password-error-msg')).not.toHaveClass('hidden')
    })

    it('should return no error', () => {
        userEvent.type(getByLabelText(document.body, 'Votre addresse e-mail'), goodEmail)
        userEvent.type(getByLabelText(document.body, 'Votre mot de passe'), goodPassword)
        userEvent.click(getByRole(document.body, 'button'))
        expect(getByTestId(document.body, 'user-password-error-msg')).toHaveClass('hidden')
        expect(getByTestId(document.body, 'user-email-error-msg')).toHaveClass('hidden')
    })
})