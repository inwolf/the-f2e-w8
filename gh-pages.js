var ghpages = require('gh-pages')

ghpages.publish('dist', function (err) {
  if (err) {
    console.log('failed: ' + err)
  } else {
    console.log('deployed')
  }
})
