function customRender(element, container){
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        domElement.setAttribute(prop,element.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement  = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click here to visit google"
}

const mainContainer = document.getElementById("root")


customRender(reactElement, mainContainer);

// this is how react converts the jsx elements into hierarchy of react Elements ( virutual DOM) that  represent the structure of User Interface.
