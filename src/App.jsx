import { useState } from "react";
import mylovestoryImg from './assets/mylovestoryImg.jpg'
function App() {
  const [name, setName] = useState("");
  function handleClick() {
    if (name === "") {
      setName("Hello My Dream Girl, welcome to my web");
    } else if (name === "Hello My Dream Girl, welcome to my web") {
      setName(
        "I just wanna let you know that i love you my baby. i have a little piece of gift for you, just to let you know that i care so much about you and your wellbeing, i pray we grow together and work together to be at the top in the nearest future. Click on the BLUE BUTTON FOR NRXT PAGE"
      );
    } else if (
      name ===
      "I just wanna let you know that i love you my baby. i have a little piece of gift for you, just to let you know that i care so much about you and your wellbeing, i pray we grow together and work together to be at the top in the nearest future. Click on the BLUE BUTTON FOR NRXT PAGE"
    ) {
      setName(
        "Hey my Dream Girl, i want you to know you are WORTH KEEPING. click on the RED BUTTON TO SEE WHY I SAID SO "
      );
      // }else if(name === 'Socrates'){
      //   setName('Genius')
    }
  }

  function handleToggleName() {
    if (
      name ===
      "Hey my Dream Girl, i want you to know you are WORTH KEEPING. click on the RED BUTTON TO SEE WHY I SAID SO "
    ) {
      setName(
        "YOU ARE  WORTH, KEEPING, Why I Want You as My Girlfriend and Wife. From the moment I met you, I knew that you were someone special. Your kind heart, your beautiful smile, and your infectious laugh all captivated me.  But it is not just your outer beauty that has me hooked - it is the incredible person you are on the inside, too.  You are worth keeping because of your unwavering optimism and your ability to light up even the darkest of rooms.   You are worth keeping because of your compassion, your empathy, and your unrelenting support. You are worth keeping because you make me feel seen, heard, and loved in ways I never thought possible. As my girlfriend, you bring joy and excitement to my life every single day. You are my rock, my confidante, and my best friend. You make me feel like I can conquer the world with you by my side. And as my future wife, I know that you will be an amazing partner and companion for all of life  adventures. You will be an incredible mother to our children, and a constant source of love and encouragement. You will be my forever home, my safe haven, and my soulmate.I promise to always cherish, support, and adore you, through every moment and every adventure. I promise to be your rock, your confidante, and your best friend. I promise to love you for all eternity, and to make you feel like the queen of my heart, every single day.You are worth keeping, my love. Forever and always. click the RED BUTTON AGAIN"
      );
    } else if (
      name ===
      "YOU ARE  WORTH, KEEPING, Why I Want You as My Girlfriend and Wife. From the moment I met you, I knew that you were someone special. Your kind heart, your beautiful smile, and your infectious laugh all captivated me.  But it is not just your outer beauty that has me hooked - it is the incredible person you are on the inside, too.  You are worth keeping because of your unwavering optimism and your ability to light up even the darkest of rooms.   You are worth keeping because of your compassion, your empathy, and your unrelenting support. You are worth keeping because you make me feel seen, heard, and loved in ways I never thought possible. As my girlfriend, you bring joy and excitement to my life every single day. You are my rock, my confidante, and my best friend. You make me feel like I can conquer the world with you by my side. And as my future wife, I know that you will be an amazing partner and companion for all of life  adventures. You will be an incredible mother to our children, and a constant source of love and encouragement. You will be my forever home, my safe haven, and my soulmate.I promise to always cherish, support, and adore you, through every moment and every adventure. I promise to be your rock, your confidante, and your best friend. I promise to love you for all eternity, and to make you feel like the queen of my heart, every single day.You are worth keeping, my love. Forever and always. click the RED BUTTON AGAIN"
    ) {
      setName("Every moment I spend with you is a dream come true. You are the sunshine that brightens my day and the stars that light up my night. Your love is the rhythm that makes my heart sing, and I am forever grateful to have you by my side.  Your smile is the most beautiful thing I have ever seen, and your laughter is music to my ears. Your kindness, intelligence, and grace inspire me every day to be a better person. Your touch ignites a fire within me, and your love is the air I breathe.  You are my forever companion, my partner in every sense of the word. Together, let us create a love story that will last a lifetime. I promise to always cherish, support, and adore you, through every moment and every adventure Click the RED BUTTON AGAIN.");
    } else if (name === "Every moment I spend with you is a dream come true. You are the sunshine that brightens my day and the stars that light up my night. Your love is the rhythm that makes my heart sing, and I am forever grateful to have you by my side.  Your smile is the most beautiful thing I have ever seen, and your laughter is music to my ears. Your kindness, intelligence, and grace inspire me every day to be a better person. Your touch ignites a fire within me, and your love is the air I breathe.  You are my forever companion, my partner in every sense of the word. Together, let us create a love story that will last a lifetime. I promise to always cherish, support, and adore you, through every moment and every adventure Click the RED BUTTON AGAIN.") {
      setName("I WANT TO ENCOURAGE U WITH THIS PIECE OF WORDS. I know things have been tough lately, and it's okay to feel overwhelmed. But please do not give up on us, and don't give up on your passions. You are an incredible person with so much to offer the world. Remember why we started this journey together in the first place? We had hopes, dreams, and a desire to build a life filled with love, laughter, and adventure. Do not let the hard times define us - let us use them as an opportunity to grow stronger, closer, and more resilient.  Your passions and interests are what make you unique and beautiful. Don't let anyone or anything dull your sparkle. Keep pursuing your dreams, even when it feels impossible. You got this, and I have got your back.  We are in this together, always. I believe in us, and I believe in you. Let us hold hands, take a deep breath, and face whatever comes our way with courage and hope. You are loved, you are valued, and you are enough. Never give up on yourself, and never give up on us. We are worth fighting for. I love you my sugar momma❤️❤️");
    } else if (name === "I WANT TO ENCOURAGE U WITH THIS PIECE OF WORDS. I know things have been tough lately, and it's okay to feel overwhelmed. But please do not give up on us, and don't give up on your passions. You are an incredible person with so much to offer the world. Remember why we started this journey together in the first place? We had hopes, dreams, and a desire to build a life filled with love, laughter, and adventure. Do not let the hard times define us - let us use them as an opportunity to grow stronger, closer, and more resilient.  Your passions and interests are what make you unique and beautiful. Don't let anyone or anything dull your sparkle. Keep pursuing your dreams, even when it feels impossible. You got this, and I have got your back.  We are in this together, always. I believe in us, and I believe in you. Let us hold hands, take a deep breath, and face whatever comes our way with courage and hope. You are loved, you are valued, and you are enough. Never give up on yourself, and never give up on us. We are worth fighting for. I love you my sugar momma❤️❤️") {
      setName( <img src={mylovestoryImg} alt="" className="img-fluid w-100" /> );
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
