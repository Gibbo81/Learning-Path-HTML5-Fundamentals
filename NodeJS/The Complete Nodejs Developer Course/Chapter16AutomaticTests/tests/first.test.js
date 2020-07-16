/*the file name is important:
Jester looks for file with the followinf format: *.test.js
this file mathc the convention

If the test fail simple throw an error
*/

test('test name here', () => {

})

test('this should fail', () =>{
    throw new Error('Test Failure!')
})