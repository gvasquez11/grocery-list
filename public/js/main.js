const item = document.querySelectorAll('.notInCart')
const itemUncheck = document.querySelectorAll('.itemInCart')
const itemDelete = document.querySelectorAll('.fa-trash')


Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(itemUncheck).forEach((element)=>{
    element.addEventListener('click', markUncomplete)
})

Array.from(itemDelete).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})



async function markComplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markComplete', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': itemText
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function markUncomplete(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('markUncomplete',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS' : itemText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function deleteItem(){
    const itemText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteItem',{
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS' : itemText
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

