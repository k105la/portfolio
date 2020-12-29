// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Akil Hylton",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "",
  //Contact Email
  contactEmail: "hyltonakil@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "PulseTracker", //Project Title - Add Your Project Title Here
      para: "An open source tool built for monitoring heart rate. The goal here is to have a low cost and widely accessible way to measure someones heart rate. It uses a touch-based system for generating heart rate values. In contrast to it's counterpart(touchless-based systems) it is a far more accurate and less sensitive to enviornmental conditions.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/LpihA2j.jpg?1",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/akilhylton/pulsetracker",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "spiral-dashboard", //Project Title - Add Your Project Title Here
      para:
        "A PWA to visualize data from the spiral hardware.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/iRX4bp2.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/hyphenspace/spiral-dashboard",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Corona-tracker", //Project Title - Add Your Project Title Here
      para:
        "An easy-to-use PWA to monitor the user's wellness and learn about COVID-19.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
	"https://i.imgur.com/Px9v4CG.png", 
      //Project URL - Add Your Project Url Here
      url: "https://github.com/COVID-19-electronic-health-system/Corona-tracker",  
    }
    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Akil Hylton is a computer science and electrical engineer with a background in hardware, machine learning, and creating efficient systems. He is a member of the New York Health Artificial Intelligence Society meetup and is interested in applying tech to improve healthcare.",
  aboutParaTwo:
    "He also enjoys building web applications and despite mostly using the React JS framework to build them he is also proficient in using good ole HTML, CSS and JavaScript to get the task done.",
  aboutParaThree: "",
  aboutImage:
    "https://i.imgur.com/rYdwccC.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML5 is a programming language whose acronym stands for Hyper Text Markup Language. It is a system that allows the modification of the appearance of web pages, as well as making adjustments to their appearance.",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "",
  promotionPara: "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/akilhylton" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/ahylton19",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/akilmhylton",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
