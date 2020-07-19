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
        

    //Description generator
        const  createProjectElement  = (project) => {
        const $div = $('<div>')
        $div.append($('<h2>').text(project.title))
        $div.append($('<p>').text(project.description))
        $div.append($('<a>').attr('href', project.url).text('link'))
        //alter main page
        
        return ($div)
        }
    //project image    
        const  createProjectImage  = (project) => {
            let $a = $('<a>') 
            let $img =$('<img>').attr('src', project.image)
            $a.append($img)
            return ($a)
            }
        
        
    //Makes descriptions show up! 
        const manualDis = function(x) {
            $('#temp').remove()
            $('#import').remove()
            x-= 1
            $projectDiv = createProjectElement(data[x])
            $projectDiv.attr('id', 'temp')
            $('.descriptions').prepend($projectDiv)
        //slider reset    
            // if (x > $('.slider').children().length -1 ){
            //     x = 1
            //     $projectDiv = createProjectElement(data[x])
            //     $projectDiv.attr('id', 'temp')
            //     $('.descriptions').prepend($projectDiv)
            // }
            };
            
        //creates the buttons dynamically!
       
        data.forEach((element, i) => {
            i += 1
            const $a = $('<a>').text(`${i}`).attr('href',`#${i}`).on('click', () => manualDis(i)) //anonymous function
            const $div = $('<div>').append($a)
            $('#jump').append($div)

        //This part makes image into slide
           
            const $slide = createProjectImage(element).attr('class', `${i}`)//.on('click', () => manualDis(i+1))
            const $divx = $('<div>').attr('id', `${i}`).attr('class', 'slide')
            $($divx).append($slide)
            $('.slider').append($divx)
        //Makes the slider function
    
          $(`a.${i}`).attr('href', `#${i+1}`).on('click', () => manualDis(i+1))
        })
    //Slide reset
    
    let children = $('.slider').children().length
    $(`a.${children}`).off()
    $(`a.${children}`).attr('href', '#1').on('click', () => manualDis(1))
             
    }
//------------------------------------------------------------------------
                            //Google Form Stuff

const formUrl ='https://docs.google.com/forms/d/e/1FAIpQLSfPAVCO56MAEQIJwd8JpY_NjagiqH5GTVWfZ739f_9WKaO2sw/formResponse'

const formSubmit = () => {
    
    //tags
    const nameTag = "entry.704183281"
    const emailTag = "entry.1354170679" 
    const phoneTag = "entry.800626546" 
    const messageTag = "entry.1625250508" 
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
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `${nameTag}=${name.val()}&${emailTag}=${email.val()}&${phoneTag}=${phone.val()}&${messageTag}=${message.val()}`
    })
    .then(res => {
          // clear the fields and give the user feedback
          name.val('');
          email.val('');
          phone.val('');
          message.val('');
          $('.confirmation').text('Your message has been sent. Thanks!') 
          })
      .catch(err => console.log(err))
}
  $('button').on('click', () => formSubmit())