import { Tutorials } from "../Data/Tutorials.js"
import { References } from "../Data/References.js"
import { ExercisesandQuizzes } from "../Data/ExercisesandQuizzes.js"

/*******/
//store mobile menu Content
let mobileTutorialContent = ""
let mobileReferencesContent = ""
let mobileExcersesContent = ""

//section mobile btn
let MenuBtnMobileEl = document.getElementById("Menu-btn-Mobile")
let MenuBtnMobileElOpenBoolen = false
let mobileMenuNavEl = document.getElementById("mobile-menu-nav")

MenuBtnMobileEl.addEventListener("click", () => {
    if (MenuBtnMobileElOpenBoolen) {
        // mobileMenuNavEl.style.display = "none"
        mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen = false
    }
    else {
        // mobileMenuNavEl.style.display = "block"
        mobileMenuNavEl.classList.add("mobile-menu-nav-hidden")
        MenuBtnMobileElOpenBoolen = true
    }
})

let mobileNavcloseEl = document.getElementById("mobile-Nav-close")
mobileNavcloseEl.addEventListener("click", () => {
    // mobileMenuNavEl.style.display = "none"
    mobileMenuNavEl.classList.remove("mobile-menu-nav-hidden")
    MenuBtnMobileElOpenBoolen = false
})


/**************************Tutorial-btn******************** */
const NestedNavigationContainer = document.getElementById("nested-navigation-container_id")
let TutorialEl = document.getElementById("Tutorial-btn")
const nestedNavigationCloseBtn = document.getElementById("nested-navigation-close-Btn")

TutorialEl.addEventListener("click", toggleTutorial)
nestedNavigationCloseBtn.addEventListener("click", closeMenuContent)

//menu close X
function closeMenuContent() {
    NestedNavigationContainer.classList.toggle("nested_navigation_hidden")

    //tutorial
    TutorialEl.classList.remove("bg-black")
    TutorialEl.classList.remove("text-white")
    //reference
    referencesBtnEl.classList.remove("bg-black")
    referencesBtnEl.classList.remove("text-white")
    //exercises
    exercisesBtnEl.classList.remove("bg-black")
    exercisesBtnEl.classList.remove("text-white")
}

function toggleTutorial() {
    TutorialEl.classList.toggle("bg-black")
    TutorialEl.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    tutorialMenuDisplayAll()
    //reference
    referencesBtnEl.classList.remove("bg-black")
    referencesBtnEl.classList.remove("text-white")
    //exercises
    exercisesBtnEl.classList.remove("bg-black")
    exercisesBtnEl.classList.remove("text-white")
}

//menu id
/********************************/
let nestedNavigationContainerContentID = document.getElementById("nested-navigation-container-contentID")
let nestedNavigationHeading = ''
let nestedNavigationTab1 = ''
let nestedNavigationTab2 = ''
let nestedNavigationTab3 = ''
let nestedNavigationTab4 = ''





/********mobile tutorial menu */
const tutorialMenuLinkMobileEl = document.getElementById("tutorial_menuLink_mobile")
let TutorialMenuMobileEl = document.getElementById("Tutorial_menu_mobile")

tutorialMenuLinkMobileEl.addEventListener("click", () => {
    tutorialMenuDisplayAll()
    let tutorialMenuTab_MObile = mobileTutorialContent

    tutorialMenuLinkMobileEl.classList.toggle("mobile_menu_Active")
    TutorialMenuMobileEl.classList.toggle("mobile_menuActive_tutorial")

    TutorialMenuMobileEl.innerHTML = tutorialMenuTab_MObile

})
/********mobile referece menu */
const referencesMenuLinkMobileEl = document.getElementById("references_menuLink_mobile")
let referencesMenuMobileEl = document.getElementById("references_menu_mobile")

referencesMenuLinkMobileEl.addEventListener("click", () => {
    referenceContent()
    let tutorialMenuTab_MObile = mobileReferencesContent

    referencesMenuLinkMobileEl.classList.toggle("mobile_menu_Active")
    referencesMenuMobileEl.classList.toggle("mobile_menuActive_tutorial")

    referencesMenuMobileEl.innerHTML = tutorialMenuTab_MObile

})
/********mobile exercises menu */
const exercisesMenuLinkMobileEl = document.getElementById("exercises_menuLink_mobile")
let exercisesMenuMobileEl = document.getElementById("exercises_menu_mobile")

exercisesMenuLinkMobileEl.addEventListener("click", () => {
    exercisesContent()
    let tutorialMenuTab_MObile = mobileExcersesContent

    exercisesMenuLinkMobileEl.classList.toggle("mobile_menu_Active")
    exercisesMenuMobileEl.classList.toggle("mobile_menuActive_tutorial")

    exercisesMenuMobileEl.innerHTML = tutorialMenuTab_MObile

})


