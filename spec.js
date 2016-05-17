describe('Enter Scrolltest int he Test Box', function() {
 it('Should add a text ScrollTest', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('scrolltest');
  var gg1= element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(gg1.getText()).toEqual('Hello scrolltest!');
  });
});