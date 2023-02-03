export const generateTemplate = (title, content) => `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="./favicon.ico">
    <title>${title}</title>
    <style type="text/css">
        body{
            padding:15px;
        }
        td{
            border:1px solid #d3d3d3;
        }
        table{
            border:1px solid #d3d3d3;
            border-collapse: collapse;
        }
    </style>
  </head>
  <body>
    ${content}
  </body>
</html>
`;
