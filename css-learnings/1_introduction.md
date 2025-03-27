# 1. Introduction:

CSS is a language for styling html elements
CSS stands for cascading style sheets
It mainly puporse to how to displayed html elements in webpage screens
The css file extension .css (Eg: styleFile.css)

# 2. CSS syntax: two blocks ( selector and declartion )

h1 {
background-color: "red"; // declartion
color: "blue";
}
Syntax explantion:
h1 : selector (html elements)
background-color: property
"red": value
{ background-color: "red" } : declartion

# 3. Selectors:

Selectors is ( find or select ) the html element for style
CSS selectors are into 5 categories:
1-simple selectors
2-combinator selectors
3-pseudo-class-selectors
4-pseudo-element-selectors
5-attribute selectors

## Basic Selectors:

*Element selector - use HTML element ( eg: h1, p, div )
*Id selector - use HTML attribute id name and can use # hash character (eg: id="test" | #test { color: "blue"}) id
should be unique
*Class selector - use HTML attribute class name and can use . period character (eg: class="test" | .test { color:
"red"}") class name
should be unique
*Universal selector - use _ charater the all html elements reflect by defined stytle (eg: _ { color: "green"})
\*Grouping selector - The grouping selectors are same style wiyh all html elements. we can use each selctors seprate ,
comma (eg: div, p, h1 { color: "green"})

# 4. How to add CSS

There are three ways to insert style sheet

## External css:

The external css file seprate css file it can change styles entire webpage. The file will import the html file. The
external files config with
html file [ head section inside the link element ]

Eg:

  <!DOCTYPE html>
  <html>
    <head>
        <link rel="stylesheet" href="mystyle.css">
    </head>
  <body>
  </body>

</html>

## Internal css:

The Internal css file is declared in HTMl page. The style will config in [ head section inside the style element ]

Eg:

<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: linen;
        }
        h1 {
            color: maroon;
            margin-left: 40px;
        }
    </style>
</head>
<body>
</body>
</html>

## Inline css

The Inline css is style for single element with [ style attribute ]

Eg:

<!DOCTYPE html>
<html>
<body>
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
</body>
</html>

## Multiple style sheet:

If used Multiple style sheet. the last read sheet file only used.

## cascading style sheet order execution:

1.Inline style - inside the HTML element it's high priority and it will override external and internal and browser
stytles
2.External and Internal inside the header section which is last read that style will applied
3.Browser default style

# 5. CSS comments:

The comments helps for explain the code and document purpose. the comments are not displayed to pages browser

/\* \*/ : single line comments in style element and css extenstion file
Usage:
single line
span multiple line
code middle
wherever you want it add code inside

<!-- --> : HTML file comments
