//https://docs.google.com/spreadsheets/d/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/edit#gid=0

//take this 1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs place into bottom link

//https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json


const url = 'https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json'

//contact api stuff
//1XPBFwhTM6bRryjSDFnR0tyxa9RPAH1CUh3eT2mGa2ZU

const form = 'https://spreadsheets.google.com/feeds/list/1XPBFwhTM6bRryjSDFnR0tyxa9RPAH1CUh3eT2mGa2ZU/od6/public/values?alt=json' 


fetch(url)
    .then( response => response.json())
    .then (data => {
         //console.log('data', data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map( entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }
        })
        app(projects)
        })

    const app = (data) => {
        console.log('app is running')
        console.log(data)
    

    const  createProjectElement  = (project) => {
        const $div = $('<div>')
        $div.append($('<h2>').text(project.title))
        console.log(project.title)
        $div.append($('<p>').text(project.description))
        //$div.append($('<img>').attr('src', project.image))
        $div.append($('<a>').attr('href', project.url).text('link'))
        return $div
    }

    //$('body').append(createProjectElement(data[0]))
    //function
    const manualDis = function(x) {
        $('#temp').remove()
        $('#import').remove()
        
        x-= 1
        $projectDiv = createProjectElement(data[x])
        $projectDiv.attr('id', 'temp')
        $('.descriptions').prepend($projectDiv)
        
            // switch(true){
            // case (x == 1):
            //     const $projectDiv = createProjectElement(data[x])
            // $('body').append($projectDiv)
            // break;
            // case (x == 2):
            //     const $projectDiv = createProjectElement(project)
            // $('body').append($projectDiv)
            // break;
            // case (x == 3): 
            //     const $projectDiv = createProjectElement(project)
            //     $('body').append($projectDiv)
            // break;
            // case (x == 4) :
            //       const $projectDiv = createProjectElement(project)
            //     $('body').append($projectDiv)
            // break;
            // case (x == 5):
            //     const $projectDiv = createProjectElement(project)
            // $('body').append($projectDiv)
            // break
        };
        
    //creates the buttons dynamically!
    data.forEach((element, i) => {
        i += 1
        const $a = $('<a>').text(`${i}`).attr('href',`#${i}`).on('click', () => manualDis(i)) //anonymous function
        const $div = $('<div>').append($a)
        $(`a.${i}`).attr('href', `#${i + 1}`).on('click', () => manualDis(i+1))
        $('a.5').attr('href', '#1').on('click', () => manualDis(1))
        $('#jump').append($div)
    });   
    
}
const formUrl ='https://docs.google.com/forms/d/e/1FAIpQLScsTb_KYv-caQdX2XCAB-tP3y0bwgFzWXxpV1cTYTb0eBRcDA/viewform?'

const formSubmit = () => {
    
    //tags
    const nameTag = "entry.2005620554"
    const emailTag = "entry.1045781291" 
    const phoneTag = "entry.1166974658" 
    const messageTag = "entry.839337160" 
    //user values
    let name = $('.name')
    let email = $('.email')
    let phone = $('.phone')
    let message = $('.message')

    //scary stuff!!
    fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `${nameTag}=${name.val()}&${emailTag}=${email.val()}&${messageTag}=${message.val()}`
    })
    .then(res => {
          // clear the fields and give the user feedback
          console.log(res.body);
          name.val('');
          email.val('');
          message.val('');
          $('.confirmation').text('Your message has been sent. Thanks!') 
          })
      .catch(err => console.log(err))
}
  $('button').on('click', () => formSubmit())