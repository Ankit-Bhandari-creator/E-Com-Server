exports.signupEmailBody = (name, id) => {
    return `
    <!doctype html>
    <html>
    <head>
    </head>
    <body>
      <div style="width:500px;height:500px;background-color:violet;">
      <h3>Dear ${name}</h3>
      <h1>Verification For Signup</h1>
      <h2>Welcome In KickShoes</h2>

      <a href=http://192.168.0.10:1818/api/v8/verifyLink${id}> Verify</a>
    </div>
    </body>
    `
}