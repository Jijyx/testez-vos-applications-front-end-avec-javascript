import Pagination from './index.js'

/* 
• Un cas de test où je lui passe 12 en paramètre. Ici, je ne vais pas tester le résultat de la
fonction, mais simplement vérifier si la fonction me retourne bien quelque chose. On utilisera
: expect().toBeDefined()
• Un cas de test où je lui passe 0 en paramètre, soit aucun capteur. Et je teste si le nombre
de pages retourné est 0.
• Un cas de test où je lui passe 7. Le résultat retourné par la fonction devrait être de 1, car
j’affiche 8 capteurs par page. Autrement dit, il n’y aura qu’une seule page.
• Enfin, un cas où je lui passe 34, et où je teste si j’ai bien 5 pages.
*/

describe('Pagination Unit Test Suites', () => {
    it('should return something', () => {
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    })

    it('should return 0', () => {
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    })

    it('should return 1', () => {
        expect(Pagination.getNumberOfPages(7)).toEqual(1)
    })

    it('should return 5', () => {
        expect(Pagination.getNumberOfPages(34)).toEqual(5)
    })
})

