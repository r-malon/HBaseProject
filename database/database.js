const hbase = require('hbase')
const client = hbase({
	host: '127.0.0.1',
	port: 8080
})

const books = hbase({}).table('books')
books.create('name')
books.create('date')
books.create('pages')

module.exports.client = client
module.exports.books = books
