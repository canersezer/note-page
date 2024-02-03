const input = document.querySelector('.input-box');
const create = document.querySelector('.create-button')
const notes = document.querySelector('.container')


create.addEventListener('click',(e)=>{
    if(e.target.classList == "create-button"){
        const div = document.createElement('div')
        div.classList.add('notes-container')
        const p = document.createElement('p')
        p.setAttribute('contenteditable','true')
        const img = document.createElement('img')
        img.setAttribute('class', 'img')
        img.src = 'delete.png'
        p.appendChild(img)
        p.classList.add('input-box')
        div.append(p)
        notes.appendChild(div)
    }
notes.addEventListener('click',(e)=>{
    if(e.target.classList == "img"){
        e.target.parentElement.remove()
    }
})


   
   
   
    






})


