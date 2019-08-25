import { HeroesComponent } from "./heroes.component";
import { of } from 'rxjs';

// describe for class
describe('HeroesComponent', () => {
    // set up (make available)
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        // dummy mock of data (isolated test,also not testing data from the server)
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55}
        ]

        // spy mock of service
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero' ])
        // arrange
        component = new HeroesComponent(mockHeroService);
    })

    // describe for delete function/method
    describe('delete', () => {
        // state based test
        it('should remove the indicated hero from the heroes list', () => {
            // arrange
            mockHeroService.deleteHero.and.returnValue(of(true)) // returns an obesrvable for the chained subscribe method
            component.heroes = HEROES;

            // act 
            component.delete(HEROES[2]);

            // assert
            expect(component.heroes.length).toBe(2);
        });

        // interaction test
        it('should call delete hero with second hero as a parameter', () => {
            // arrange
            mockHeroService.deleteHero.and.returnValue(of(true)) // returns an obesrvable for the chained subscribe method
            component.heroes = HEROES;

            // act 
            component.delete(HEROES[2]);

            // assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });

    })

    // describe for add function/method

    // describe for get Heroes function/method

})