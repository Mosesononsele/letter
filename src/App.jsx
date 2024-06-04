import { useState } from "react";
import mylovestoryImg from './assets/mylovestoryImg.jpg'
import mylovestoryImg2 from './assets/mylovestoryImg2.jpg'
import mixPhoto from './assets/MixPhoto.jpg'
import chocolateImg from './assets/ChocolatePhoto2.jpg'


function App() {
  const [name, setName] = useState("");
  function handleClick() {
    if (name === "") {
      setName("Hello My Dream Girl, welcome to my web");
    } else if (name === "Hello My Dream Girl, welcome to my web") {
      setName(
        "My purpose of this is to make my intentions known to you. CLICK ON THE BLUE BUTTON AGAIN TO GO TO THE NEXT APGE"
      );
    } else if ( 
      name ===
      "My purpose of this is to make my intentions known to you. CLICK ON THE BLUE BUTTON AGAIN TO GO TO THE NEXT APGE"
    ) {
      setName(
        "My Sweet Chocolate, you are so gorgouse and your smile light up my world, that's why i call you my Moonlight🥰🥰. NOW CLICK ON THE RED BUTTON TO VIEW MAIN CONTENT"
      );
      // }else if(name === 'Socrates'){
      //   setName('Genius')
    }
  }

  function handleToggleName() {
    if (
      name ===
      "My Sweet Chocolate, you are so gorgouse and your smile light up my world, that's why i call you my Moonlight🥰🥰. NOW CLICK ON THE RED BUTTON TO VIEW MAIN CONTENT"
    ) {
      setName(
        "Hi Victoria(My Chocolate). I wanted to take a moment to let you know how much I have enjoyed getting to know you over the past week. From the moment we met, I felt a spark and I cant ignore the connection we share. Your kindness, intelligence, and beauty (inside and out) have captivated me, and I find myself thinking about you more and more each day. I love the way you make me laugh, the way I feel whenever I think of you. I want you to know that my intentions are genuine and true. I am not looking for anything casual or temporary , I am looking for something real and meaningful. And I believe that something special is what we have. So, I wanted to ask you... will you be my girlfriend? I promise to always be there for you, to listen to you, to support you, and to make you feel loved and appreciated every day. I hope you feel the same way, and I cant wait to hear your answer. click the RED BUTTON AGAIN"
      );
    } else if (
      name ===
      "Hi Victoria(My Chocolate). I wanted to take a moment to let you know how much I have enjoyed getting to know you over the past week. From the moment we met, I felt a spark and I cant ignore the connection we share. Your kindness, intelligence, and beauty (inside and out) have captivated me, and I find myself thinking about you more and more each day. I love the way you make me laugh, the way I feel whenever I think of you. I want you to know that my intentions are genuine and true. I am not looking for anything casual or temporary , I am looking for something real and meaningful. And I believe that something special is what we have. So, I wanted to ask you... will you be my girlfriend? I promise to always be there for you, to listen to you, to support you, and to make you feel loved and appreciated every day. I hope you feel the same way, and I cant wait to hear your answer. click the RED BUTTON AGAIN"
    ) {
      setName("I know you would care to know if I have a girlfriend currently or not, I won't lie to you, I was actually asking a girl out here in Lagos before I met you, though she was very interested, but she kept procrastinating for the reason best known to her and for the fact that she said she wants to take things slow due to the fact that her previous relationship didn't favour her, I really never had any problem with that, we have been talking over a month plus. The other day I came back from travel, she actually took my phone with the excuse that she wanted to use it to snap, then she went straight to my call log and saw that I saved a number with Chocolate 🍫🥰, she got super jealous and picked offense, she asked me who is that person, and said sheybi I told her that I never had anyone, that she has finally caught me, that I went to Edo state to visit my girlfriend I saved with chocolate 🍫🥰 and lied to her that I went for school purpose. I tried my best to calm her down that day, and explain to her but she never cared to listen, saying all guys are scum, they are all the same, they lie and cheat and all sort of things, and I was like, we are not even dating yet, nothing attached yet, we were only in talking stage as  she hasn't even come to conclusions as she told me she would think about it for over such long time frame of which I never even picked any offense but just the little misunderstanding she never gave me time to even explain to her how came about the number that we were just friends who met that day on my way back from Ekpoma, she ended everything and I had to let go cos I believe everything happens for a reason and also that was a sign that she was a highly emotionally damaged girl who her past has actually made her reason and judge differently, so I don't also blame her , it could be her past that made her so. I know I am not supposed to tell you all these, but I just feel like telling you and coming plain to you. So you also know that I am single and not going to deceive you for any reason.");
    } else if (name === "I know you would care to know if I have a girlfriend currently or not, I won't lie to you, I was actually asking a girl out here in Lagos before I met you, though she was very interested, but she kept procrastinating for the reason best known to her and for the fact that she said she wants to take things slow due to the fact that her previous relationship didn't favour her, I really never had any problem with that, we have been talking over a month plus. The other day I came back from travel, she actually took my phone with the excuse that she wanted to use it to snap, then she went straight to my call log and saw that I saved a number with Chocolate 🍫🥰, she got super jealous and picked offense, she asked me who is that person, and said sheybi I told her that I never had anyone, that she has finally caught me, that I went to Edo state to visit my girlfriend I saved with chocolate 🍫🥰 and lied to her that I went for school purpose. I tried my best to calm her down that day, and explain to her but she never cared to listen, saying all guys are scum, they are all the same, they lie and cheat and all sort of things, and I was like, we are not even dating yet, nothing attached yet, we were only in talking stage as  she hasn't even come to conclusions as she told me she would think about it for over such long time frame of which I never even picked any offense but just the little misunderstanding she never gave me time to even explain to her how came about the number that we were just friends who met that day on my way back from Ekpoma, she ended everything and I had to let go cos I believe everything happens for a reason and also that was a sign that she was a highly emotionally damaged girl who her past has actually made her reason and judge differently, so I don't also blame her , it could be her past that made her so. I know I am not supposed to tell you all these, but I just feel like telling you and coming plain to you. So you also know that I am single and not going to deceive you for any reason.") {
      setName("I met you at the stage of my life where I am deeply ready to go into a relationship and be committed, it was indeed a right time and our meeting seems Devine to me, the way I liked you even at first sight, the way we could easily get along and the way my heart melt for you since that day until now, thinking of you every minute, every hour and everyday! you will make me  the happiest and luckiest  guy ever if you really give me a chance to your life and lets do life together. 🥰❤️❤️🥰");
    } else if (name === "I met you at the stage of my life where I am deeply ready to go into a relationship and be committed, it was indeed a right time and our meeting seems Devine to me, the way I liked you even at first sight, the way we could easily get along and the way my heart melt for you since that day until now, thinking of you every minute, every hour and everyday! you will make me  the happiest and luckiest  guy ever if you really give me a chance to your life and lets do life together. 🥰❤️❤️🥰") {
      setName(<> <img src={chocolateImg} alt="" className="img-fluid w-100" /> </> );
     
    } //else if (name === <> <img src={chocolateImg} alt="" className="img-fluid w-100" /> </> );
  //   setName( <h1>I Love You My Moonlight</h1> 
  // )
     
    } 
 

  return (
    <>
      <div className="container text-center">
        <div>
          <img src={mixPhoto} alt="" className="w-50 img-fluid border border-5 border-primary" />
          <h1 className="text-danger"> MY FAVORITE HUMAN </h1>
        </div>
        <p> {name} </p>
        <button className="btn btn btn-primary btn-lhg" onClick={handleClick}>
          {" "}
          Read 
        </button>
        <button className="btn rounde btn-danger btnlg" onClick={handleToggleName}>
          {" "}
          click to read{" "}
        </button>
      </div>
    </>
  );
}

export default App;
