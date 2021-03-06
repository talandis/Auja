define(['build/Objects/Page/Form/email'], function (Item) {
    describe('Email form item', function () {

        beforeEach(function () {
            this.addMatchers(require('jasmine_matchers'));
        });

        it('should return corresponding attributes', function () {
            var item = new Item({
                order: 10,
                name: 'thename',
                label: 'The name',
                value: 'joris@label305.com',
                required: true
            });

            expect(item.getAttributes()).toHaveKeys([
                'type',
                'value',
                'name'
            ]);

        });

        it('should implement a form item', function () {

            var item = new Item({
                order: 10,
                name: 'thename',
                label: 'The name',
                value: 'joris@label305.com',
                required: true
            });

            //Text spec of transferring initial data
            expect(item.getType()).toBe('email');
            expect(item.getOrder()).toBe(10);
            expect(item.getName()).toBe('thename');
            expect(item.getLabel()).toBe('The name');
            expect(item.getValue()).toBe('joris@label305.com');
            expect(item.isRequired()).toBe(true);

            //Test spec of setters
            item.setOrder(2);
            item.setName('somename');
            item.setLabel('Your name');
            item.setValue('alexander@label305.com');
            item.setRequired(false);

            expect(item.getOrder()).toBe(2);
            expect(item.getName()).toBe('somename');
            expect(item.getLabel()).toBe('Your name');
            expect(item.getValue()).toBe('alexander@label305.com');
            expect(item.isRequired()).toBe(false);

        });

    });
});
