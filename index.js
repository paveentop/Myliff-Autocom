// Import stylesheets
import "./style.css"

// Body element
const body = document.getElementById('body')
async function main() {
  // Initialize LIFF app)
  await liff.int({liffid:"1656184202-92LaVEqq"})
  // Try a LIFF function
  switch(liff.getOS()){
    case"android":body.style.backgroundColor="#d1f5d3";break
    case"ios":body.style.backgroundColor="eeeeee";break
  }
  
}

main()

