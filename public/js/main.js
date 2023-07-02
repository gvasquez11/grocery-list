const item = document.querySelectorAll('span.notInCart')
const itemUncheck = document.querySelectorAll('span.itemInCart')

Array.from(item).forEach((element)=>{
    element.addEventListener('click', markComplete)
})

Array.from(itemUncheck).forEach((element)=>{
    element.addEventListener('click', markUncomplete)
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