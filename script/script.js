

function aboutpage(){
    const text1 = "Hello, my name is Janrie, and I am delighted to introduce myself as an entry-level  website developer who is passionate about combining design and programming. As an individual who is highly detail-oriented, I find joy in observing and discovering new things. For me, every detail presents an opportunity to learn and improve. I welcome constructive feedback as it helps me design better solutions that cater to the needs of my clients. I am grateful for the opportunities that have allowed me to pursue my passion and I am eager to bring my skills and enthusiasm to every project I work on.";
    const text2 = "Through my experience as a trainee at both TESDA CCMTC and DICT, I have had the opportunity to learn and refine my skills in computer programming, web management, computer repair and maintenance, and resolving IT issues. Although my learning may not be as deep as someone with years of experience, I am grateful for the valuable experience and knowledge I have gained during my training. The tasks and responsibilities assigned to me have allowed me to develop my adaptability, time management, attention to detail, teamwork, and communication skills, which I believe will serve me well in my future endeavors. I am eager to continue learning and growing as I pursue my passion for technology.";
    const text3 = "I am deeply passionate about technology and continuously seek opportunities to enhance my skills and knowledge. I am eager to bring my technical expertise and soft skills to any organization that values innovation, growth, and collaboration. Thank you, for your effort reading this :).";
    const text4 = "Janrie Veneracion";

    const delay = 50; // delay in milliseconds between each character
    const stoppingDelay = 1500; // delay in milliseconds when a dot is encountered
    const element1 = document.getElementById("typewriter-1");
    const element2 = document.getElementById("typewriter-2");
    const element3 = document.getElementById("typewriter-3");
    const element4 = document.getElementById("typewriter-4");
    const el5 = document.getElementById("sign");

    abou

    el5.style = "display: none !important;";
    function typeWriter(text, element, i) {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          if (text.charAt(i) === '.' ) {
            setTimeout(function() {
              typeWriter(text, element, i + 1);
            }, stoppingDelay);
          } else if (text.charAt(i) === ',') {
            setTimeout(function() {
              typeWriter(text, element, i + 1);
            }, 700);
          } else {
            setTimeout(function() {
              typeWriter(text, element, i + 1);
            }, delay);
          }
        } else {
          setTimeout(function() {
            if (element.id === "typewriter-1") {
              element2.style.display = "block";
              typeWriter(text2, element2, 0);
            } else if (element.id === "typewriter-2") {
              element3.style.display = "block";
              typeWriter(text3, element3, 0);
            } else if (element.id === "typewriter-3") {
              element4.style.display = "block";
              el5.style = "display: block !important; width: 250px; position: absolute;";
              el5.style.animation = "fadeIn 1s";
              typeWriter(text4, element4, 0);
            }
          }, 1000);
        }
      }
      
      setTimeout(function() {
        element1.style.animation = "fadeInUp 1s";
        typeWriter(text1, element1, 0);
      }, 1000);      
}