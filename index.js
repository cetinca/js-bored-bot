const main = document.getElementById("main")
const title = document.getElementById("title")
const activity = document.getElementById("activity")
const button = document.getElementById("button")

const url = "https://apis.scrimba.com/bored/api/activity"

button.addEventListener("click", (e) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        main.classList.toggle("fun")
        title.textContent = "🦾 HappyBot🦿"
        activity.textContent = data.activity
        setTimeout(() => {
            title.textContent = "🤖 BoredBot 🤖"
            activity.textContent = "Find something to do"
            main.classList.remove("fun")
        }, 2000)
    })
})

console.log("App running!")
