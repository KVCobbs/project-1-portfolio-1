
# Project Description 

This project is creating a website to showcase the work that i’ve done so far in the General Assembly bootcamp. It also tells the internet little things about myself.

## Planning Documents

Time matrix, wireframes and inspiration are in the project worksheet docx:
[ProjectWorksheet](Project%20Worksheet.docx)

## Additional Libraries
    [Font Awesome](https://fontawesome.com/v4.7.0/)
    [Jquery](https://code.jquery.com/jquery-3.5.1.min.js)
    [Fonts](https://fonts.google.com/specimen/Lato?query=lato)
    [Font B](https://fonts.google.com/specimen/Lora?query=lora)

## Code im proud of
    ```javascript
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
    ```
## Issues and Resolutions
    Post Error 400 [google form]
        When setting up the custom made form I had created, to a google form I got error 400 multiple times. The error was caused by googles email verification software. Due to the fact that I was testing my form using gibberish and had collect emails checked in my google form, the post request was constantly getting canceled. Removing that option solved the issue

    Entire mobile setup broke
        I used a different approach than what I was used to when making this site. I recreated the mobile before moving to the desktop. I wasn't super familiar with the ins and outs of CSS so I ended up breaking all the mobile styling. I had to spend a day styling desktop and then rewriting the mobile styling to cancel out the desktop styling out.

    Working within the Post Function
        Figuring out where to put my Javascript/jQuery in order to access the information gained in the post request was difficult for me.