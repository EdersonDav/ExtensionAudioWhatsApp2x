const interval = setInterval(()=>{  

    const header = document.querySelector("._3auIg")
    
    if(header){
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimes")

        let active = 0

        button.addEventListener("click", () => {
            
            active == 0 ? active = 1 : active = 0
            const audios = document.querySelectorAll('audio')

            if(active == 1)
            {
                button.classList = "active"
                
                audios.forEach((audio) => {
                    console.log(audio)
                    audio.playbackRate = 2                
                })

            }
            else
            {
                button.classList = "twoTimes"
                
                audios.forEach((audio) => {
                    console.log(audio)
                    audio.playbackRate = 1                
                })
            }
                        
        })

        header.appendChild(button)
    }

},1000)
