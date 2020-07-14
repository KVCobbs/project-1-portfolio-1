//https://docs.google.com/spreadsheets/d/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/edit#gid=0

//take this 1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs place into bottom link

//https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json


const url = 'https://spreadsheets.google.com/feeds/list/1L-41kQAND4wxOdAVPq1EVSBNMyOmeAmthOdraPwCpRs/od6/public/values?alt=json'

//contact api stuff
//1XPBFwhTM6bRryjSDFnR0tyxa9RPAH1CUh3eT2mGa2ZU

const url = 'https://spreadsheets.google.com/feeds/list/1XPBFwhTM6bRryjSDFnR0tyxa9RPAH1CUh3eT2mGa2ZU/od6/public/values?alt=json' 


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
