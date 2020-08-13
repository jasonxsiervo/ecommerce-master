function Person(name, foods) {
    this.name = name;
    this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
    return  new Promise((resolve, reject) => {
        // Simulate an API
        setTimeout(() => resolve(this.foods), 2000);
    })
}

describe('mocking learning', () => {
    it.skip('it mocks a reg function', () => {
        const fetchDogs = jest.fn();
        fetchDogs('snickers');
        expect(fetchDogs).toHaveBeenCalled();
        expect(fetchDogs).toHaveBeenCalledWith('snickers');
        fetchDogs('hugo');
        expect(fetchDogs).toHaveBeenCalledTimes(2);
    });

    it.skip('can create a person', () => {
        const me = new Person('wes', ['pizza', 'burger']);
        expect(me.name).toEqual('wes');
    });

    it.skip('FETCH FOODS: MOCKS HOW IT WILL FETCH DATA IN AN API', async () => {
        const me = new Person('wes', ['pizza', 'burger']);
        const favfoods = await me.fetchFavFoods();
        expect(favfoods).toContain('pizza');
    });

    it.skip('FETCH FOODS: MOCK THE FAVFOODS FUNCTION', async () => {
        const me = new Person('wes', ['pizza', 'burger']);
        me.fetchFavFoods = jest.fn().mockResolvedValue(['sushi', 'ramen']);
        const favfoods = await me.fetchFavFoods();
        expect(favfoods).toContain('sushi');
    });
});