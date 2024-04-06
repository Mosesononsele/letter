import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  function handleClick() {
    if (name === "") {
      setName("Hi Benito, Good Evening, welcome to my web");
    } else if (name === "Hi Benito, Good Evening, welcome to my web") {
      setName(
        "I just wanna let you know thta i love you my bro. i have a little piece of gift for you, just to let you know that i care so much about you and your wellbeing, i pray we grow together and work together to be at the top in the nearest future. Click on this BLUE BUTTON AGAIN"
      );
    } else if (
      name ===
      "I just wanna let you know thta i love you my bro. i have a little piece of gift for you, just to let you know that i care so much about you and your wellbeing, i pray we grow together and work together to be at the top in the nearest future. Click on this BLUE BUTTON AGAIN"
    ) {
      setName(
        "Hi Benito, I want to take a moment to express my heartfelt gratitude to my incredible friend. From the moment we met, you have been a constant source of support, encouragement, and love in my life. Your unwavering loyalty and friendship have made me feel seen, heard, and valued in ways I never thought possible. Through laughter and tears, triumphs and struggles, you have been by my side every step of the way. Your selflessness, empathy, and kindness inspire me daily to be a better person. Your presence in my life has brought me joy, comfort, and a sense of belonging that I cherish deeply. Thank you, Benito, for being my rock, my confidant, and my partner in crime. Thank you for believing in me, for pushing me to be my best self, and for showing me what it means to be a true friend. I am so grateful to have you in my life, and I look forward to many more years of adventures, memories, and making more inside jokes together! You are the best friend anyone could ask for, and I am honored to call you mine. NOW CLICK ON THE RED BUTTON TO VIEW MY LITTLE GIFT"
      );
      // }else if(name === 'Socrates'){
      //   setName('Genius')
    }
  }

  function handleToggleName() {
    if (
      name ===
      "Hi Benito, I want to take a moment to express my heartfelt gratitude to my incredible friend. From the moment we met, you have been a constant source of support, encouragement, and love in my life. Your unwavering loyalty and friendship have made me feel seen, heard, and valued in ways I never thought possible. Through laughter and tears, triumphs and struggles, you have been by my side every step of the way. Your selflessness, empathy, and kindness inspire me daily to be a better person. Your presence in my life has brought me joy, comfort, and a sense of belonging that I cherish deeply. Thank you, Benito, for being my rock, my confidant, and my partner in crime. Thank you for believing in me, for pushing me to be my best self, and for showing me what it means to be a true friend. I am so grateful to have you in my life, and I look forward to many more years of adventures, memories, and making more inside jokes together! You are the best friend anyone could ask for, and I am honored to call you mine. NOW CLICK ON THE RED BUTTON TO VIEW MY LITTLE GIFT"
    ) {
      setName(
        "Dear Benito, I know that things may seem tough right now, and its easy to feel like giving up. But I want you to know that you are stronger than you think, and that there is always hope for a better future. Remember all the times you have overcome challenges in the past? You have made it through difficult days and come out on top. You can do it again. Dont let the struggles of today define you. You are more than your current circumstances. You have a purpose, and you have so much to offer the world.When things seem darkest, it can be  hard to see a way forward. But I promise you, there is light at the end of the tunnel. Keep pushing forward, even when it feels like an inch at a time. You are capable of achieving great things, Benito. Dont let anyone, including yourself, doubt your potential. You have a unique gift to share with the world, and its needed now more than ever. Stay strong, my friend. Draw on every last bit of resilience you have. And when you feel like you cant go on, know that I am here for you, cheering you on every step of the way. You got this, Benito. You are loved, you are valued, and you are worthy of a bright, beautiful future. Keep pushing forward, my friend. The best is yet to come. MORE LOVE, LESS EGO, SOCRATES"
      );
    } else if (
      name ===
      "Dear Benito, I know that things may seem tough right now, and its easy to feel like giving up. But I want you to know that you are stronger than you think, and that there is always hope for a better future. Remember all the times you have overcome challenges in the past? You have made it through difficult days and come out on top. You can do it again. Dont let the struggles of today define you. You are more than your current circumstances. You have a purpose, and you have so much to offer the world.When things seem darkest, it can be  hard to see a way forward. But I promise you, there is light at the end of the tunnel. Keep pushing forward, even when it feels like an inch at a time. You are capable of achieving great things, Benito. Dont let anyone, including yourself, doubt your potential. You have a unique gift to share with the world, and its needed now more than ever. Stay strong, my friend. Draw on every last bit of resilience you have. And when you feel like you cant go on, know that I am here for you, cheering you on every step of the way. You got this, Benito. You are loved, you are valued, and you are worthy of a bright, beautiful future. Keep pushing forward, my friend. The best is yet to come. MORE LOVE, LESS EGO, SOCRATES"
    ) {
      setName("HOPE DEY, NOR FEAR, EVERYWHERE GO GOOD MY BRO");
    } else if (name === "HOPE DEY, NOR FEAR, EVERYWHERE GO GOOD MY BRO") {
      setName("GOODNIGHT BROTHER, ANGELS GUIDE UR NIGHT");
    } else if (name === "GOODNIGHT BROTHER, ANGELS GUIDE UR NIGHT") {
      setName("BEST OF LUCK");
    }
  }

  return (
    <>
      <div className="container text-center">
        <h2>Hi Welcome</h2>
        <p> {name} </p>
        <button className="btn btn btn-primary btn-lhg" onClick={handleClick}>
          {" "}
          click to show name
        </button>
        <button className="btn btn-danger btnlg" onClick={handleToggleName}>
          {" "}
          click to change name{" "}
        </button>
      </div>
    </>
  );
}

export default App;
