/** @jsx React.DOM */

define([
    'react',
    'build/Components/Panels/Page/Form/password.react',
    'build/Objects/Page/Form/password',
    'jasmine_matchers'
], function (React, Password, Item) {

    describe('Password form input', function () {

        beforeEach(function () {
            this.addMatchers(require('jasmine_matchers'));
        });

        it('should have a label', function () {
            var TestUtils = React.addons.TestUtils;

            var item = new Item({
                value: 10,
                label: "This is the label"
            });

            // Render a checkbox with label in the document
            var text = TestUtils.renderIntoDocument(Password({
                item: item
            }));

            var label = TestUtils.findRenderedDOMComponentWithTag(text, 'label');
            expect(label.getDOMNode().textContent).toEqual('This is the label');
        });
    });
});