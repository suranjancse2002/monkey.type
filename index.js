// console.log("Hello")
let timer = parseInt(document.getElementById('timer').innerText)
console.log(timer)

let nooftime = 0
let flag = false;
async function startTimer(){
    setInterval(changeTime, 1000)
}
function changeTime() {
    timer -= 1;
    // console.log(timer)
    document.getElementById('timer').innerText = timer;
}

document.getElementById('textarea').addEventListener('keyup', function (e) {
    if(nooftime == 0){
        startTimer()
        nooftime++;
    }
    setTimeout(() => {
        console.log(timer)
        document.getElementById('timer').style.display = 'none'
        const text = document.getElementById('textarea').value.trim()
        console.log(text)

        const sampletext = "Lorem ipsum dolor sit amet consectetur adipisicing elit Magnam dolorem adipisci commodi ipsam officiis consequuntur vero veniam quidem Dolore neque aliquam pariatur ut maxime vitae unde sapiente corporis molestiae tenetur ad error voluptatem praesentium deserunt similique nostrum illum iure eveniet ipsum est totam ex aspernatur Eligendi esse voluptas quibusdam maiores molestiae modi nisi nesciunt animi nostrum fugiat officia dolore consectetur magnam sunt aperiam dolorem laboriosam veritatis corporis dignissimos delectus Error dignissimos eius architecto ipsum obcaecati itaque voluptas dolor possimus Sit nam sequi necessitatibus distinctio qui dolorum blanditiis facere odio repellendus enim suscipit ab officia velit sunt ut iste praesentium delectus"

        let sampleArr = sampletext.split(" ");
        let inputArr = text.split(" ");
        let matchCount = 0;

        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] == sampleArr[i]) matchCount++;
        }

        if (text == "") {
            document.getElementById('wpm').innerHTML = `${0} WPM`
        }
        else {

            const accuracy = (matchCount / (inputArr.length)) * 100
            document.getElementById('wpm').innerHTML = `${(2 * inputArr.length)} WPM`
            document.getElementById('accuracy').innerHTML = `Accuracy : ${parseInt(accuracy)}`
            document.getElementById('textarea').readOnly = true;
        }
    }, 30000);
})
// console.log(timerval)