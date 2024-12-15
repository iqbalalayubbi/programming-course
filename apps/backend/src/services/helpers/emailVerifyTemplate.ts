const emailVerifyTemplate = (
  username: string,
  role: string,
  callbackUrl: string,
) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verification Email</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f7fafc;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .container {
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                max-width: 400px;
                text-align: center;
            }
            h3 {
                color: #333;
            }
            p {
                color: #555;
                line-height: 1.5;
            }
            .button {
                background-color: #4CAF54;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                margin-top: 20px;
            }
            .button:hover {
                background-color: #0056b3;
            }
            .url {
                font-family: monospace;
                color: #007bff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h3>Verify Your Account</h3>
            <p>Hello <strong>${username}</strong>,</p>
            <p>Thank you for signing up as <strong>${role}</strong>. We are pleased to inform you that your account has been successfully activated!</p>
            <p>To proceed, please click the link below to log in to your account:</p>
            <a href=${callbackUrl} class="button" target="_blank">Click here to log in</a>
            <p>If you have any questions or need further assistance, please do not hesitate to contact our support team.</p>
            <p>Welcome to <strong>EZ Course</strong>!</p>
        </div>
    </body>
    </html>
    `;
};

export { emailVerifyTemplate };
