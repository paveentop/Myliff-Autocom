// Import stylesheets
import "./style.css"

// Body element
const body = document.getElementById('body')

// Button elements
const btnSend = document.getElementById("btnSend")
const btnClose = document.getElementById("btnClose")
const btnShare = document.getElementById("btnShare")
const btnLogIn = document.getElementById("btnLogIn")
const btnLogOut = document.getElementById("btnLogOut")
const btnScanCode = document.getElementById("btnScanCode")
const btnOpenWindow = document.getElementById("btnOpenWindow")

// Profile elements
const email = document.getElementById("email")
const userId = document.getElementById("userId")
const pictureUrl = document.getElementById("pictureUrl")
const displayName = document.getElementById("displayName")
const statusMessage = document.getElementById("statusMessage")

// QR element
const code = document.getElementById("code")
const friendShip = document.getElementById("friendShip")

async function main() {
  // Initialize LIFF app)
  await liff.int({liffid:"1656184202-92LaVEqq"})
  // Try a LIFF function
  switch(liff.getOS()){
    case"android":body.style.backgroundColor="#d1f5d3";break
    case"ios":body.style.backgroundColor="eeeeee";break
  }
  getUserProfile()
}
async function getUserProfile(){
  const Profile = await liff.getProfile()
  pictureUrl.src = Profile.pictureUrl
  userId.innerHTML = "<b>userId:</b>"+Profile.userId
  statusMessage.innerHTML = "<b>statusMessage:</b>"+Profile.statusMessage
  displayName.innerHTML = "<b>displayName:</b>"+Profile.displayName
  email.innerHTML ="<b>email:</b>"+liff.getDecodedIDToken().email
}
main()
