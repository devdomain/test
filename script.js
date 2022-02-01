// array of images to display
const images = [
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
    'https://images.unsplash.com/photo-1586430660697-61769a59e739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1567818735868-e71b99932e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1610831176233-ff0dbf203815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    'https://images.unsplash.com/photo-1489008777659-ad1fc8e07097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1496467115032-c504ef76521b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1517491093410-ab48c47bc750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

// appending images dynamically in the gallery element
for(const idx in images){
    // creating a html img element
    const img = document.createElement('img')
    img.src = images[idx];
    img.alt = "car image"

    // creating the like btn for every image
    const likeBtn = document.createElement('span')
    likeBtn.classList.add('like-btn') // adding class to the span element
    likeBtn.innerHTML = '&#10084' // this is a hex code for UTF-8 heart symbol

    const imageBlock = document.createElement('div') // this is a wrapper div for img and like btn
    imageBlock.classList.add('image-block') // adding class to div 
    imageBlock.append(img) // appending img element to imageBlock div element
    imageBlock.append(likeBtn) // similarly appending likeBtn to div element

    const gallery = document.getElementById("gallery") // html gallery container
    gallery.append(imageBlock) // appending whole imageBlock to the gallery div
}

// now we will add functionality to toggle theme
const themeBtn = document.getElementById('theme-btn')
themeBtn.addEventListener('click', function(event){
    toggleTheme() // theme is toggled on theme button clicked
})

let isDark = false // variable to manage state of the theme

function toggleTheme(){
    isDark = !isDark
    const newBackGroundColor = isDark ? '#121212' : '#ffffff' // if theme is dark, set background color black else white
    const newThemeButtonText = isDark ? "🌞" : "🌙" // if theme is dark, show sun icon else show moon icon
    const newHeadingColor = isDark ? '#eeeeee' : '#121212'

    document.body.style.backgroundColor = newBackGroundColor
    themeBtn.textContent = newThemeButtonText
    const heading = document.querySelector('.heading')
    heading.style.color = newHeadingColor
}

// now we will handle like button functionality
// here we are using event delegation to listen to like btn click because there is a like btn on each and every image
document.body.addEventListener('click', function(event){
    if(event.target.className === 'like-btn'){
        event.target.style.color = '#d2042d'
    }
})