function tutorialMenuDisplayAll() {
    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''



    /******************************* */
    //heading
    nestedNavigationHeading = `<h1>${Tutorials.name}</h1>`

    //sub menu
    // 1
    nestedNavigationTab1 = `<h2>${Tutorials.HTMLAndCSS.name}</h2>`
    Tutorials.HTMLAndCSS.menu.forEach(el => {
        nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
    })
    //2
    nestedNavigationTab2 = `<h2>${Tutorials.JavaScript.name}</h2>`
    Tutorials.JavaScript.menu.forEach(el => {
        nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab2 += `<h2>${Tutorials.Programming.name}</h2>`
    Tutorials.Programming.menu.forEach(el => {
        nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
    })

    //3
    nestedNavigationTab3 = `<h2>${Tutorials.ServerSide.name}</h2>`
    Tutorials.ServerSide.menu.forEach(el => {
        nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab3 += `<h2>${Tutorials.WebBuilding.name}</h2>`
    Tutorials.WebBuilding.menu.forEach(el => {
        nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
    })

    //4
    nestedNavigationTab4 = `<h2>${Tutorials.DataAnalytics.name}</h2>`
    Tutorials.DataAnalytics.menu.forEach(el => {
        nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab4 += `<h2>${Tutorials.XMLTutorials.name}</h2>`
    Tutorials.XMLTutorials.menu.forEach(el => {
        nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
    })

    ///render all the menu
    nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}   
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2} 
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3} 
    </div>        
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`

    mobileTutorialContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''
}




//reference section javascript
console.log(References)
let referencesBtnEl = document.getElementById("references-btn")

referencesBtnEl.addEventListener("click", () => {
    // alert("hii")
    referencesBtnEl.classList.toggle("bg-black")
    referencesBtnEl.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    //tutorial
    TutorialEl.classList.remove("bg-black")
    TutorialEl.classList.remove("text-white")
    //exercises
    exercisesBtnEl.classList.remove("bg-black")
    exercisesBtnEl.classList.remove("text-white")

    referenceContent()
})

function referenceContent() {
    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''

    /******************************* */
    //heading
    nestedNavigationHeading = `<h1>${References.name}</h1>`

    //sub menu
    // 1
    nestedNavigationTab1 = `<h2>${References.HTML.name}</h2>`
    References.HTML.menu.forEach(el => {
        nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab1 += `<h2>${References.CSS.name}</h2>`
    References.CSS.menu.forEach(el => {
        nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
    })


    //2
    nestedNavigationTab2 += `<h2>${References.JavaScript.name}</h2>`
    References.JavaScript.menu.forEach(el => {
        nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab2 += `<h2>${References.Programming.name}</h2>`
    References.Programming.menu.forEach(el => {
        nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
    })

    //3
    nestedNavigationTab3 += `<h2>${References.ServerSide.name}</h2>`
    References.ServerSide.menu.forEach(el => {
        nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
    })
    nestedNavigationTab3 += `<h2>${References.XML.name}</h2>`
    References.XML.menu.forEach(el => {
        nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
    })

    //4
    nestedNavigationTab4 += `<h2>${References.CharacterSets.name}</h2>`
    References.CharacterSets.menu.forEach(el => {
        nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
    })


    ///render all the menu
    nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}   
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2} 
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3} 
    </div>        
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`
    mobileReferencesContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''
}

//exercises-btn
let exercisesBtnEl = document.getElementById("exercises-btn")

exercisesBtnEl.addEventListener("click", () => {
    exercisesBtnEl.classList.toggle("bg-black")
    exercisesBtnEl.classList.toggle("text-white")
    NestedNavigationContainer.classList.remove("nested_navigation_hidden")

    //tutorial
    TutorialEl.classList.remove("bg-black")
    TutorialEl.classList.remove("text-white")
    //reference
    referencesBtnEl.classList.remove("bg-black")
    referencesBtnEl.classList.remove("text-white")

    exercisesContent()
})

function exercisesContent() {
    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''

    /******************************* */
    //heading
    nestedNavigationHeading = `<h1>${ExercisesandQuizzes.name}</h1>`

    //sub menu
    // 1
    nestedNavigationTab1 = `<h2>${ExercisesandQuizzes.Exercises.name}</h2>`
    ExercisesandQuizzes.Exercises.menu.forEach(el => {
        nestedNavigationTab1 += `<a href="${el.link}">${el.title}</a>`
    })

    //2
    nestedNavigationTab2 += `<h2>${ExercisesandQuizzes.Quizzes.name}</h2>`
    ExercisesandQuizzes.Quizzes.menu.forEach(el => {
        nestedNavigationTab2 += `<a href="${el.link}">${el.title}</a>`
    })


    //3
    nestedNavigationTab3 += `<h2>${ExercisesandQuizzes.Courses.name}</h2>`
    ExercisesandQuizzes.Courses.menu.forEach(el => {
        nestedNavigationTab3 += `<a href="${el.link}">${el.title}</a>`
    })


    //4
    nestedNavigationTab4 += `<h2>${ExercisesandQuizzes.Certificates.name}</h2>`
    ExercisesandQuizzes.Certificates.menu.forEach(el => {
        nestedNavigationTab4 += `<a href="${el.link}">${el.title}</a>`
    })


    ///render all the menu
    nestedNavigationContainerContentID.innerHTML = `
${nestedNavigationHeading}
<div class="nested-navigation-container_Content_data">
    <div class="nested-navigation_item">
        ${nestedNavigationTab1}   
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab2} 
    </div>
    <div class="nested-navigation_item">
        ${nestedNavigationTab3} 
    </div>        
    <div class="nested-navigation_item">
        ${nestedNavigationTab4}
    </div>
</div>
`
    mobileExcersesContent = nestedNavigationHeading + nestedNavigationTab1 + nestedNavigationTab2 + nestedNavigationTab3 + nestedNavigationTab4

    nestedNavigationHeading = ''
    nestedNavigationTab1 = ''
    nestedNavigationTab2 = ''
    nestedNavigationTab3 = ''
    nestedNavigationTab4 = ''
}



/**********************************************************************************************/
const htmlCode = `<!DOCTYPE html>
        <html>
        <title>HTML Tutorial</title>
        <body>
                                
        <h1>This is heading</h1>
        <p>This is paragraph.</p>

        </body>
        </html>  
        
        


`
document.getElementById("htmlCode").innerText = htmlCode

const cssCode =
    `body {
    background-color: lightblue;
}

h1 {
    color: white;
    text-align: center;
}

p {
    font-family: verdana;
}
`
document.getElementById("cssCode").innerText = cssCode

const javascriptCode =
    `<button onclick="myFunction()">Click Me!</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>
`
document.getElementById("javaScriptCode").innerText = javascriptCode

const pythonCode =
    `
if 5 > 2:
  print("Five is greater than two!")





`
document.getElementById("pythonCode").innerText = pythonCode

const SQLCode =
    `SELECT * FROM Customers
WHERE Country='Mexico';






`
document.getElementById("SQLCode").innerText = SQLCode


/**********************************************************************************************/
//code editor section 
let ImageAnimationCodeEditor = document.getElementById("animationCodeEditorPart")
let codeEditor_frontend = document.getElementById("codeEditor_frontend")
let codeEditor_backendEl = document.getElementById("codeEditor_backend")

codeEditor_backendEl.addEventListener("click", () => {
    ImageAnimationCodeEditor.src = "https://www.w3schools.com/tryit/best2.gif"

    codeEditor_frontend.classList.toggle("active")
    codeEditor_backendEl.classList.toggle("active")
})
codeEditor_frontend.addEventListener("click", () => {
    ImageAnimationCodeEditor.src = "https://www.w3schools.com/codeeditor.gif"

    codeEditor_frontend.classList.toggle("active")
    codeEditor_backendEl.classList.toggle("active")
})



// how to section slide image

let howtoSecton_itemEl = document.querySelectorAll(".howtoSecton_item")
let imageSlidePreveEl = document.getElementById("imageSlidePreve")
let imageSlideNextEl = document.getElementById("imageSlideNext")
let slideImageCurrent = 0;
let howtosection_active_imageEl = document.querySelectorAll(".imageSlideActive")

let imageSlideActive1El = document.getElementById("imageSlideActive1")
let imageSlideActive2El = document.getElementById("imageSlideActive2")
let imageSlideActive3El = document.getElementById("imageSlideActive3")


function activeImageSlideDot(value) {
    switch (value) {
        case 0:
            imageSlideActive1El.classList.add("activeImage")

            imageSlideActive2El.classList.remove("activeImage")
            imageSlideActive3El.classList.remove("activeImage")
            break;
        case -100:
            imageSlideActive1El.classList.remove("activeImage")
            imageSlideActive2El.classList.add("activeImage")
            imageSlideActive3El.classList.remove("activeImage")
            break;
        case -200:
            imageSlideActive1El.classList.remove("activeImage")
            imageSlideActive2El.classList.remove("activeImage")
            imageSlideActive3El.classList.add("activeImage")
            break;

    }
}

imageSlideNextEl.addEventListener("click", nextSlideImage)

imageSlidePreveEl.addEventListener("click", () => {
    if (slideImageCurrent < 0) {
        slideImageCurrent += 100
    }
    howtoSecton_itemEl.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeImageSlideDot(slideImageCurrent)
})

function nextSlideImage() {

    if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
        slideImageCurrent -= 100
    }
    howtoSecton_itemEl.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeImageSlideDot(slideImageCurrent)


}


function renderAllImageAutoMatic() {
    if (slideImageCurrent <= 0 && slideImageCurrent >= -100) {
        slideImageCurrent -= 100
    } else {
        slideImageCurrent = 0
    }
    howtoSecton_itemEl.forEach(el => {
        el.style.transform = `translateX(${slideImageCurrent}%)`
    })

    activeImageSlideDot(slideImageCurrent)

    console.log(slideImageCurrent)
}
setInterval(renderAllImageAutoMatic, 2000)
console.log(howtoSecton_itemEl)