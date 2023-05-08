const jokes = [
  "What do the movies Titanic and The Sixth Sense have in common? Icy dead people.",
  "When you die, what part of the body dies last? The pupils… they dilate.",
  "Why is England the wettest country? Because the queen reigned there for decades.",
  "You know there's no official training for trash collectors? They just pick things up as they go along.",
  "What's the difference between a golfer and a skydiver? A golfer goes whack darn and a skydiver goes darn whack.",
  "A friend of mine went bald years ago but still carries around an old comb.",
  "He just can't part with it.",
  "I want to die peacefully in my sleep like my grandfather did.",
  "Not screaming in terror like the passengers in his car.",
  "What sits at the bottom of the sea and twitches? A nervous wreck.",
  "What do you call a woman who sets fire to all her bills? Bernadette.",
  "I was kidnapped by mimes once.",
  "They did unspeakable things to me.",
  "I saw Usain Bolt sprinting around the track shouting, Why did the chicken cross the road? It was a running joke.",
  "What did the full glass say to the empty glass? You look drunk.",
  "Is it ignorance or apathy that's destroying the world today? I don't know, and I don't care.",
  "Did you hear about the Italian chef who died? He pasta-way.",
  "Why can't you explain puns to kleptomaniacs? They always take things literally.",
  "They all laughed when I said I wanted to be a comedian.",
  "Well, they're not laughing now! Wait",
  "You're not completely useless.You can always serve as a bad example.",
  "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  "What's the difference between a hippo and a Zippo? One is really heavy, and the other is a little lighter.",
  "Two guys walk into a bar.",
  "The third guy ducks.",
  "And God said to John,Come forth and you shall be granted eternal life. But John came fifth and won a toaster.",
  "I stand corrected! said the man in the orthopedic shoes.",
  "What's the best thing about Switzerland? I don't know, but their flag is a huge plus.",
  "How do you make holy water? You boil the hell out of it.",
  "Will glass coffins be a success? Remains to be seen.",
  "I used to be addicted to soap.",
  "But I'm clean now.",
  "What's Forrest Gump's email password? 1Forrest1.",
  "I was wondering why the ball was getting bigger, then it hit me.",
  "Do you want to hear a construction joke? Sorry, I'm still working on it.",
  "Though I enjoy the sport, I could never date a tennis player.",
  "Love means nothing to them.",
  "How much space will free up in the EU after Brexit? Approximately one GB.",
  "What do Alexander the Great and Winnie the Pooh have in common? Same middle name.",
  "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
  "I have a joke about time travel, but I'm not gonna share it. You guys didn't like it.",
  "What's the opposite of irony? Wrinkly.",
  "Got a PS5 for my little brother. Best trade I've ever done!",
  "I finally decided to sell my vacuum cleaner. All it was doing was gathering dust!",
  "I'm thinking of a career where I estimate crowd sizes at different outdoor events. I wonder how many people are in that field.",
  "Did you hear how the zombie bodybuilder hurt his back? He was deadlifting.",
  "Where does the general keep his armies? In his sleevies.",
  "How does a squid go into battle? Well-armed.",
  "Why don't male ants sink? Because they're boy-ant.",
  "A bear walks into a restaurant. He tells his waiter, I want a grilled… cheese.The waiter says, What's with the pause? Whaddya mean? the bear replies. I'm a bear!",
  "What's E.T. short for? Because he's got little legs.",
  "Why do oranges wear sunscreen? So they don't peel.",
  "What do you call a Frenchman wearing sandals? Phillipe Phillope.",
  "Never criticize someone until you have walked a mile in their shoes. That way, when you criticize them, you'll be a mile away, and you'll have their shoes.",
  "Two men meet on opposite sides of a river. One shouts to the other, I need you to help me get to the other side! The other guy replies, You're on the other side!",
  "What did the mayonnaise say when the refrigerator door was opened? Close the door, I m dressing! ",
  "How do you make a tissue dance? You put a little boogie in it.",
  "What did the bald man exclaim when he received a comb for a present? Thanks—I'll never part with it.",
  "Why were they called the Dark Ages? Because there were a lot of knights.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "What do you call it when Batman skips church? Christian Bale.",
  "A guy goes to a pet store to buy a goldfish. The salesman asks him, Do you want an aquarium? The guy responds, ",
  "I don 't care what star sign it is!",
  "What do you call bears with no ears? B—.",
  "Why were the teacher's eyes crossed? She couldn't control her pupils.",
  "What's a foot long and slippery? A slipper.",
  "Exaggerations have become an epidemic. They went up by a million percent last year.",
  "Two cows are grazing in a field. One cow says to the other, You ever worry about that mad cow disease? The other cow says, Why would I care? I'm a helicopter!",
  "What did the swordfish say to the marlin? You're looking sharp.",
  "Two windmills are standing in a wind farm. One asks, What's your favorite kind of music? The other says, I'm a big metal fan.",
  "What do you call a bee that can't make up its mind? A maybe.",
  "Did you hear about the new restaurant called Karma? There's no menu—you get what you deserve.",
  "What do the movies Titanic and The Sixth Sense have in common? Icy dead people.",
  "When you die, what part of the body dies last? The pupils… they dilate.",
  "Why is England the wettest country? Because the queen reigned there for decades.",
  "You know there's no official training for trash collectors? They just pick things up as they go along.",
  "What's the difference between a golfer and a skydiver? A golfer goes whack darn and a skydiver goes darn whack.",
  "A friend of mine went bald years ago but still carries around an old comb.",
  "He just can't part with it.",
  "I want to die peacefully in my sleep like my grandfather did.",
  "Not screaming in terror like the passengers in his car.",
  "What sits at the bottom of the sea and twitches? A nervous wreck.",
  "What do you call a woman who sets fire to all her bills? Bernadette.",
  "I was kidnapped by mimes once.",
  "They did unspeakable things to me.",
  "I saw Usain Bolt sprinting around the track shouting, Why did the chicken cross the road? It was a running joke.",
  "What did the full glass say to the empty glass? You look drunk.",
  "Is it ignorance or apathy that's destroying the world today? I don't know, and I don't care.",
  "Did you hear about the Italian chef who died? He pasta-way.",
  "Why can't you explain puns to kleptomaniacs? They always take things literally.",
  "They all laughed when I said I wanted to be a comedian.",
  "Well, they're not laughing now! Wait",
  "You're not completely useless.You can always serve as a bad example.",
  "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  "What's the difference between a hippo and a Zippo? One is really heavy, and the other is a little lighter.",
  "Two guys walk into a bar.",
  "The third guy ducks.",
  "And God said to John,Come forth and you shall be granted eternal life. But John came fifth and won a toaster.",
  "I stand corrected! said the man in the orthopedic shoes.",
  "What's the best thing about Switzerland? I don't know, but their flag is a huge plus.",
  "How do you make holy water? You boil the hell out of it.",
  "Will glass coffins be a success? Remains to be seen.",
  "I used to be addicted to soap.",
  "But I'm clean now.",
  "What's Forrest Gump's email password? 1Forrest1.",
  "I was wondering why the ball was getting bigger, then it hit me.",
  "Do you want to hear a construction joke? Sorry, I'm still working on it.",
  "Though I enjoy the sport, I could never date a tennis player.",
  "Love means nothing to them.",
  "How much space will free up in the EU after Brexit? Approximately one GB.",
  "What do Alexander the Great and Winnie the Pooh have in common? Same middle name.",
  "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
  "I have a joke about time travel, but I'm not gonna share it. You guys didn't like it.",
  "What's the opposite of irony? Wrinkly.",
  "Got a PS5 for my little brother. Best trade I've ever done!",
  "I finally decided to sell my vacuum cleaner. All it was doing was gathering dust!",
  "I'm thinking of a career where I estimate crowd sizes at different outdoor events. I wonder how many people are in that field.",
  "Did you hear how the zombie bodybuilder hurt his back? He was deadlifting.",
  "Where does the general keep his armies? In his sleevies.",
  "How does a squid go into battle? Well-armed.",
  "Why don't male ants sink? Because they're boy-ant.",
  "A bear walks into a restaurant. He tells his waiter, I want a grilled… cheese.The waiter says, What's with the pause? Whaddya mean? the bear replies. I'm a bear!",
  "What's E.T. short for? Because he's got little legs.",
  "Why do oranges wear sunscreen? So they don't peel.",
  "What do you call a Frenchman wearing sandals? Phillipe Phillope.",
  "Never criticize someone until you have walked a mile in their shoes. That way, when you criticize them, you'll be a mile away, and you'll have their shoes.",
  "Two men meet on opposite sides of a river. One shouts to the other, I need you to help me get to the other side! The other guy replies, You're on the other side!",
  "What did the mayonnaise say when the refrigerator door was opened? Close the door, I m dressing! ",
  "How do you make a tissue dance? You put a little boogie in it.",
  "What did the bald man exclaim when he received a comb for a present? Thanks—I'll never part with it.",
  "Why were they called the Dark Ages? Because there were a lot of knights.",
  "What did the left eye say to the right eye? Between you and me, something smells.",
  "What do you call it when Batman skips church? Christian Bale.",
  "A guy goes to a pet store to buy a goldfish. The salesman asks him, Do you want an aquarium? The guy responds, ",
  "I don 't care what star sign it is!",
  "What do you call bears with no ears? B—.",
  "Why were the teacher's eyes crossed? She couldn't control her pupils.",
  "What's a foot long and slippery? A slipper.",
  "Exaggerations have become an epidemic. They went up by a million percent last year.",
  "Two cows are grazing in a field. One cow says to the other, You ever worry about that mad cow disease? The other cow says, Why would I care? I'm a helicopter!",
  "What did the swordfish say to the marlin? You're looking sharp.",
  "Two windmills are standing in a wind farm. One asks, What's your favorite kind of music? The other says, I'm a big metal fan.",
  "What do you call a bee that can't make up its mind? A maybe.",
  "Did you hear about the new restaurant called Karma? There's no menu—you get what you deserve.",

  "ಗಂಡ: ಆಪರೇಷನ್ ನಲ್ಲಿ ನನಗೇನಾದ್ರೂ ಆದರೇ, ನೀನು ಆ ಡಾಕ್ಟರ್ ನೀ ಮದುವೆ ಆಗಬೇಕು.ಹೆಂಡತಿ: ಯಾಕ್ರಿ ಹಾಗೆ ಹೇಳ್ತೀರಾ ?ಗಂಡ : ಅವನ ಮೇಲೆ ಸೇದನ್ನು ತೀರಿಸಿಕೊಳ್ಳೋಕೆ ಬೇರೆ ದಾರಿ ಕಾಣ್ತಾ ಇಲ್ಲ.",

  "ದೇವರು: ನಿನ್ನ ತಪಸ್ಸಿಗೆ ಮೆಚ್ಚಿದೆ.yaavudaadaru 2 vara bedko. ಭಕ್ತ: ಮೊದಲನೇ ವರ, ನನಗೇ ನಿದ್ದೆಯಲ್ಲಿ ಸಾವು ಬರಬೇಕು. ದೇವರು: ಹಾಗೇ ಆಗಲಿ, ಎರಡನೆಯ ವರ ?  ಭಕ್ತ : ಎರಡನೆಯದು ಅಂದ್ರೆ.ನನಗೆ ಯಾವತ್ತು ನಿದ್ದೆ ಬರಬಾರದು.",

  "ಹುಡುಗ: ದೇವರೇ, ನಾನು ಯಾವತ್ತು ಯಾರಿಗೂ ಕೆಟ್ಟದ್ದು ಮಾಡಲಿಲ್ಲ.ಆದರು ನನಗೇ ಒಂದು ಗೆಳತಿ ಯಾಕೆ ಕೊಡಲಿಲ್ಲಾ ?    ದೇವರು : ಮಗು, ಒಳ್ಳೇಯವರಿಗೆ ಯಾವಾಗಲು ಒಲ್ಲೆಯಾದೆ ಆಗುತ್ತೆ.ಭಯ ಪಡಬೇಡ.",

  "ಪ್ರಿನ್ಸಿಪಾಲ್: ಕಾಲೇಜಿಗೆ ಯಾಕೆ ತಡವಾಗಿ ಬಂದೆ ?ವಿದ್ಯಾರ್ಥಿ : ಸಾರ್, ಬೈಕ್ ಪಂಕ್ಚರ್ ಆಗಿ ಹೋಯ್ತು.ಪ್ರಿನ್ಸಿಪಾಲ್: ಬೈಕ್ ಬಿಟ್ಟು ಬಸ್ನಲ್ಲಿ ಬರಬೇಕು ಅಲ್ವಾ.ವಿದ್ಯಾರ್ಥಿ: ಹೌದು ಸರ್, ಆದರೇ ನಿಮ್ಮ ಮಗಳು ಕೇಳ್ಬೇಕಲ್ವಾ.",

  "ಮ್ಯಾನೇಜರ್: ನಮ್ಮ ಬ್ಯಾಂಕ್ ನಲ್ಲಿ ನಿಮಗೆ ಬಡ್ಡಿ ಇಲ್ಲದೇ ಸಾಲ ಕೊಡ್ತಾ ಇದ್ದೀವಿ. ಗ್ರಾಹಕ: ಕೊಡೋಕೆ ಬಡ್ಡಿ ಇಲ್ಲಾಂದ್ರೆ ಯಾಕೆ ಕೊಡ್ತೀರಾ.ಬೇಡ ಬಿಡಿ.",

  "ವಿದ್ಯಾರ್ಥಿ: ಸರ್, ಇದೇನು ?    ಶಿಕ್ಷಕ : ಪ್ರಶ್ನೆ ಪತ್ರಿಕೆ.ವಿದ್ಯಾರ್ಥಿ: ಮ್ಯಾಟ್ ಇದೇನು ?ಶಿಕ್ಷಕ : ಉತ್ತರ ಪತ್ರಿಕೆವಿದ್ಯಾರ್ಥಿ: ಏನ್ ಸರ್ ಏನಯ್ಯ, ಪ್ರಶ್ನೆ ಪತ್ರಿಕೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಇದೆ, ಆದರೆ ಉತ್ತರ ಪತ್ರಿಕೆಯಲ್ಲಿ ಉತ್ತರ ಇಲ್ಲ.",

  "ಹುಡುಗ: ನೆನ್ನೆ ನಾನು ನಿಮ್ಮ ಮನೆಗೆ ಬಂದಿದ್ದೆ.ನನಗನಿಸುತ್ತೆ ನಮ್ಮ ಮದುವೆ ನಡೆಯೋದಿಲ್ಲ ಅಂತಾ.ಹುಡುಗಿ: ಯಾಕೆ ? ಅಪ್ಪಾನಾ ಮೀಟ್ ಮಾಡಿದ್ರಾ ?ಹುಡುಗ : ಇಲ್ಲ, ನಿನ್ನ ತಂಗಿ ನಾ ಮೀಟ್ ಮಾಡಿದ್ದೇ",

  "ಸಂತ: ಎಲ್ಲರೂ ಯಾಕೆ ಹೀಗೆ ಓದುತ್ತಿದ್ದಾರೇ ?ಬಂಟ : ಇದು ಓಡುವ ಓಟ ಕಣಪ್ಪಾ.ಯಾರು ಗೆಲ್ತಾರೋ ಅವರಿಗೆ ಬಹುಮಾನ ಕೊಡ್ತಾರೆ.ಸಂತ: ಗೆಲ್ಲುವವನಿಗೆ ಮಾತ್ರ ಬಹುಮಾನ ಅಂದ್ರೆ, ಎಲ್ಲರೂ ಯಾಕೆ ಹುಚ್ಚರ ತರಹ ಓದ್ತಾ ಇದ್ದಾರೆ ?",

  "ಸಂತೆ : ಮಾಣಿ, ಒಂದು ಕಾಫಿ ಕೊಡಪ್ಪ.ಎಷ್ಟೂ ?ಮಾಣಿ : 50 ರೂ.ಸಂತೆ: ಎದುರುಗಡೆ 50 ಪಿಎಸ್ ಅಂತ ಬೋರ್ಡ್ ಹಾಕಿದ್ದಾರಲ್ಲಾ.ಮಾಣಿ: ಅಧು ಜೆರಾಕ್ಸ್ ಅಂಗಡಿ ಸರ್.",

  "ಹುಡುಗ: ನಿನ್ನ ಹೆಸರು ಎನು ?  ಹುಡುಗಿ : ಎಲ್ಲರೂ ನನ್ನ 'ಅಕ್ಕ'ಅಂತ ಕರೀತಾರೆ ಹುಡುಗ: ಓಹ್!ಅದಕ್ಕೇ ಎಲ್ಲರೂ ನನ್ನ ಈ ನಡುವೆ 'ಭಾವ' ಅಂತ ಕರೆಯೋಕೆ ಶುರು ಮಾಡಿದಾರೆ    .10 / 24 / 2010 10: 12: 43 AM ರಂದು(ಅನಾಮಧೇಯ) ವೆರೈಟಿ ಕನ್ನಡ ಜೋಕ್ಸ್",

  "ನರಕದಲ್ಲಿ ಯಮನಿಗೆ ಒಬ್ಬ ಮನುಷ್ಯ ಮನುಷ್ಯ: ನನ್ನ ಹೆಂಡತಿಗೆ ಒಂದು ಕರೆ ಮಾಡಬೇಕು.ಎಷ್ಟು ಆರೋಪ ? ಯಮ : naraka to naraka FREE",

  "ಮಾತು ಕಡಿಮೆ ಮಾಡಿ, ಹೆಚ್ಚಿಗೆ ಕೇಳಬೇಕು ಅಂತ ಹಿರಿಯರು ಹೇಳಿದಾರೆ.ಯಾಕೆ ಗೊತ್ತಾ ? ಯಾಕೆಂದ್ರೆ, ಇನ್‌ಕಮಿಂಗ್ ಫ್ರೀ, ಔಟ್‌ಗೋಯಿಂಗ್ ಚಾರ್ಜ್ ಆಗುತ್ತೆ ಅಡಕ್ಕೆ",

  "ಪ್ರಶ್ನೆ: ಯಾವ ದ್ರವವೂ ಕಾಯಿಸಿದಾಗ ಘನವಾಗುತ್ತೆ ? ಉತ್ತರ : ಇಡ್ಲಿ ಹಿಟ್ಟು",

  "ಪ್ರಶ್ನೆ: ಬೊಗಳೋ ನಾಯಿ ಕಚ್ಚೋದಿಲ್ಲ, ಯಾಕೆ ? ಉತ್ತರ : ಯಾಕೆಂದರೆ, ಒಂದೇ ಸಮಯದಲ್ಲಿ ಎರಡು ಕೆಲ್ಸ ಮಾಡೋಕೆ ಆಗೋದಿಲ್ಲ ಅದಕ್ಕೆ",

  "ಮಗ: ಅಮ್ಮ, ರಾತ್ರಿ ಟಾಯ್ಲೆಟ್ ಗೆ ಹೋದಾಗ ಲೈಟ್ ಆಟೋಮ್ಯಾಟಿಕ್ ಆಯ್ತು ತಾಯಿ: ಬಾರೋ, ಫ್ರಿಡ್ಜ್ ನಲ್ಲಿ ಸುಸು ಮಾಡಿ ನೀನೇನಾ",

  "ತಮಾಷೆಯ ಜೋಕ್......ನಿದ್ದೆ ಮಾತ್ರ ತಿಂದರೆ ನಿದ್ದೆ ಬರುತ್ತೆ, ಆದರೆ ಜ್ವರದ ಮಾತ್ರ ತಿಂದರೆ ಜ್ವರ ಬರುತ್ತೆ ?",

  "ಹುಡುಗನಿಂದ ಹುಡುಗಿಗೆ : ತೆಂಗಿನ ಮರ ಹತ್ತಿದರೆ ಇಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು",

  "ಹುಡುಗೀಯರು ಹುಡುಗಿಯಿಂದ ಹುಡುಗನಿಗೆ: ಅಲ್ಲಿ ಬಿದರೆ ವೈದ್ಯಕೀಯ ಕಾಲೇಜು ಹುಡುಗಿಯರು ಕೂಡ ಕಾಣುತ್ತಾರೆ",

  "ಹುಡುಗ: ನಮ್ಮ ಮದುವೆಗೆ ತಂದೆತಾಯಿ ಒಪ್ಪಿಕೊಳ್ಳೋದಿಲ್ಲ.ಬಾ ಮೈಸೂರಿಗೆ ಓಡಿ ಹೋಗೋಣ. ಹುಡುಗಿ: ಅಲ್ಲಿ ಬೇಡಾ.ಮೈಸೂರು ನನಗೇ ಆಗಿ ಬರೋಲ್ಲ. ಹುಡುಗ: ಯಾಕೆ ? ಹುಡುಗಿ : ಕಳೆದ ಬಾರಿ ಮೈಸೂರಿಗೆ ಹೋದಾಗ ಸಿಕ್ಕಿ ಹಾಕಿಕೊಂಡುಬಿಟ್ಟೆ.",

  "ಸಂತ: ನೀನು ದಿನಕ್ಕೆ ಎಷ್ಟು ಬಾರಿ ಶೇವಿಂಗ್ ಮಾಡ್ತೀಯಾ ?    ಬಂಟ : 30 ರಿಂದ 40 ಬಾರಿಸಂತ : ನೀನ್ನು ಹುಚ್ಚ ನಾ ?    ಬಂಟ : ಇಲ್ಲಾ, ನಾನು ಸಲೂನ್ ಅಂಗಡಿಯವನು",

  "ಭಿಕ್ಷುಕ: 1 ರೂಪಾಯಿ ಕೊಡಿ ಸ್ವಾಮಿ.ಊಟ ಮಾಡಿ 3 ದಿನ ಆಯ್ತು. ಸಂತೆ: 1 ರೂಪಾಯಿ ಅಲ್ಲಾ 10 ರೂಪಾಯಿ ಕೊಡ್ತೀನಿ.ಮೊದಲು 1 ರೂಪಾಯಿಗೆ ತಿನ್ನೋಕೆ ಏನು ಸಿಗುತ್ತೆ ಅಂತ ಹೇಳು ? 10 / 24 / 2010 9 : 52: 34 AM ರಂದು(ಅನಾಮಧೇಯ)",

  "ರೋಗಿ: ಡಾಕ್ಟರ್, ನನಗೇ ಕ್ಯಾನ್ಸರ್ ಅಂತ ನಿಮಗೆ ಗ್ಯಾರಂಟಿಯಾಗಿ ಗೊತ್ತಾ ? ಯಾಕೆ ಅಂದ್ರೆ ನನ್ನ ಸ್ನೇಹಿತನಿಗೆ ಡಾಕ್ಟರ್ ಕ್ಯಾನ್ಸರ್ ಅಂತಾ ಹೇಳಿದ ಮೇಲೂ ಅವನು ಟಿಬಿ ಇಂದ ಸತ್ತ. ವೈದ್ಯರು: ಹೆದರಬೇಡಿ...ನಾನೂ ಕ್ಯಾನ್ಸರ್ ಅಂತಾ ಹೇಳಿದ್ರೆ ನೀನು ಕ್ಯಾನ್ಸರ್ ನಿಂದಾನೇ ಸಾಯುತ್ತೀರಾ.10 / 24 / 2010 10: 10: 26 AM ರಂದು(ಅನಾಮಧೇಯ)",

  "obba kalla santa na mobile kaddu oduttidda.ಆದರೇ ಸಂತ ನಗುತಾ ಇದ್ದಾ.ಯಾಕೆ ಅಂತ ಕೇಳಿದ್ದಕ್ಕೆ. mobile horde hoyitu, ಅದರ ಚಾರ್ಜರ್ ನನ್ನ ಹತ್ರನೇ ಇದೆಯಲ್ಲ ಅಂದ",

  "ಸಂತ: ನೀನ್ಯಾಕೆ ಎಲ್ಲಾ ಮೆಸೇಜ್ ನಾ ಎರಡೂ ಕಳುಹಿಸ್ತೀಯ ? ಬಂಟ : ಒಂದಣ್ಣ ನೀನು ಮುಂದಕ್ಕೆ ಮಾಡಿದ್ರೂ, ಇನ್ನೊಂದು ನಿನ್ನ ಹತ್ರನೇ ಇದ್ದಲ್ಲ",

  "ಸಂತ: ನಾನೂ ನಿನ್ನ ಟಚ್ ಮಾಡದೆ ಮುತ್ತು ಮಾಡಬಲ್ಲೆ ಹುಡುಗಿ: ಅಸಾಧ್ಯ! ಸಂತಾ: ಸರಿ 100 ರೂ.ಬಾಜಿ ಸರಿ ? ಹುಡುಗಿ : ಸರಿ ಸಂತಾ ಅವಳನ್ನು ಮುತ್ತು ಮಾಡುತಾನೆ ಹುಡುಗಿ: ನೀನು ಸೋತೆ, ಕೊಡು 100 ರೂ.",

  "ಶಿಕ್ಷಕ;ಗುಂಡ, ನೀರಿನಲ್ಲೂ ನೆಲದಲ್ಲಿ ಬಾಳುವ ಜೀವಿಗೆ ಉಧಾಹರಣ ಕೊಡು ? ಗುಂಡ : ಕಪ್ಪೆ ಸರ್ ಟೀಚರ್: ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ!!ಇನ್ನು ಎರಡೂ ಉಧಾಹರಣ ಕೊಡು ?    ಗುಂಡು : ಕಪ್ಪೆಯ ತಂದೆ ಮಟ್ಟು ತಾಯಿ",

  "ರೋಗಿ: ಡಾಕ್ಟರ್, ನೋವಾಗದೆ ಇರೋ ತರಹ ಇಂಜೆಕ್ಷನ್ ಹಾಕಿ ಡಾಕ್ಟರ್: ಯಾಕಪ್ಪ ಸುತ್ತಿ ಬಾಳಸಿ ಮಾತಾಡ್ತೀಯಾ.ನರ್ಸ್ ಕೈಲಿ ಇಂಜೆಕ್ಷನ್ ಹಾಕಿ ಅಂತಾ ನೆರವಾಗೇ ಹೇಳು ಪರವಾಗಿಲ್ಲ",

  "ಸ್ಟಾಫ್: ಆಫೀಸ್ ನಲ್ಲಿ ಮೊಬೈಲ್ ನಾ ಸೈಲೆಂಟ್ ಮೋಡ್ ನಲ್ಲಿ ಇಡಬೇಕು ಅಂತಾ ಮ್ಯಾನೇಜರ್ ಹೇಳಿದ್ದಾರೆ. ಪೊಯೆನ್: ಯಾಕೆ ಸಾರ್ ? ಸಿಬ್ಬಂದಿ : ಕಛೇರಿಯಲ್ಲಿ ಮಲಗಿಕೊಂಡಿರುವವರಿಗೆ ಡಿಸ್ಟರ್ಬ್ ಆಗುತ್ತೆ ಅಲ್ವಾ, ಅದಕ್ಕೇ",

  "ಜ್ಯೋತಿಷಿ: ನಿಮ್ಮ ದೋಷ ಕಲಿಯಬೇಕು 36 ವರ್ಷದ ಹುಡುಗನನ್ನು ಮದುವೆಯಾಗಬೇಕು ಸಂತ: ಎರಡು 18 ವರ್ಷದ ಹುಡುಗನನ್ನು ಮದುವೆಯಾಗಬಹುದೆ ?",

  "ಹೆಂಡತಿ : ಏನ್ರಿ, ನಾನು ಈ ತರಹ ಆಡುಗೆ ಮಾಡಿ ಹಾಕಿದ್ರೆ ನನಗೇನು ಸಿಗುತ್ತೆ ?   ಗಂಡ : ನನ್ನ LIC ಹಣ ಬೇಗ ಸಿಗುತ್ತೆ ಕಣೇ",

  "ಜೀವನಾಧ ಸತ್ಯ..... ಹೀರೋ ಹೊಂಡದಲ್ಲಿ ಹೀರೋ ಹೋಗಬಾಹುದು, ಆದರೇ ಯಮಹಾದಲ್ಲಿ ಯಮ ಹೋಗೋಕೆ ಸಾಧ್ಯವಿಲ್ಲ",

  "ಟೀಚರ್: ರಾಜು ಹೇಳು, ಮೊದಲನೇ ತಿಂಗಳೂ ? ರಾಜು : ಜನವರಿ ಟೀಚರ್: ಗುಂಡ ಹೇಳು, ಎರಡನೆ ತಿಂಗಳೂ ? ಗುಂಡ : ಫೆಬ್ರವರಿ ಟೀಚರ್: ಸಂತ, ಮೂರಾನೆ ತಿಂಗಳೂ ?  ಸಾಂತಾ : ಡೆಲಿವರಿ ಮೇಡಂ ಅವರಿಂದ(ಅನಾಮಧೇಯ) 10 / 24 / 2010 10: 01: 24 AM ಉಲ್ಲಾಸದ ಕನ್ನಡ ಜೋಕ್ಸ್",

  "ಟೀಚರ್: 4 + 13 = 17 ಮಟ್ಟು 5 + 14 = 19, ಈಗ ನೀನು ಹೇಳು 48 + 43 ಎಷ್ಟು ? ವಿದ್ಯಾರ್ಥಿ : ಎನ್ ಸರ್.ಸುಲಭ ಇರೋದನ್ನ ನೀನು ಹೇಳ್ಬಿಟ್ಟು, ಕಷ್ಟವಾದದ್ದನ್ನ ನನಗೇ ಕೇಳ್ತೀರಾ.",

  "ಜೀವನದ ಸತ್ಯ. ತಂಗಿಯ ಸ್ನೇಹಿತೆ ತಂಗಿಯಾಗಬಹುದೆ ಅಕ್ಕನ ಸ್ನೇಹಿ ಅಕ್ಕ ಆಗಬಹುದು ಆದರೇ, ಹೆಂಡತಿಯ ಸ್ನೇಹೀಹೆಂಡತಿ ಆಗಬಹುದೆ ?",

  "ಸಂತ : ಬೇಗ ಬನ್ನಿ, ನನ್ನ ಹೆಂಡತಿ ಕಿತಕಿ ಇಂದ ದುಮುಕಿ ಸಾಯಬೇಕು ಅಂತಿದ್ದಾಳೆ. ಹೋಟೆಲ್ ಸ್ವಾಗತಕಾರ: ನಾನು ಏನು ಮಾಡೋಕಾಗ್ತೇ ?    ಸಂತಾ : ಕಿತಕಿ ಬಿಗಿಯಾಗಿದೆ.ಬಂದು ಆದನ್ನ ಸ್ವಲ್ಪ ತೆಗೀರಿ.",

  "ಸಂತೆ: ನಾನು ದಿನವೂ ಆಫೀಸಿಗೆ ಹೋಗೋಕೆ ಮುಂಚೆ, ನನ್ನ ಹೆಂಡತಿಗೆ ಒಂದು ಮುಟ್ಟು ಕೊಡ್ತೀನಿ.ನೀನು ?   ಬಂಟ : ನಾನು, ನೀನು ಆಫೀಸಿಗೆ ಹೋದ ಮೇಲೆ ಕೊಡ್ತೀನಿ ಸಂತ: ಅವನು ಅವನು!ನಾನೇ ಮೊದಲು ಕೊಡೋದು",

  "ಸಂತಾ: ನಾನು ನನ್ನ ಗೆಳತಿಗೆ 3 ವರ್ಷ ಪ್ರೇಮ ಪತ್ರ ಕಲಿಸಿದ್ದೆ. ಬಂಟ: ಆಮೇಲೆ ಏನಾಯ್ತು ?  ಸಂತೆ : ಏನೊ ಇಲ್ಲ, ಅವಳು ಆ ಪೋಸ್ಟ್‌ಮ್ಯಾನ್ ನಾ ಮದುವೆಯಾದಳು",

  "ಹೆಂಡತಿ: ಏನ್ರಿ ಸ್ವಲ್ಪ ಎದ್ದೇಳಿ.ಬೇಗ ಗಂಡ: ಯಾಕೆ ರಾತ್ರಿ 2 ಗಂಟೆಗೇ ಎಬ್ಬಿಸ್ತಾ ಇದ್ದೀಯಾ ? ಹೆಂಡತಿ : ನೀನು ನಿದ್ದೆ ಮಾತ್ರ ತೆಗೆದುಕೊಳ್ಳೋದು ಮರೆತುಬಿಟ್ಟಿರಿ",

  "ರಾಮು ನಾ ಮನೆಗೆ ಅವನ ತಿಂದ ಮಾವಂದಿರು ಬಂದರು.ಹೆಂಡತಿ ಅವನಿಗೆ ಆಚೆ ಹೋಗಿ ಏನಾದ್ರೂ ತಗೊಂಡು ಬರೋಕೆ ಹೇಳಿದಳು.ರಾಮು ಆಚೆ ಹೋಗಿ ಒಂದು ಟ್ಯಾಕ್ಸಿ ತಗೊಂಡು ಬಂದ.",

  "ಒಂದು ಲಾರಿ ಕೆಟ್ಟು ಹೋಗಿತ್ತು.ಅದನ್ನೂ ಎಳೆದುಕೊಂಡು ಹೋಗೋದಕ್ಕೆ ಮತ್ತೊಂದು ಲಾರಿ ಸಹಾಯದಿಂದ ಹಗ್ಗ ಹಾಕಿ ಎಳೆದುಕೊಂಡು ಹೋಗ್ತಾ ಇದ್ದಾರು.ಇದನ್ನೂ ನೋಡಿದ ಸಂತ, ಒಂದು ಹಗ್ಗ ನಾ ತಗೊಂಡು ಹೋಗೋಕೆ ಎರಡು ಲಾರಿ ಬೇಕಾಗಿತ್ತು ಇವರಿಗೆ ಅಂತ ಹೇಳಿ ನಕ್ಕ.",

  "ಸಂತ ತನ್ನ ಗೆಳತಿ ಗೆ ಪತ್ರ ಕಳುಹಿಸುತ್ತಿದ. ಬಂಟ: ಪತ್ರ ಯಾಕೆ ಖಾಲಿ ಇದೆ ? ಸಂತೆ : ಯಾಕೆಂದ್ರೆ, ನಾವಿಬ್ಬರೂ ಈ ನಡುವೆ ಮಾತನಾಡುವುದಿಲ್ಲ",

  "ಒಂದು ಹುಡುಗೀ ಹೋಗ್ತಾ ಇದ್ಲು.ಅವಳನ್ನು ನೋಡಿದ ಸಂತ: ಸೂಪರ್ ಫಿಗರ್ ಮಗಾ ಅಂದ ಅದಕ್ಕೆ ಬಂತ: ಹಾ, ಫಿಗರ್ ಅಂದಾಗ ನೆನಪಾಯ್ತು, ಅತ್ತಿಗೆ ಹೇಗಿದ್ದಾರೆ ? 10 / 24 / 2010 10 : 02: 51 AM ರಂದು(ಅನಾಮಧೇಯ)",

  "ಶಿಕ್ಷಕ : 1 ಅಂಕ ತಗೊಂಡ ಮೇಲೆ ಕೂಡ ನೀನು ಯಾಕೆ ನಗುತಾ ಇದೀಯಾ.ನಾಚಿಕೆ ಆಗೋಲ್ವಾ ?ವಿದ್ಯಾರ್ಥಿ : ಇಲ್ಲಾ, ಆ 1 ಮಾರ್ಕ್ ಎಲ್ಲಿಂದ ಬಂತು ಅಂತ ಯೋಚಿಸಿದರೆ ನನಗೆ ನಗು ಬರ್ತಾ ಇದೆ.",

  "ಸಂತ: ನೀನು ಆ ವ್ಯಕ್ತಿನಾ ಯಾಕೆ ಹೋದೆ ?    ಬಂಟ : ಅವನು ನನ್ನ ನೋಡಿ ಊಟ ಆಯ್ತಾಅಂತ ಕೇಳ್ದ.ಸಂತ: ಆದರೇ, ಅವನು ಒಳ್ಳೇದನ್ನೇ ಕೇಳಿದನಲ್ಲ.ಮತ್ತೆ ಯಾಕೆ ಅವನಣ್ಣ ಹೋದೆ ?    ಬಂಟ : ಅವನು ಕೇಳಿದಾಗ, ನಾನು ಟಾಯ್ಲೆಟ್ ನಲ್ಲಿ ಇದ್ದೆ ಕಣೋ",

  "1 ನೇ ಭಿಕ್ಷುಕ: ನೀನ್ಯಾಕೆ ಆ ಸಿನಿಮಾ ಪೋಸ್ಟರ್ ನಾ ಹೇಗೇ ನೋಡ್ತಾ ಇದ್ದೀಯಾ ?   2 ನೇ ಭಿಕ್ಷುಕ : ನಾನೇ ಆ ಸಿನಿಮಾ ನಿರ್ಮಾಪಕ ಕಣಪ್ಪ.",

  "ವೈದ್ಯರು: ನೀನು ಹೆದರಬೇಡ ನಾನು ಇದ್ದೇನಲ್ಲ.ರೋಗಿ: ಅದೇ ನನ್ನ ಹೆದರಿಕೆಗೆ ಕಾರಣ ಡಾಕ್ಟರ್.",

  "ವೈದ್ಯರು: ನೀನು ಹೆದರಬೇಡ ನಾನು ಇದ್ದೇನಲ್ಲ.ರೋಗಿ: ಅದು ಸಾರಿ ಡಾಕ್ಟರ್, ಆದರೇ ನಾನೂ ಇರ್ತೀನಾ ?",

  "ಸಂತೆ : ನನ್ನ ಮಗ ರಾತ್ರಿ ಪೂರ್ತಿ ಪುಸ್ತಕ ಮುಂದೇ ಇರ್ತಾನೆ.ಬಂಟ: ಆದರೂ ಅವನು ಯಾಕೆ ಫೇಲ್ ಆದ ?    ಸಂತಾ : ಆ ಪುಸ್ತಕ 'ಫೇಸ್‌ಬುಕ್'ಕಣಪ್ಪ ಅವರಿಂದ(ಅನಾಮಧೇಯ)10 / 24 / 2010 ರಂದು 10: 06: 51 AMಇಂಗ್ಲೀಷ್ ನಲ್ಲಿ ಕನ್ನಡ ಜೋಕ್ಸ್",

  "ಹೆಂಡತಿ ತನ್ನ ಗಂಡನಿಗೆ: ನಿಮಗೆ ಎಷ್ಟು ಸರಿ ಹೇಳೋದು.ಕೆಲಸ ಮಾಡಬೇಕಾದ್ರೆ ಮುಟ್ಟು ಕೊಡಬೇಡಿ ಅಂತಾ. ಕೆಲಸದವಳು: ಹೌದು ಅಮ್ಮಾವ್ರೆ, ಇವರಿಗೆ ಎಷ್ಟು ಹೇಳಿದ್ರೂ ಅಷ್ಟೇ.ನನಗಂತು ಹೇಳಿ ಹೇಳಿ ಸಾಕಾಗಿದೆ.",

  "ಭಿಕ್ಷುಕ: 10 ರೂಪಾಯಿ ಇದ್ರೆ ಕೊಡಿ ಸರ್.ಗೆಳತಿಗೆ ondu phone maadabeku. ಸಂತ ಕಾ ಗೆಳತಿ: ನೋಡಿ, ಭಿಕ್ಷುಕ ಕೂಡ ಅವನ ಗೆಳತಿ ಎಷ್ಟು ಪ್ರೀತಿ ಮಾಡ್ತಾನೆ.ಭಿಕ್ಷುಕ: ಇಲ್ಲಾ ಅಮ್ಮಾವ್ರೆ, ಅವಳನ್ನ ಪ್ರೀತಿಸಿದ ಮೇಲೆ ನಾನು ಭಿಕ್ಷುಕನಾಗದೆ.",

  "ವಿದ್ಯಾರ್ಥಿ: ಸರ್, ಈ ಪುಸ್ತಕದಲ್ಲಿ ಇಷ್ಟೊಂದು ಜನ ಹೆಸರು ಇದೆಯಲ್ಲ, ನಾನು ಹೇಗೇ ನೆನಪಿಟ್ಟುಕೊಳ್ಳಲಿ ? ಶಿಕ್ಷಕ : ಅಧು ಪಠ್ಯ ಪುಸ್ತಕ ಅಲ್ಲಾ, ದೂರವಾಣಿ ಡೈರೆಕ್ಟರಿ ಕಣೋ ಮೂರ್ಖ",

  "ರಾಮು: ನೀನು ಯಾವ ಪೇಸ್ಟ್ ಉಪಯೋಗಿಸ್ತೀಯ ? ಬಂಟ : ನಾನು ಸಂತ ಸಾಬೂನು, ಸಂತಾ ಪೇಸ್ಟ್ ಹೇಗೂ ಸಂತ ಶಾಂಪೂ ಉಪಯೋಗಿಸ್ತೇನಿ ರಾಮು: ಅದೇನು ಅಂತರಾಷ್ಟ್ರೀಯ ಬ್ರಾಂಡಾ ?  ಬಂಟ : ಇಲ್ಲಾ, ಸಂತಾ ನನ್ನ ರೂಮ್ ಮೇಟ್ ಕಣೋ.",

  "obba vyaapaari saayo stitiyalli idda: ಮಗಾ, ನನ್ನ ನೋಡೋಕೆ ಯಾರ್ಯಾರ ಬಂದಿದ್ದಾರೆ ? ಅವನ ಮಗ : ಅಮ್ಮಾ, ತಂಗಿ, ನಾನೂ ಎಲ್ಲರೂ ಬಂದಿದೀವಿ ಅಪ್ಪಾ. ವ್ಯಾಪಾರ: ಮೂರ್ಖಂ ಎಲ್ಲರೂ ಇಲ್ಲೇ ಇದ್ರೆ, ಅಂಗಡಿಯಲ್ಲಿ ಯಾರಿದ್ದಾರೆ ?",

  "ಹುಡುಗ : ನಾನು ಹೊಸ ಮೊಬೈಲ್ ತಗೊಂಡೆ.ಹುಡುಗಿ: ಓಹ್!!ಹಾಗಾದ್ರೆ ನನಗೇ ಮೊದಲು ಪಾರ್ಟಿ ಕೊಡ್ಸು ಪಾರ್ಟಿ ಆದಮೇಲೆ ಹುಡುಗಿ: ಪಾರ್ಟಿ ಕೊಡ್ಸೋಕೆ ದುಡ್ಡು ಎಲ್ಲಿಂದ ಬಂತು ? ಹುಡುಗ : ಆ ಹೊಸ ಮೊಬೈಲ್ ನಾ ಮಾರಿಬಿಟ್ಟೆ",

  "ರೋಗಿ: ಡಾಕ್ಟರ್, ಇದು ನನ್ನ ಮೊದಲ ಆಪರೇಷನ್..ಭಯ ಆಗ್ತಾ ಇದೆ. ವೈದ್ಯ: ಭಯ ಪಡಬೇಡ.ನನಗೂ ಇದು ಮೊದಲಾ ಆಪರೇಷನ್.ನಾನು ಧೈರ್ಯದಿಂದ ಇಲ್ವಾ ?",

  "ವೈದ್ಯ : ನಿಮ್ಮ ಗಾಯಕ್ಕೆ 10 ಹೋಳಿಗೆಗಳನ್ನು ಹಾಕಬೇಕಾಗುತ್ತಿದೆ. ರೋಗಿ: ಸೀರೆ ಡಾಕ್ಟರ್, ಆದರೆ ಹೊಲಿಗೆಯ ವಿನ್ಯಾಸ ಚೆನ್ನಾಗಿರಬೇಕು.",

  "ಸಂತ: ನಾನು ನನ್ನ ಹೆಂಡತಿಯನ್ನ ತುಂಬ ಪ್ರೀತಿಸ್ತೇನೆ.ನೀನು ?  ಬಂಟ : ಅವಳು ನಿನ್ನ ಹೆಂಡತಿ ಕಣಪ್ಪಾ.ನಾನು ಹೇಗೇ ಪ್ರೀತಿಸಲಿ ?",

  "ವೈದ್ಯ : ದಿನಾ ಹೋಟೆಲ್ ನಲ್ಲಿ ಊಟ ಮಾಡಿದಾರಿಂದ ನಿಮಗೆ ಹುಣ್ಣು ಆಗಿದೆ. ರೋಗಿ: ಹಾಗಾದ್ರೆ ಇವತ್ತಿನಿಂದ ಮನೆಗೆ ಪಾರ್ಸೆಲ್ ತಗೊಂಡು ಬಂದು ತಿನ್ನೇನಿ.10 / 24 / 2010 10: 14: 58 AM ರಂದು(ಅನಾಮಧೇಯ) ರಂಜಿಸುವ ಕನ್ನಡ ಜೋಕ್ಸ್",

  "ಟೀಚರ್: ಶಬ್ಧ ಮಾಲಿನಯಾನ ಕಡಿಮೆ ಮಾಡೋಕೆ ಏನು ಮಾಡಬೇಕು ? ವಿದ್ಯಾರ್ಥಿ : ನಮ್ಮ ಕಿವಿ ಮುಚ್ಕೋಬೇಕು ಸಾರ್.",

  "ಟೀಚರ್: ಆಕ್ಸ್‌ಫರ್ಡ್ ಅಂದ್ರೆ ಅರ್ಥ ಎನು ? ವಿದ್ಯಾರ್ಥಿ : ಎತ್ತು ಅಂದ್ರೆ ಎಂಟು, ಫೋರ್ಡ್ ಅಂದ್ರೆ ಗಾಡಿ.ಹಾಗಾಗಿ ಆಕ್ಸ್ ಫರ್ಡ್ ಅಂದ್ರೆ ಎತ್ತಿನ ಗಾಡಿ ಅಂತಾ ಅರ್ಥ.",

  "ಶಿಕ್ಷಕ: ವರ್ತಮಾನ ಕಾಲ, ಭೂತ ಕಾಲ ಮತ್ತೆ ಭವಿಷ್ಯತ್ ಕಾಲಕ್ಕೆ ಉಧಾಹರಣ ಕೊಡು. ವಿದ್ಯಾರ್ಥಿ: ಮೇಡಂ, ನೆನ್ನೆ ನಾನು ನಿಮ್ಮ ಮಗಳನ್ನ ನೋಡಿದೆ, ಇವತ್ತು ಅವಳನ್ನ ಪ್ರೀತಿ ಮಾಡ್ತಾ ಇದ್ದೀನಿ ಮತ್ತೆ ಅವಳನ್ನೇ ಮದುವೆ ಆಗ್ತೀನಿ.",

  "ಟೀಚರ್: ನೀನು ಶಾಲೆಗೆ ಯಾಕೆ ಬರ್ತೀಯಾ ? ವಿದ್ಯಾರ್ಥಿ : 'ವಿದ್ಯಾ'ಗೋಸ್ಕರ ಮೇಡಂ ಟೀಚರ್: ಮತ್ತೆ ಈಗ ನಿದ್ದೆ ಯಾಕೆ ಮಾಡ್ತಾ ಇದ್ದೀಯ ? ವಿದ್ಯಾರ್ಥಿ : ಇವತ್ತು ವಿದ್ಯಾ ಬಂದಿಲ್ವಲ್ಲ ಮೇಡಂ, ಅದಕ್ಕೆ",

  "ಶಿಕ್ಷಕ: ಮಕ್ಕಳೆ, ಒಳ್ಳೆ ಆರೋಗ್ಯಕ್ಕಾಗಿ ನೀನು ದಿನವೂ 8 ಗಂಟೆಗಳು ಕಾಲ ಮಲಗಬೇಕು. ವಿದ್ಯಾರ್ಥಿ: ಅದು ಹೇಗೇ ಸಾಧ್ಯ ಮೇಡಂ, ಶಾಲೆ ಇರೋದು ಬಾರಿ 7 ಗಂಟೆಗಳು ಮಾತ್ರವೇ.",

  "ಸಂತ ನಾ ಕುದುರೆ ಕಾಣೆಯಾಗಿತ್ತು.aadare avanu tumbha khushiyagidda. ಬಂಟ: ನಿನಗೆ ನಿನ್ನ ಕುದುರೆ ಕಳೆದು ಹೋಗಿದ್ದಕ್ಕೆ ದುಃಖ ಆಗ್ತಾ ಇಲ್ವಾ ? ಸಂತ : ಇಲ್ಲಪ್ಪಾ, ನನ್ನ ಕುದುರೆ ಕಳೆದುಹೋದ ಸಮಯದಲ್ಲಿ ನಾನು ಅದರ ಮೇಲೆ ಇದ್ದೆ, ನಾನು ಕೂಡ ಕಳೆದು ಹೋಗ್ತಾ ಇದ್ದೆ ಅಲ್ವಾ!!!!!",

  "ಸಂತಾ ನ ಗೆಳತಿ: ನಾವು ಬೇಗ ಮದುವೆ ಮಾಡ್ಕೋಬೇಕು.ಸಂತ: ಹೌದು, ಆದರೇ ನಮ್ಮಣ್ಣ ಯಾರು ಮದುವೆ ಆಗ್ತಾರೆ.",

  "ಮಾಲೀಕ: ಅರೇ, ನೀನು ನಮ್ಮ ತಾತನ ಕಾಲದ ಗಡಿಯಾರ ನಾ ಒಡಾಕಿಬಿಟ್ಟೆ. ಸಂತ: ಸದ್ಯ, ನಾನೂ ಹೊಸಾದು ಅಂತ ಅಂದುಕೊಂಡು ಬಿಟ್ಟೆ.",

  "ಟೀಚರ್: ನಿನ್ನ ಹಗೂ ಸುಮ ಲ ಉತ್ತರ ಪತ್ರಿಕೆ ಒಂದೆ ತರಹ ಇದೆಯಲ್ಲ.ಹೇಗೇ ? ಸಂತಾ : ಯಾಕೆಂದರೆ, ಪ್ರಶ್ನೆ ಪತ್ರಿಕೆ ಒಂದೇ ಅಲ್ವಾ ಮೇಡಂ, ಅದಕ್ಕೇ.",

  "ತಂದೆ: ಹೇಗೋ 4 ವರ್ಷ ಇಂಜಿನಿಯರಿಂಗ್ ಮುಗಿಸಿದೆ.ಈಗಾ ಏನು ಮಾಡ್ತೀಯಾ ?ಮಗಾ : ಈಗ ಬಾಕಿ ಅಂತಾ ಒಂದು ಕೋರ್ಸ್ ಇದೆ.ಅದನ್ನಾ ಮಾಡ್ತೀನಿ.10 / 24 / 2010 10: 11: 26 AM ರಂದು(ಅನಾಮಧೇಯ) ಕನ್ನಡ ಜೋಕ್ಸ್",

  "ರೋಗಿ: ಡಾಕ್ಟರ್, ನನಗೆ 3 ತಿಂಗಳಿನಿಂದ ಕೆಮ್ಮು ಇದೆ. ಡಾಕ್ಟರ್: ಇಷ್ಟು ದಿನ ಹೇಗೇ ಸುಮ್ನೆ ಇದ್ರಾ ?ರೋಗಿ : ಇಲ್ಲಾ ಡಾಕ್ಟರ್, ಕೆಮ್ತಾ ಇದ್ದೆ.",

  "ರೋಗಿ: ವೈದ್ಯ, ಒಂದು ವಿಷಯದಲ್ಲಿ ನೀನು ತುಂಬ ಅದೃಷ್ಟಶಾಲಿ. ಡಾಕ್ಟರ್: ಯಾವುದರಲ್ಲಿ ? ರೋಗಿ : ನಿಮಗೇನಾದ್ರೂ ಆದ್ರೆ, ನಿಮಗೆ ನೀವೇ ಆಪರೇಷನ್ ಮಾಡಬೇಕಾಗಿರೋದಿಲ್ಲ: -)",

  "ಹೆಂಡತಿ: ನಿಮ್ಮನ್ನ ನೋಡೋಕೆ ಡಾಕ್ಟರ್ ಬಂದಿದ್ದಾರೆ ಗಂಡ: ನನಗೇ ಮೈ ಹುಷಾರಿಲ್ಲ, ಅವರನ್ನ ನಾಲೇ ಬರೋಕೆ ಹೇಳು",

  "ಸಂತ: ನಿನ್ನ ಹೆಂಡತಿಯಾಗಬಾರದು ? ಬಂಟ : ಆವತ್ತು ಬಾಯಿತಪ್ಪಿ ಕೋಪದಲ್ಲಿ ಕೂಡ ನೀನು ಸುಂದರವಾಗಿ ಇರ್ತಿಯಾ ಅಂದೆ.ಅವತ್ತಿನಿಂದ ಹೀಗೇ ಇರ್ತಾಳೆ.",

  "doctor: ರಾಮಣ್ಣ, ಊಟ ಆದ್ಮೇಲೆ ನಿದ್ದೆ ಮಾತ್ರ ತಗೊಂಡ್ರಲ್ಲಾ ? ರಾಮಣ್ಣ : ಇಲ್ಲಾ ಡಾಕ್ಟರ್!!ಊಟ ಆದ್ಮೇಲೆ ನಿದ್ದೆ ಬಂದಿದ್ರಿಂದ ಮಾತ್ರ ತಗೋಳೋದು ಮರೆತು ಹೋಯ್ತು.",

  "ಸಂತ: ನನ್ನ ಮಗ ನನ್ನ ಮಾತನ್ನು ಕೇಳೋದೇ ಇಲ್ಲ, ಗೊತ್ತಾ ? ಬಂಟ : ಯಾಕೆ ? ಅವನಿಗೆ ಅಷ್ಟೊಂದು ಕಬ್ಬಾ ?ಸಂತೆ : ಇಲ್ಲಾ, ಅವನಿಗೆ ಕಿವಿ ಕೇಳು.",

  "ಗಂಡ: ನೀನು ಅಡಿಗೆ ತುಂಬಾ ಚೆನ್ನಾಗಿ ಮಾಡ್ತೀಯ ಕಣೇ. ಹೆಂಡತಿ: ಹೌದಾ, ನೀನು ಎಷ್ಟು ಮಸ್ಕ ಹೋದ್ರೂ ಅಡಿಗೇನಾ ನೀನು ಮಾಡಬೇಕು.",

  "1 ನೇ ಹೆಂಡತಿ: ನಿನ್ನ ಗಂಡ ದಿನಾಲೂ ಕೂಡಿದು ಮನೆಗೆ ಬರ್ತಾನಲ್ಲ.ನೀನು ಕೇಳೋದಿಲ್ವಾ ? 2 ನೇ ಹೆಂಡತಿ : ನಾನು ಕೇಳಿದ್ರೆ ಕೊಡೋದೇ ಇಲ್ಲ ಕಣ್ರೀ.",

  "ಶಿಕ್ಷಕ: 1 ಬಾಳೆ ಹಣ್ಣನ್ನು 5 ಮಂದಿ ಹೇಗೇ ತಿಂತಾರೆ ? ವಿದ್ಯಾರ್ಥಿ : ಬಾಯಿಂದ",

  "ಹೆಂಡತಿ: ರೀ, ಯಾರೋ ನನ್ನ ಕಾಲನ್ನ ಹಿಂದಿನಿಂದ ಮುಟ್ಟುತ್ತಾ ಇದ್ದಾರೆ.ಗಂಡ: ಹಿಂದೆ ತಿರುಗಿ ನಿನ್ನ ಮುಖ ತೋರು, ಮುಟ್ಟೋದನ್ನ ನಿಲ್ಲಿಸಿ ಬಿಡ್ತಾನೆ.ಮೂಲಕ(ಅನಾಮಧೇಯ) 10 / 24 / 2010 ರಂದು 10: 14: 16 AM Hilarious Jokes in Kannada",

  "ram: nanna hendti Jote Jagala Aadaagalal Modalu ನಮ್ಮ ಮನೆಯ ಹಿಟ್ಟಲ್ಲಿರುವ ಬಾವಿನ ಮುಚ್ಚಿ ಬಿಡುತ್ತೆನೆ.ಶ್ಯಾಮ್: ಯಾಕೆ ? ನಿನ್ನ ಹೆಂಡತಿ ಅದರಲ್ಲಿ ಬೀಳ್ತಾಳೆ ಅಂತ ಭಯನಾ ? ರಾಮ : ಇಲ್ಲಪ್ಪ.ಅವಳು ನನ್ನ ಭಾವಿಯಲ್ಲಿ ತಳ್ಳಿಬಿಡುತ್ತಾಳೆ ಅಂತ ಭಯ ಅಷ್ಟೆ.",

  "ವೈದ್ಯ: ನೋಡಿ, ಈ ಖಾಯಿಲೆ ವಂಶಿಕವಾಗಿ ಬಂದಿದೆ.ಅಂದ್ರೆ ನಿಮ್ಮ ತಾತನ ಕಾಲದಿಂದ ಆರಂಭವಾಗಿದೆ. ರೋಗಿ: ಅಬ್ಬಾ!!!ಹಾಗಾದ್ರೆ, ಈ ಆಪರೇಷನ್ ನಾ ನಮ್ಮ ತಾತನಿಗೆ ಮಾಡಿ ಡಾಕ್ಟರ್.",

  "ಬಂಟ: ಸಂತ, ಯಾಕೆ ಇಷ್ಟು ಸಪ್ಪಗೆ ಕುಳಿತಿದ್ದೀಯ ? ಸಂತಾ : ಭಾರತ ಮೇಲೆ ಬೆಟ್ ಕಟ್ಟಿ 200 ರೂ.ಕಳ್ಕೊಂಡೆ ಕಣೋ. ಬಂಟ: ಹೇಗೇ ? ಸಂತಾ : ಭಾರತ ಗೆಲ್ಲುತ್ತೆ ಅಂತಾ 100 ರೂ.ಬಾಜಿ ಕಟ್ಟಿದ್ದೆ.aadare india match sotu hodaru. ಬಂಟ: ಮ್ಯಾಟ್ಟೆ ಆ ಹೆಚ್ಚುವರಿ 100 ರೂ.ಹೆಗೆ ಸೋತೆ ? ಸಂತಾ : ಇವತ್ತು ಆ ಮ್ಯಾಚ್ ರಿಪ್ಲೇ ಹಾಕಿದ್ರು.ಇವತ್ತಾದ್ರೂ ಗೆಲ್ತಾರೆ ಅನ್ನೋ ಆಸೆಯಲ್ಲಿ ಮತ್ತೆ ಬೆಟ್ ಕಟ್ಟಿದೆ. ",

  "ಬೀಟಾ: ಅಪ್ಪಾ, ನೀನು ನಾಯಕ ಹೇಗೇ ಆದ್ರಿ ? ನಾಯಕ : ಅದಕ್ಕೇ ತುಂಬ ಪ್ರತಿಭೆ ಬೇಕು ಮಗು. ಬೀಟಾ: ಪ್ರತಿಭೆ ಬೇಕು ಅಂತಾ ಗೊತ್ತು ಅಪ್ಪಾ.ಅದಕ್ಕೇ ನನಗೇ ಅನುಮಾನ ಬಂದಿದ್ದು, ನೀನು ಹೇಗೇ ಹೀರೋ ಆದ್ರಿ ಅಂತಾ.",

  "ಶಿಕ್ಷಕ: ನಾವು ಬದುಕು ಬೇಕಾದರೇ ಆಮ್ಲಜನಕ ತುಂಬ ಮುಖ್ಯ.ಇದನ್ನು 4 ಶತಮಾನಗಳ ಮುಂದೆ ಕಂಡುಹಿಡಿಯಲಾಯ್ತು. ಪಪ್ಪು: ಸದ್ಯ, ನಾನು ಆ ಕಾಲದಲ್ಲಿ ಹುಟ್ಟಲಿಲ್ಲ.ಇಲ್ಲಾಂದ್ರೆ ಸಟ್ಟು ಹೋಗ್ತಾ ಇದ್ದೆ.",

  "​ ಮುಖ್ಯೋಪಾಧ್ಯಾಯರು: ಐನ್ಸ್ಟೈನ್ ಯಾರು ?ವಿದ್ಯಾರ್ಥಿ : ಗೊತ್ತಿಲ್ಲ ಸಾರ್.ಮುಖ್ಯೋಪಾಧ್ಯಾಯರು: ಗಮನ ಅಧ್ಯಯನ ಕಡೆ ಇರ್ಲಿ, ಆಗೆಲ್ಲಾ ಗೊತ್ತಾಗುತ್ತೆ. ವಿದ್ಯಾರ್ಥಿ: ನಿಮಗೇ ರಮೇಶ ಯಾರು ಅಂತಾ ಗೊತ್ತಾ ? ಮುಖ್ಯೋಪಾಧ್ಯಾಯರು : ಗೊತ್ತಿಲ್ಲ. ವಿದ್ಯಾರ್ಥಿ: ಗಮನ ನಿಮ್ಮ ಮಗ ಕಡೆನೂ ಇರ್ಲಿ.aaga ellaa gottaagutte.",

  "1 ನೇ ಕಿವುಡ ಸ್ಕೂಟರ್ ಎಳೆದುಕೊಂಡು ಹೋಗ್ತಾ ಇದ್ದ. 2 ನೆ ಕಿವುಡ - ಯೇನಾಯ್ತು, ಪೆಟ್ರೋಲ್ ಖಾಲಿಯಾಯ್ತಾ ? 1 ನೇ ಕಿವುಡ - ಇಲ್ಲಪ್ಪಾ, ಪೆಟ್ರೋಲ್ ಖಾಲಿ ಆಗೋಯ್ತು 2 ನೇ ಕಿವುಡ - ಓ ಹಾಗೆ, ನಾನು ಪೆಟ್ರೋಲ್ ಖಾಲಿಯಾಯ್ತೇನೋ ಅಂತ ಅನ್ಕೊಂಡೆ.",

  "boss: ninage windows XP bagge enaadru gotta ? ಸಂತಾ : ನಾನು ಕ್ರಿಕೆಟ್ ಆಡಿ ತುಂಬಾ ಕಿಟಕಿಗಳನ್ನು ಹೊಡೆದೇನಿ, ಆದರೇ ಈ XP ಯಾವ್ದು ಅಂತ ಗೊತ್ತಿಲ್ಲ.",
];

const Rand_jokes = Math.floor(Math.random() * jokes.length);
const Disp_joke = jokes[Rand_jokes];
document.getElementById("Jokes").innerHTML = Disp_joke;
