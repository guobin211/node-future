// 	"React.FC": {
// 		"prefix": "rfc",
// 		"body": [
// 			"import React from 'react'",
// 			"\r\n",
// 			"const $1: React.FC = () => {",
// 			"  return (",
// 			"    <div>",
// 			"    </div>",
// 			"  )",
// 			"}",
// 			"export default $1"
// 		],
// 		"description": "React.FC No Props"
// 	},

const STRING_BREAK = "\r\n"
const STRING_SPACE = " "


function parseTemplate(componentFile) {
  const { className, body, prefix, description } = componentFile

  const output = {
    "prefix": `${prefix}`,
    "body": [],
    "description": `${description}`
  }
  output.body.push(STRING_BREAK)
  output.body.push("  return (",)
  console.log(output)
}

parseTemplate({className: "MButton", body: [], description: "React.FC", prefix: "rfc"})
