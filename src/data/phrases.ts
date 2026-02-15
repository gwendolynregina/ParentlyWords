export type Tone = "gentle" | "neutral" | "firm";

export interface Phrase {
  id: string;
  english: string;
  french: string;
  mandarin: string;
  pinyin: string;
  tone: Tone;
}

export interface Situation {
  id: string;
  title: string;
  icon: string;
  color: string;
  phrases: Phrase[];
}

export const situations: Situation[] = [
  {
    id: "upset",
    title: "My child is upset",
    icon: "😢",
    color: "bg-[#E5F2F2] hover:bg-[#D0E5E5]",
    phrases: [
      // Gentle
      {
        id: "upset-g1",
        english: "I can see you're feeling sad. I'm here with you.",
        french: "Ça te fait beaucoup d'émotions, là.",
        mandarin: "我看到你很难过。我在这里陪着你。",
        pinyin: "Wǒ kàn dào nǐ hěn nánguò. Wǒ zài zhèlǐ péi zhe nǐ.",
        tone: "gentle"
      },
      {
        id: "upset-g2",
        english: "It's okay to cry. I'll stay right here.",
        french: "Je suis là, prends ton temps.",
        mandarin: "哭出来没关系。我会一直在这里。",
        pinyin: "Kū chūlái méi guānxi. Wǒ huì yīzhí zài zhèlǐ.",
        tone: "gentle"
      },
      {
        id: "upset-g3",
        english: "Do you want a hug?",
        french: "Tu veux que je reste près de toi ?",
        mandarin: "你想要一个拥抱吗？",
        pinyin: "Nǐ xiǎng yào yīgè yōngbào ma?",
        tone: "gentle"
      },
      {
        id: "upset-g4",
        english: "I understand this is hard for you.",
        french: "Ça a dû être vraiment dur.",
        mandarin: "我知道这对你来说真的很难。",
        pinyin: "Wǒ zhīdào zhè duì nǐ lái shuō zhēn de hěn nán.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "upset-n1",
        english: "Can you tell me what happened?",
        french: "Dis-moi ce qui t'embête.",
        mandarin: "你能告诉我发生了什么吗？",
        pinyin: "Nǐ néng gàosù wǒ fāshēng le shénme ma?",
        tone: "neutral"
      },
      {
        id: "upset-n2",
        english: "Take a deep breath with me.",
        french: "Regarde-moi et parle-moi.",
        mandarin: "来，和我一起深呼吸。",
        pinyin: "Lái, hé wǒ yìqǐ shēn hūxī.",
        tone: "neutral"
      },
      {
        id: "upset-n3",
        english: "Let's figure this out together.",
        french: "On va régler ça.",
        mandarin: "我们一起想办法。",
        pinyin: "Wǒmen yīqǐ xiǎng bànfǎ.",
        tone: "neutral"
      },
      {
        id: "upset-n4",
        english: "What do you need right now?",
        french: "Calme ton corps un peu.",
        mandarin: "你现在想要什么？",
        pinyin: "Nǐ xiànzài xiǎng yào shénme?",
        tone: "neutral"
      },
      // Firm
      {
        id: "upset-f1",
        english: "I hear you, but screaming won't help us solve this.",
        french: "Je t'écoute, mais sans crier.",
        mandarin: "我听到你了，但大喊帮不了我们。",
        pinyin: "Wǒ tīng dào nǐ le, dàn dà hǎn bāng bù liǎo wǒmen.",
        tone: "firm"
      },
      {
        id: "upset-f2",
        english: "I want to help you, but I need you to calm down first.",
        french: "On se calme tout de suite.",
        mandarin: "我想帮你，我们先一起冷静一下，好吗？",
        pinyin: "Wǒ xiǎng bāng nǐ, wǒmen xiān yìqǐ lěngjìng yíxià, hǎo ma?",
        tone: "firm"
      },
      {
        id: "upset-f3",
        english: "Let's take a break and try again when you're ready.",
        french: "Je ne peux pas t'aider si tu cries.",
        mandarin: "我们休息一下，等你准备好了再试。",
        pinyin: "Wǒmen xiūxi yīxià, děng nǐ zhǔnbèi hǎo le zài shì.",
        tone: "firm"
      }
    ]
  },
  {
    id: "hurt",
    title: "Someone hurt my child",
    icon: "💔",
    color: "bg-[#FDF0ED] hover:bg-[#F5D8D0]",
    phrases: [
      // Gentle
      {
        id: "hurt-g1",
        english: "I can see that really hurt. I'm sorry that happened.",
        french: "Ça t'a surpris ?",
        mandarin: "我知道这让你很伤心。我很抱歉发生了这件事。",
        pinyin: "Wǒ zhīdào zhè ràng nǐ hěn shāngxīn. Wǒ hěn bàoqiàn fāshēng le zhè jiàn shì.",
        tone: "gentle"
      },
      {
        id: "hurt-g2",
        english: "Your feelings matter to me.",
        french: "Ça t'a fait mal au cœur ?",
        mandarin: "你的感受对我来说很重要。",
        pinyin: "Nǐ de gǎnshòu duì wǒ lái shuō hěn zhòngyào.",
        tone: "gentle"
      },
      {
        id: "hurt-g3",
        english: "It wasn't your fault.",
        french: "Je comprends que tu sois blessé.",
        mandarin: "这不是你的错。",
        pinyin: "Zhè bùshì nǐ de cuò.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "hurt-n1",
        english: "Tell me what happened.",
        french: "Qui était là ?",
        mandarin: "告诉我发生了什么。",
        pinyin: "Gàosù wǒ fāshēng le shénme.",
        tone: "neutral"
      },
      {
        id: "hurt-n2",
        english: "Are you hurt? Let me see.",
        french: "Qu'est-ce qu'il/elle a dit ?",
        mandarin: "你受伤了吗？让我看看。",
        pinyin: "Nǐ shòushāng le ma? Ràng wǒ kàn kàn.",
        tone: "neutral"
      },
      {
        id: "hurt-n3",
        english: "Let's talk about what we can do.",
        french: "On va clarifier ça.",
        mandarin: "我们来谈谈可以怎么做。",
        pinyin: "Wǒmen lái tán tán kěyǐ zěnme zuò.",
        tone: "neutral"
      },
      // Firm
      {
        id: "hurt-f1",
        english: "That wasn't okay. We need to address this.",
        french: "On ne parle pas comme ça aux autres.",
        mandarin: "那样做是不对的。我们会想办法解决。",
        pinyin: "Nàyàng zuò shì bù duì de. Wǒmen huì xiǎng bànfǎ jiějué.",
        tone: "firm"
      },
      {
        id: "hurt-f2",
        english: "I will help you, but first I need you to tell me the truth.",
        french: "Personne n'a le droit de te faire mal.",
        mandarin: "我会帮你，但你要跟我说清楚发生了什么。",
        pinyin: "Wǒ huì bāng nǐ, dàn nǐ yào gēn wǒ shuō qīngchu fāshēng le shénme.",
        tone: "firm"
      },
      {
        id: "hurt-f3",
        english: "Hurting others is never acceptable.",
        french: "Je vais m'en occuper.",
        mandarin: "伤害别人是绝对不可以的。",
        pinyin: "Shānghài biérén shì juéduì bù kěyǐ de.",
        tone: "firm"
      }
    ]
  },
  {
    id: "wont-listen",
    title: "My child isn't listening",
    icon: "👂",
    color: "bg-[#F2F5F5] hover:bg-[#E8ECEC]",
    phrases: [
      // Gentle
      {
        id: "listen-g1",
        english: "I can see you're busy. When you're ready, I need to talk to you.",
        french: "Je vois que tu es concentré.",
        mandarin: "等你准备好了，我们再说。",
        pinyin: "Děng nǐ zhǔnbèi hǎo le, wǒmen zài shuō.",
        tone: "gentle"
      },
      {
        id: "listen-g2",
        english: "I'll wait until you can hear me.",
        french: "Finis ce que tu fais, puis écoute-moi.",
        mandarin: "我会等到你能听我说。",
        pinyin: "Wǒ huì děng dào nǐ néng tīng wǒ shuō.",
        tone: "gentle"
      },
      {
        id: "listen-g3",
        english: "Let's find a solution together.",
        french: "On peut faire une pause ?",
        mandarin: "我们一起找个解决办法吧。",
        pinyin: "Wǒmen yīqǐ zhǎo gè jiějué bànfǎ ba.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "listen-n1",
        english: "Please look at me when I'm talking to you.",
        french: "Stop. Regarde-moi.",
        mandarin: "我说话的时候请看着我。",
        pinyin: "Wǒ shuōhuà de shíhòu qǐng kàn zhe wǒ.",
        tone: "neutral"
      },
      {
        id: "listen-n2",
        english: "I need you to listen. This is important.",
        french: "J'attends ton attention.",
        mandarin: "我需要你听着。这很重要。",
        pinyin: "Wǒ xūyào nǐ tīng zhe. Zhè hěn zhòngyào.",
        tone: "neutral"
      },
      {
        id: "listen-n3",
        english: "Can you repeat what I just said?",
        french: "Réponds-moi.",
        mandarin: "你能重复一下我刚才说的话吗？",
        pinyin: "Nǐ néng chóngfù yīxià wǒ gāngcái shuō de huà ma?",
        tone: "neutral"
      },
      // Firm
      {
        id: "listen-f1",
        english: "I've asked you three times. This is the last time.",
        french: "Maintenant, tu m'écoutes.",
        mandarin: "我已经说过几次了，现在需要你听我说。",
        pinyin: "Wǒ yǐjīng shuō guò jǐ cì le, xiànzài xūyào nǐ tīng wǒ shuō.",
        tone: "firm"
      },
      {
        id: "listen-f2",
        english: "If you don't listen, there will be consequences.",
        french: "Je ne vais pas répéter encore.",
        mandarin: "如果你不听，就会有结果。",
        pinyin: "Rúguǒ nǐ bù tīng, jiù huì yǒu jiéguǒ.",
        tone: "firm"
      },
      {
        id: "listen-f3",
        english: "Stop what you're doing and listen to me now.",
        french: "Stop ce que tu fais.",
        mandarin: "停下你正在做的事，现在听我说。",
        pinyin: "Tíng xià nǐ zhèngzài zuò de shì, xiànzài tīng wǒ shuō.",
        tone: "firm"
      }
    ]
  },
  {
    id: "aggressive",
    title: "My child is being aggressive",
    icon: "😤",
    color: "bg-[#FAEEED] hover:bg-[#F5DFDC]",
    phrases: [
      // Gentle
      {
        id: "aggro-g1",
        english: "I can see you're very angry. Let's calm down together.",
        french: "Ton corps est très en colère.",
        mandarin: "我看到你很生气。我们一起冷静下来吧。",
        pinyin: "Wǒ kàn dào nǐ hěn shēngqì. Wǒmen yīqǐ lěngjìng xiàlái ba.",
        tone: "gentle"
      },
      {
        id: "aggro-g2",
        english: "It's okay to feel angry, but it's not okay to hurt.",
        french: "On va poser les mains.",
        mandarin: "生气是可以的，但是伤害别人是不可以的。",
        pinyin: "Shēngqì shì kěyǐ de, dànshì shānghài biérén shì bù kěyǐ de.",
        tone: "gentle"
      },
      {
        id: "aggro-g3",
        english: "Let's find another way to show how you feel.",
        french: "Viens près de moi.",
        mandarin: "我们找另一种方式来表达你的感受吧。",
        pinyin: "Wǒmen zhǎo lìng yī zhǒng fāngshì lái biǎodá nǐ de gǎnshòu ba.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "aggro-n1",
        english: "Hands are not for hitting.",
        french: "On garde ses mains pour soi.",
        mandarin: "手不是用来打人的。",
        pinyin: "Shǒu bùshì yòng lái dǎ rén de.",
        tone: "neutral"
      },
      {
        id: "aggro-n2",
        english: "Use your words, not your hands.",
        french: "Ça suffit.",
        mandarin: "用嘴巴说，不要用手。",
        pinyin: "Yòng zuǐba shuō, bú yào yòng shǒu.",
        tone: "neutral"
      },
      {
        id: "aggro-n3",
        english: "Take a step back and breathe.",
        french: "Recule.",
        mandarin: "退后一步，深呼吸。",
        pinyin: "Tuìhòu yī bù, shēn hūxī.",
        tone: "neutral"
      },
      // Firm
      {
        id: "aggro-f1",
        english: "Stop. Hitting is not allowed.",
        french: "Je ne te laisserai pas taper.",
        mandarin: "停。不能打人。",
        pinyin: "Tíng. Bù néng dǎ rén.",
        tone: "firm"
      },
      {
        id: "aggro-f2",
        english: "I won't let you hurt anyone.",
        french: "Stop immédiatement.",
        mandarin: "我不会让你伤害任何人。",
        pinyin: "Wǒ bù huì ràng nǐ shānghài rènhé rén.",
        tone: "firm"
      },
      {
        id: "aggro-f3",
        english: "We need to go to a quiet place right now.",
        french: "On arrête maintenant.",
        mandarin: "我们现在需要去一个安静的地方。",
        pinyin: "Wǒmen xiànzài xūyào qù yīgè ānjìng de dìfāng.",
        tone: "firm"
      }
    ]
  },
  {
    id: "leaving",
    title: "It's time to go",
    icon: "🚪",
    color: "bg-[#F5F0ED] hover:bg-[#EBE3DD]",
    phrases: [
      // Gentle
      {
        id: "leave-g1",
        english: "Five more minutes, then it's time to go.",
        french: "Encore un petit moment.",
        mandarin: "再玩五分钟，然后我们就要走了。",
        pinyin: "Zài wán wǔ fēnzhōng, ránhòu wǒmen jiù yào zǒu le.",
        tone: "gentle"
      },
      {
        id: "leave-g2",
        english: "I know it's hard to leave when you're having fun.",
        french: "On finit ce que tu fais.",
        mandarin: "我知道玩得开心时很难离开。",
        pinyin: "Wǒ zhīdào wán de kāixīn shí hěn nán líkāi.",
        tone: "gentle"
      },
      {
        id: "leave-g3",
        english: "We can come back another day.",
        french: "Dis au revoir tranquillement.",
        mandarin: "我们可以改天再来。",
        pinyin: "Wǒmen kěyǐ gǎitiān zài lái.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "leave-n1",
        english: "It's time to go now.",
        french: "On y va.",
        mandarin: "现在该走了。",
        pinyin: "Xiànzài gāi zǒu le.",
        tone: "neutral"
      },
      {
        id: "leave-n2",
        english: "Say goodbye and let's go.",
        french: "C'est terminé.",
        mandarin: "说再见，我们走吧。",
        pinyin: "Shuō zàijiàn, wǒmen zǒu ba.",
        tone: "neutral"
      },
      {
        id: "leave-n3",
        english: "Put your shoes on, please.",
        french: "Mets ton manteau.",
        mandarin: "请穿上你的鞋子。",
        pinyin: "Qǐng chuān shàng nǐ de xiézi.",
        tone: "neutral"
      },
      // Firm
      {
        id: "leave-f1",
        english: "We're leaving now. No more discussion.",
        french: "On part maintenant.",
        mandarin: "现在要走了，不再说了。",
        pinyin: "Xiànzài yào zǒu le, bú zài shuō le.",
        tone: "firm"
      },
      {
        id: "leave-f2",
        english: "You have two choices: walk or be carried.",
        french: "Pas de discussion.",
        mandarin: "你有两个选择：自己走或者我抱着你走。",
        pinyin: "Nǐ yǒu liǎng gè xuǎnzé: zìjǐ zǒu huòzhě wǒ bào zhe nǐ zǒu.",
        tone: "firm"
      },
      {
        id: "leave-f3",
        english: "I'm counting to three, then we go.",
        french: "Tu viens.",
        mandarin: "我数到三，然后我们就走。",
        pinyin: "Wǒ shǔ dào sān, ránhòu wǒmen jiù zǒu.",
        tone: "firm"
      }
    ]
  },
  {
    id: "everyday",
    title: "Everyday phrases",
    icon: "💬",
    color: "bg-[#E5F0F0] hover:bg-[#D5E5E5]",
    phrases: [
      // "Can you bring me the toy?"
      {
        id: "everyday-g1",
        english: "Can you bring me the toy?",
        french: "Tu peux m'apporter le jouet, s'il te plaît ?",
        mandarin: "你可以帮我拿一下玩具吗？",
        pinyin: "nǐ kě yǐ bāng wǒ ná yí xià wán jù ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n1",
        english: "Can you bring me the toy?",
        french: "Tu m'apportes le jouet ?",
        mandarin: "你把玩具拿过来。",
        pinyin: "nǐ bǎ wán jù ná guò lái.",
        tone: "neutral"
      },
      {
        id: "everyday-f1",
        english: "Can you bring me the toy?",
        french: "Apporte-moi le jouet, maintenant.",
        mandarin: "现在把玩具拿过来。",
        pinyin: "xiàn zài bǎ wán jù ná guò lái.",
        tone: "firm"
      },
      // "Come here"
      {
        id: "everyday-g2",
        english: "Come here",
        french: "Viens ici, s'il te plaît.",
        mandarin: "过来一下，好吗？",
        pinyin: "guò lái yí xià, hǎo ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n2",
        english: "Come here",
        french: "Viens ici.",
        mandarin: "停一下，等一等。",
        pinyin: "Tíng yíxià, děng yì děng.",
        tone: "neutral"
      },
      {
        id: "everyday-f2",
        english: "Come here",
        french: "Viens ici, tout de suite.",
        mandarin: "停，这样不可以。",
        pinyin: "Tíng, zhèyàng bù kěyǐ.",
        tone: "firm"
      },
      // "Wait"
      {
        id: "everyday-g3",
        english: "Wait",
        french: "Attends un petit moment.",
        mandarin: "等一下，好吗？",
        pinyin: "děng yí xià, hǎo ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n3",
        english: "Wait",
        french: "Attends.",
        mandarin: "等一下。",
        pinyin: "děng yí xià.",
        tone: "neutral"
      },
      {
        id: "everyday-f3",
        english: "Wait",
        french: "Stop. Attends.",
        mandarin: "停，等着。",
        pinyin: "tíng, děng zhe.",
        tone: "firm"
      },
      // "Give it to me"
      {
        id: "everyday-g4",
        english: "Give it to me",
        french: "Tu me le donnes, s'il te plaît ?",
        mandarin: "可以给我吗？",
        pinyin: "kě yǐ gěi wǒ ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n4",
        english: "Give it to me",
        french: "Donne-moi ça.",
        mandarin: "给我。",
        pinyin: "gěi wǒ.",
        tone: "neutral"
      },
      {
        id: "everyday-f4",
        english: "Give it to me",
        french: "Donne-moi ça, maintenant.",
        mandarin: "现在给我。",
        pinyin: "xiàn zài gěi wǒ.",
        tone: "firm"
      },
      // "Stop / Don't do that"
      {
        id: "everyday-g5",
        english: "Stop / Don't do that",
        french: "Doucement, on ne fait pas ça.",
        mandarin: "慢一点，这样不行。",
        pinyin: "màn yì diǎn, zhè yàng bù xíng.",
        tone: "gentle"
      },
      {
        id: "everyday-n5",
        english: "Stop / Don't do that",
        french: "On ne fait pas ça.",
        mandarin: "不可以这样。",
        pinyin: "bù kě yǐ zhè yàng.",
        tone: "neutral"
      },
      {
        id: "everyday-f5",
        english: "Stop / Don't do that",
        french: "Stop. J'arrête.",
        mandarin: "停。我不允许。",
        pinyin: "tíng. wǒ bù yǔn xǔ.",
        tone: "firm"
      },
      // "Listen to me"
      {
        id: "everyday-g6",
        english: "Listen to me",
        french: "Écoute-moi un instant.",
        mandarin: "听我说一下，好吗？",
        pinyin: "tīng wǒ shuō yí xià, hǎo ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n6",
        english: "Listen to me",
        french: "Écoute-moi.",
        mandarin: "听我说。",
        pinyin: "tīng wǒ shuō.",
        tone: "neutral"
      },
      {
        id: "everyday-f6",
        english: "Listen to me",
        french: "Écoute-moi maintenant.",
        mandarin: "现在听我说。",
        pinyin: "xiàn zài tīng wǒ shuō.",
        tone: "firm"
      },
      // "Put it away"
      {
        id: "everyday-g7",
        english: "Put it away",
        french: "On range ça ensemble.",
        mandarin: "我们一起收起来。",
        pinyin: "wǒ men yì qǐ shōu qǐ lái.",
        tone: "gentle"
      },
      {
        id: "everyday-n7",
        english: "Put it away",
        french: "Range ça.",
        mandarin: "收起来。",
        pinyin: "shōu qǐ lái.",
        tone: "neutral"
      },
      {
        id: "everyday-f7",
        english: "Put it away",
        french: "Range ça maintenant.",
        mandarin: "现在收起来。",
        pinyin: "xiàn zài shōu qǐ lái.",
        tone: "firm"
      },
      // "Sit down"
      {
        id: "everyday-g8",
        english: "Sit down",
        french: "Tu peux t'asseoir, s'il te plaît ?",
        mandarin: "你坐一下，好吗？",
        pinyin: "nǐ zuò yí xià, hǎo ma?",
        tone: "gentle"
      },
      {
        id: "everyday-n8",
        english: "Sit down",
        french: "Assieds-toi.",
        mandarin: "坐下。",
        pinyin: "zuò xià.",
        tone: "neutral"
      },
      {
        id: "everyday-f8",
        english: "Sit down",
        french: "Assieds-toi maintenant.",
        mandarin: "现在坐下。",
        pinyin: "xiàn zài zuò xià.",
        tone: "firm"
      },
      // "Careful"
      {
        id: "everyday-g9",
        english: "Careful",
        french: "Attention, doucement.",
        mandarin: "小心一点。",
        pinyin: "xiǎo xīn yì diǎn.",
        tone: "gentle"
      },
      {
        id: "everyday-n9",
        english: "Careful",
        french: "Attention.",
        mandarin: "小心。",
        pinyin: "xiǎo xīn.",
        tone: "neutral"
      },
      {
        id: "everyday-f9",
        english: "Careful",
        french: "Stop, c'est dangereux.",
        mandarin: "停，很危险。",
        pinyin: "tíng, hěn wēi xiǎn.",
        tone: "firm"
      }
    ]
  },
  {
    id: "sharing",
    title: "My child doesn't want to share",
    icon: "🤝",
    color: "bg-[#E8F0F0] hover:bg-[#D5E3E3]",
    phrases: [
      // Gentle
      {
        id: "share-g1",
        english: "I know it's hard to share your favorite things.",
        french: "Je sais que c'est ton jouet préféré.",
        mandarin: "我知道分享你最喜欢的东西很难。",
        pinyin: "Wǒ zhīdào fēnxiǎng nǐ zuì xǐhuān de dōngxī hěn nán.",
        tone: "gentle"
      },
      {
        id: "share-g2",
        english: "How about taking turns?",
        french: "C'est dur de prêter.",
        mandarin: "我们轮流玩怎么样？",
        pinyin: "Wǒmen lúnliú wán zěnmeyàng?",
        tone: "gentle"
      },
      {
        id: "share-g3",
        english: "Sharing can make playing even more fun.",
        french: "On peut essayer un petit moment ?",
        mandarin: "分享可以让玩耍更有趣。",
        pinyin: "Fēnxiǎng kěyǐ ràng wánshuǎ gèng yǒuqù.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "share-n1",
        english: "Your friend would like a turn too.",
        french: "On fait chacun son tour.",
        mandarin: "你的朋友也想玩一下。",
        pinyin: "Nǐ de péngyǒu yě xiǎng wán yīxià.",
        tone: "neutral"
      },
      {
        id: "share-n2",
        english: "You can have it back in five minutes.",
        french: "C'est son tour.",
        mandarin: "五分钟后你就可以拿回来。",
        pinyin: "Wǔ fēnzhōng hòu nǐ jiù kěyǐ ná huílái.",
        tone: "neutral"
      },
      {
        id: "share-n3",
        english: "Let's set a timer for taking turns.",
        french: "On met le minuteur.",
        mandarin: "我们设个计时器来轮流吧。",
        pinyin: "Wǒmen shè gè jìshíqì lái lúnliú ba.",
        tone: "neutral"
      },
      // Firm
      {
        id: "share-f1",
        english: "If you can't share, we'll put it away.",
        french: "Si tu ne partages pas, on range.",
        mandarin: "都自己玩，不太公平哦。",
        pinyin: "Dōu zìjǐ wán, bú tài gōngpíng ó.",
        tone: "firm"
      },
      {
        id: "share-f2",
        english: "It's not fair to keep it all to yourself.",
        french: "On ne garde pas tout.",
        mandarin: "把所有东西都留给自己是不公平的。",
        pinyin: "Bǎ suǒyǒu dōngxī dōu liú gěi zìjǐ shì bù gōngpíng de.",
        tone: "firm"
      },
      {
        id: "share-f3",
        english: "Give your friend a turn now.",
        french: "Maintenant, c'est son tour.",
        mandarin: "现在让朋友玩一下，好吗？",
        pinyin: "Xiànzài ràng péngyǒu wán yíxià, hǎo ma?",
        tone: "firm"
      }
    ]
  },
  {
    id: "unkind",
    title: "My child said something unkind",
    icon: "💬",
    color: "bg-[#ECEDED] hover:bg-[#DFE2E2]",
    phrases: [
      // Gentle
      {
        id: "unkind-g1",
        english: "Those words can hurt. How do you think that made them feel?",
        french: "Ces mots peuvent blesser.",
        mandarin: "那些话会伤害人。你觉得他们听了会怎么想？",
        pinyin: "Nàxiē huà huì shānghài rén. Nǐ juéde tāmen tīng le huì zěnme xiǎng?",
        tone: "gentle"
      },
      {
        id: "unkind-g2",
        english: "I know you didn't mean to hurt them.",
        french: "On peut dire ça plus gentiment.",
        mandarin: "我知道你不是故意要伤害他们的。",
        pinyin: "Wǒ zhīdào nǐ bùshì gùyì yào shānghài tāmen de.",
        tone: "gentle"
      },
      {
        id: "unkind-g3",
        english: "Let's think of a kinder way to say that.",
        french: "Essaie autrement.",
        mandarin: "我们想想有没有更友善的说法。",
        pinyin: "Wǒmen xiǎng xiǎng yǒu méiyǒu gèng yǒushàn de shuōfǎ.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "unkind-n1",
        english: "That wasn't a kind thing to say.",
        french: "Ce n'était pas gentil.",
        mandarin: "那样说话不太友善。",
        pinyin: "Nàyàng shuōhuà bù tài yǒushàn.",
        tone: "neutral"
      },
      {
        id: "unkind-n2",
        english: "How would you feel if someone said that to you?",
        french: "On parle avec respect.",
        mandarin: "如果有人对你说那样的话，你会怎么想？",
        pinyin: "Rúguǒ yǒu rén duì nǐ shuō nàyàng de huà, nǐ huì zěnme xiǎng?",
        tone: "neutral"
      },
      {
        id: "unkind-n3",
        english: "We use kind words in this family.",
        french: "Recommence.",
        mandarin: "在我们家，我们要说好听的话。",
        pinyin: "Zài wǒmen jiā, wǒmen yào shuō hǎo tīng de huà.",
        tone: "neutral"
      },
      // Firm
      {
        id: "unkind-f1",
        english: "That's not okay. You need to apologize.",
        french: "Je n'accepte pas ça.",
        mandarin: "那样说话是不对的。你需要道歉。",
        pinyin: "Nàyàng shuōhuà shì bùduì de. Nǐ xūyào dàoqiàn.",
        tone: "firm"
      },
      {
        id: "unkind-f2",
        english: "I don't allow name-calling.",
        french: "Tu t'excuses.",
        mandarin: "我不允许骂人。",
        pinyin: "Wǒ bù yǔnxǔ mà rén.",
        tone: "firm"
      },
      {
        id: "unkind-f3",
        english: "Stop and think before you speak.",
        french: "On ne parle pas comme ça.",
        mandarin: "说话之前先停下来想一想。",
        pinyin: "Shuōhuà zhīqián xiān tíng xiàlái xiǎng yī xiǎng.",
        tone: "firm"
      }
    ]
  },
  {
    id: "scared",
    title: "My child is scared",
    icon: "😨",
    color: "bg-[#EBF2F2] hover:bg-[#DCE8E8]",
    phrases: [
      // Gentle
      {
        id: "scared-g1",
        english: "I'm here with you. You're safe.",
        french: "Je suis juste là.",
        mandarin: "我在这里陪着你。你是安全的。",
        pinyin: "Wǒ zài zhèlǐ péi zhe nǐ. Nǐ shì ānquán de.",
        tone: "gentle"
      },
      {
        id: "scared-g2",
        english: "It's okay to feel scared. I feel scared sometimes too.",
        french: "Tu es en sécurité.",
        mandarin: "害怕是正常的。我有时候也会害怕。",
        pinyin: "Hàipà shì zhèngcháng de. Wǒ yǒu shíhòu yě huì hàipà.",
        tone: "gentle"
      },
      {
        id: "scared-g3",
        english: "I'll hold your hand.",
        french: "On fait ça doucement.",
        mandarin: "我会握着你的手。",
        pinyin: "Wǒ huì wò zhe nǐ de shǒu.",
        tone: "gentle"
      },
      {
        id: "scared-g4",
        english: "Would you like me to stay with you?",
        french: "Je te tiens.",
        mandarin: "你想让我陪着你吗？",
        pinyin: "Nǐ xiǎng ràng wǒ péi zhe nǐ ma?",
        tone: "gentle"
      },
      // Neutral
      {
        id: "scared-n1",
        english: "What's making you feel scared?",
        french: "Qu'est-ce qui te fait peur ?",
        mandarin: "是什么让你感到害怕？",
        pinyin: "Shì shénme ràng nǐ gǎndào hàipà?",
        tone: "neutral"
      },
      {
        id: "scared-n2",
        english: "Let's take some deep breaths together.",
        french: "Regarde-moi.",
        mandarin: "我们一起深呼吸吧。",
        pinyin: "Wǒmen yīqǐ shēn hūxī ba.",
        tone: "neutral"
      },
      {
        id: "scared-n3",
        english: "What would help you feel better?",
        french: "On avance petit à petit.",
        mandarin: "什么能让你感觉好一点？",
        pinyin: "Shénme néng ràng nǐ gǎnjué hǎo yīdiǎn?",
        tone: "neutral"
      },
      // Firm
      {
        id: "scared-f1",
        english: "I understand you're scared, but we still need to do this.",
        french: "Je comprends, mais on y va.",
        mandarin: "我理解你很害怕，但我们还是需要做这件事。",
        pinyin: "Wǒ lǐjiě nǐ hěn hàipà, dàn wǒmen háishì xūyào zuò zhè jiàn shì.",
        tone: "firm"
      },
      {
        id: "scared-f2",
        english: "I'll be right here, but you can do this.",
        french: "On doit le faire.",
        mandarin: "我就在这里，你可以做到。",
        pinyin: "Wǒ jiù zài zhèlǐ, nǐ kěyǐ zuò dào.",
        tone: "firm"
      },
      {
        id: "scared-f3",
        english: "Being brave doesn't mean not being scared. It means doing it anyway.",
        french: "Je suis là, avance.",
        mandarin: "勇敢就是有点害怕，也还是去试一试。",
        pinyin: "Yǒnggǎn jiù shì yǒu diǎn hàipà, yě háishì qù shì yí shì.",
        tone: "firm"
      }
    ]
  },
  {
    id: "bedtime",
    title: "Bedtime is hard",
    icon: "🌙",
    color: "bg-[#E8EDED] hover:bg-[#DAE2E2]",
    phrases: [
      // Gentle
      {
        id: "bed-g1",
        english: "Let's get cozy and read a story.",
        french: "On se blottit un peu.",
        mandarin: "我们舒舒服服地躺下来读个故事吧。",
        pinyin: "Wǒmen shūshu fúfú de tǎng xiàlái dú gè gùshì ba.",
        tone: "gentle"
      },
      {
        id: "bed-g2",
        english: "I'll stay with you until you feel sleepy.",
        french: "Je te fais un bisou.",
        mandarin: "我会陪着你直到你困了。",
        pinyin: "Wǒ huì péi zhe nǐ zhídào nǐ kùn le.",
        tone: "gentle"
      },
      {
        id: "bed-g3",
        english: "Your body needs rest to grow big and strong.",
        french: "Encore un câlin.",
        mandarin: "你的身体需要休息才能长得又高又壮。",
        pinyin: "Nǐ de shēntǐ xūyào xiūxi cáinéng zhǎng de yòu gāo yòu zhuàng.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "bed-n1",
        english: "It's time for bed. Let's start our routine.",
        french: "Au lit.",
        mandarin: "该睡觉了。我们开始睡前准备吧。",
        pinyin: "Gāi shuìjiào le. Wǒmen kāishǐ shuì qián zhǔnbèi ba.",
        tone: "neutral"
      },
      {
        id: "bed-n2",
        english: "Brush your teeth, then we'll tuck you in.",
        french: "On éteint.",
        mandarin: "刷完牙，我们就帮你盖好被子。",
        pinyin: "Shuā wán yá, wǒmen jiù bāng nǐ gài hǎo bèizi.",
        tone: "neutral"
      },
      {
        id: "bed-n3",
        english: "One more story, then lights out.",
        french: "On se couche.",
        mandarin: "再讲一个故事，然后就关灯。",
        pinyin: "Zài jiǎng yīgè gùshì, ránhòu jiù guān dēng.",
        tone: "neutral"
      },
      // Firm
      {
        id: "bed-f1",
        english: "It's bedtime. No more getting up.",
        french: "On reste au lit.",
        mandarin: "该睡觉了，不可以再起来了。",
        pinyin: "Gāi shuìjiào le, bù kěyǐ zài qǐlái le.",
        tone: "firm"
      },
      {
        id: "bed-f2",
        english: "You need to stay in bed now.",
        french: "Pas de lever.",
        mandarin: "你现在必须待在床上。",
        pinyin: "Nǐ xiànzài bìxū dāi zài chuáng shàng.",
        tone: "firm"
      },
      {
        id: "bed-f3",
        english: "If you keep getting up, you'll lose story time tomorrow.",
        french: "Tu restes ici.",
        mandarin: "如果你一直起来，明天就没有讲故事时间了。",
        pinyin: "Rúguǒ nǐ yìzhí qǐlái, míngtiān jiù méiyǒu jiǎng gùshì shíjiān le.",
        tone: "firm"
      }
    ]
  },
  {
    id: "toilet-training",
    title: "Toilet training",
    icon: "🚽",
    color: "bg-[#E5F2F2] hover:bg-[#D0E5E5]",
    phrases: [
      // Gentle
      {
        id: "toilet-g1",
        english: "Let's try the potty when you're ready.",
        french: "On essaie tranquillement.",
        mandarin: "你准备好了我们就试试坐小马桶。",
        pinyin: "Nǐ zhǔnbèi hǎo le wǒmen jiù shìshì zuò xiǎo mǎtǒng.",
        tone: "gentle"
      },
      {
        id: "toilet-g2",
        english: "It's okay if nothing happens; we can try again later.",
        french: "Ce n'est pas grave.",
        mandarin: "没有也没关系，我们待会儿再试。",
        pinyin: "Méiyǒu yě méi guānxi, wǒmen dàihuìr zài shì.",
        tone: "gentle"
      },
      {
        id: "toilet-g3",
        english: "You're doing great. Learning takes time.",
        french: "Tu apprends.",
        mandarin: "你做得很好。学东西需要时间。",
        pinyin: "Nǐ zuò de hěn hǎo. Xué dōngxi xūyào shíjiān.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "toilet-n1",
        english: "Time to sit on the potty.",
        french: "C'est l'heure du pot.",
        mandarin: "该坐小马桶了。",
        pinyin: "Gāi zuò xiǎo mǎtǒng le.",
        tone: "neutral"
      },
      {
        id: "toilet-n2",
        english: "Tell me when you need to go.",
        french: "On essaie maintenant.",
        mandarin: "想上厕所的时候告诉我。",
        pinyin: "Xiǎng shàng cèsuǒ de shíhou gàosù wǒ.",
        tone: "neutral"
      },
      {
        id: "toilet-n3",
        english: "Let's try the potty before we leave.",
        french: "Assieds-toi.",
        mandarin: "我们出门前先坐一下小马桶。",
        pinyin: "Wǒmen chūmén qián xiān zuò yīxià xiǎo mǎtǒng.",
        tone: "neutral"
      },
      // Firm
      {
        id: "toilet-f1",
        english: "We're going to sit on the potty before we leave.",
        french: "On s'assoit maintenant.",
        mandarin: "我们出门前要先坐小马桶。",
        pinyin: "Wǒmen chūmén qián yào xiān zuò xiǎo mǎtǒng.",
        tone: "firm"
      },
      {
        id: "toilet-f2",
        english: "No more diapers during the day; we use the potty now.",
        french: "On essaie avant de sortir.",
        mandarin: "白天不用尿布了；我们现在用小马桶。",
        pinyin: "Báitiān bù yòng niàobù le; wǒmen xiànzài yòng xiǎo mǎtǒng.",
        tone: "firm"
      },
      {
        id: "toilet-f3",
        english: "You need to try the potty before putting on your pants.",
        french: "Tu dois essayer.",
        mandarin: "穿裤子前要先试一下小马桶。",
        pinyin: "Chuān kùzi qián yào xiān shì yīxià xiǎo mǎtǒng.",
        tone: "firm"
      }
    ]
  }
];

export function getSituationById(id: string): Situation | undefined {
  return situations.find(s => s.id === id);
}

export function getPhrasesByTone(situation: Situation, tone: Tone): Phrase[] {
  return situation.phrases.filter(p => p.tone === tone);
}
