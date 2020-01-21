const express = require('express')
const app = express()
const port = 3000
let bodyParser = require('body-Parser')
let session = require('express-session')

//moteurs de template
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(session({
	secret : 'kjemzuojd',
	resave : false,
	saveUninitialized : true,
	cookie : {secure:false}
}))

app.use(require('./middleware/flash'))

//routes
app.get('/', (request,response)=>{
	console.log(request.session)
	response.render('pages/index')
})


app.get('/sample', (request,response)=>{
	response.render('pages/sample')
})

app.get('/mockups', (request,response)=>{
	response.render('pages/sample')
})

app.get('/editmode', (request,response)=>{
	response.render('pages/edit_mode')
})

app.get('/about', (request,response)=>{
	response.render('pages/about')
})

app.get('/contact', (request,response)=>{
	response.render('pages/contact')
})

app.post('/', (request, response) =>{
	if (request.body.siteurl === undefined || request.body.siteurl === ''){
		request.flash('error', "Veillez entrer une url !")
		response.redirect('/')
	} else { 
		const Pageres = require('pageres');

		new Pageres({delay: 2})
			.src(request.body.siteurl,  ['1376x800', 'iphone 7 plus', 'ipad air'], {crop: true})
			.dest('public/images/captures')
			.run();
			
		console.log('Finished generating screenshots!');

		response.redirect('/mockups')
	}
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))