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
        french: "Je vois que tu es triste. Je suis là avec toi.",
        mandarin: "我看到你很难过。我在这里陪着你。",
        pinyin: "Wǒ kàn dào nǐ hěn nánguò. Wǒ zài zhèlǐ péi zhe nǐ.",
        tone: "gentle"
      },
      {
        id: "upset-g2",
        english: "It's okay to cry. I'll stay right here.",
        french: "C'est normal de pleurer. Je reste là.",
        mandarin: "哭出来没关系。我会一直在这里。",
        pinyin: "Kū chūlái méi guānxi. Wǒ huì yīzhí zài zhèlǐ.",
        tone: "gentle"
      },
      {
        id: "upset-g3",
        english: "Do you want a hug?",
        french: "Tu veux un câlin ?",
        mandarin: "你想要一个拥抱吗？",
        pinyin: "Nǐ xiǎng yào yīgè yōngbào ma?",
        tone: "gentle"
      },
      {
        id: "upset-g4",
        english: "I understand this is hard for you.",
        french: "Je comprends que c'est difficile pour toi.",
        mandarin: "我理解这对你来说很难。",
        pinyin: "Wǒ lǐjiě zhè duì nǐ lái shuō hěn nán.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "upset-n1",
        english: "Can you tell me what happened?",
        french: "Tu peux me dire ce qui s'est passé ?",
        mandarin: "你能告诉我发生了什么吗？",
        pinyin: "Nǐ néng gàosù wǒ fāshēng le shénme ma?",
        tone: "neutral"
      },
      {
        id: "upset-n2",
        english: "Take a deep breath with me.",
        french: "Respire profondément avec moi.",
        mandarin: "和我一起深呼吸。",
        pinyin: "Hé wǒ yīqǐ shēn hūxī.",
        tone: "neutral"
      },
      {
        id: "upset-n3",
        english: "Let's figure this out together.",
        french: "On va trouver une solution ensemble.",
        mandarin: "我们一起想办法。",
        pinyin: "Wǒmen yīqǐ xiǎng bànfǎ.",
        tone: "neutral"
      },
      {
        id: "upset-n4",
        english: "What do you need right now?",
        french: "De quoi as-tu besoin maintenant ?",
        mandarin: "你现在需要什么？",
        pinyin: "Nǐ xiànzài xūyào shénme?",
        tone: "neutral"
      },
      // Firm
      {
        id: "upset-f1",
        english: "I hear you, but screaming won't help us solve this.",
        french: "Je t'entends, mais crier ne va pas nous aider.",
        mandarin: "我听到你了，但是大喊不能帮我们解决问题。",
        pinyin: "Wǒ tīng dào nǐ le, dànshì dà hǎn bù néng bāng wǒmen jiějué wèntí.",
        tone: "firm"
      },
      {
        id: "upset-f2",
        english: "I want to help you, but I need you to calm down first.",
        french: "Je veux t'aider, mais j'ai besoin que tu te calmes d'abord.",
        mandarin: "我想帮助你，但我需要你先冷静下来。",
        pinyin: "Wǒ xiǎng bāngzhù nǐ, dàn wǒ xūyào nǐ xiān lěngjìng xiàlái.",
        tone: "firm"
      },
      {
        id: "upset-f3",
        english: "Let's take a break and try again when you're ready.",
        french: "Faisons une pause et réessayons quand tu seras prêt.",
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
        french: "Je vois que ça t'a vraiment fait mal. Je suis désolé que ça soit arrivé.",
        mandarin: "我知道这让你很伤心。我很抱歉发生了这件事。",
        pinyin: "Wǒ zhīdào zhè ràng nǐ hěn shāngxīn. Wǒ hěn bàoqiàn fāshēng le zhè jiàn shì.",
        tone: "gentle"
      },
      {
        id: "hurt-g2",
        english: "Your feelings matter to me.",
        french: "Tes sentiments sont importants pour moi.",
        mandarin: "你的感受对我很重要。",
        pinyin: "Nǐ de gǎnshòu duì wǒ hěn zhòngyào.",
        tone: "gentle"
      },
      {
        id: "hurt-g3",
        english: "It wasn't your fault.",
        french: "Ce n'était pas de ta faute.",
        mandarin: "这不是你的错。",
        pinyin: "Zhè bùshì nǐ de cuò.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "hurt-n1",
        english: "Tell me what happened.",
        french: "Dis-moi ce qui s'est passé.",
        mandarin: "告诉我发生了什么。",
        pinyin: "Gàosù wǒ fāshēng le shénme.",
        tone: "neutral"
      },
      {
        id: "hurt-n2",
        english: "Are you hurt? Let me see.",
        french: "Tu es blessé ? Fais-moi voir.",
        mandarin: "你受伤了吗？让我看看。",
        pinyin: "Nǐ shòushāng le ma? Ràng wǒ kàn kàn.",
        tone: "neutral"
      },
      {
        id: "hurt-n3",
        english: "Let's talk about what we can do.",
        french: "Parlons de ce qu'on peut faire.",
        mandarin: "我们来谈谈可以怎么做。",
        pinyin: "Wǒmen lái tán tán kěyǐ zěnme zuò.",
        tone: "neutral"
      },
      // Firm
      {
        id: "hurt-f1",
        english: "That wasn't okay. We need to address this.",
        french: "Ce n'était pas acceptable. On doit en parler.",
        mandarin: "那样做是不对的。我们需要处理这件事。",
        pinyin: "Nàyàng zuò shì bùduì de. Wǒmen xūyào chǔlǐ zhè jiàn shì.",
        tone: "firm"
      },
      {
        id: "hurt-f2",
        english: "I will help you, but first I need you to tell me the truth.",
        french: "Je vais t'aider, mais d'abord j'ai besoin que tu me dises la vérité.",
        mandarin: "我会帮助你，但首先我需要你告诉我真相。",
        pinyin: "Wǒ huì bāngzhù nǐ, dàn shǒuxiān wǒ xūyào nǐ gàosù wǒ zhēnxiàng.",
        tone: "firm"
      },
      {
        id: "hurt-f3",
        english: "Hurting others is never acceptable.",
        french: "Faire du mal aux autres n'est jamais acceptable.",
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
        french: "Je vois que tu es occupé. Quand tu seras prêt, j'ai besoin de te parler.",
        mandarin: "我知道你很忙。当你准备好了，我需要和你谈谈。",
        pinyin: "Wǒ zhīdào nǐ hěn máng. Dāng nǐ zhǔnbèi hǎo le, wǒ xūyào hé nǐ tán tán.",
        tone: "gentle"
      },
      {
        id: "listen-g2",
        english: "I'll wait until you can hear me.",
        french: "J'attendrai jusqu'à ce que tu puisses m'écouter.",
        mandarin: "我会等到你能听我说。",
        pinyin: "Wǒ huì děng dào nǐ néng tīng wǒ shuō.",
        tone: "gentle"
      },
      {
        id: "listen-g3",
        english: "Let's find a solution together.",
        french: "Trouvons une solution ensemble.",
        mandarin: "我们一起找个解决办法吧。",
        pinyin: "Wǒmen yīqǐ zhǎo gè jiějué bànfǎ ba.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "listen-n1",
        english: "Please look at me when I'm talking to you.",
        french: "S'il te plaît, regarde-moi quand je te parle.",
        mandarin: "我说话的时候请看着我。",
        pinyin: "Wǒ shuōhuà de shíhòu qǐng kàn zhe wǒ.",
        tone: "neutral"
      },
      {
        id: "listen-n2",
        english: "I need you to listen. This is important.",
        french: "J'ai besoin que tu écoutes. C'est important.",
        mandarin: "我需要你听着。这很重要。",
        pinyin: "Wǒ xūyào nǐ tīng zhe. Zhè hěn zhòngyào.",
        tone: "neutral"
      },
      {
        id: "listen-n3",
        english: "Can you repeat what I just said?",
        french: "Peux-tu répéter ce que je viens de dire ?",
        mandarin: "你能重复一下我刚才说的话吗？",
        pinyin: "Nǐ néng chóngfù yīxià wǒ gāngcái shuō de huà ma?",
        tone: "neutral"
      },
      // Firm
      {
        id: "listen-f1",
        english: "I've asked you three times. This is the last time.",
        french: "Je t'ai demandé trois fois. C'est la dernière fois.",
        mandarin: "我已经说了三遍了。这是最后一次。",
        pinyin: "Wǒ yǐjīng shuō le sān biàn le. Zhè shì zuìhòu yī cì.",
        tone: "firm"
      },
      {
        id: "listen-f2",
        english: "If you don't listen, there will be consequences.",
        french: "Si tu n'écoutes pas, il y aura des conséquences.",
        mandarin: "如果你不听，会有后果的。",
        pinyin: "Rúguǒ nǐ bù tīng, huì yǒu hòuguǒ de.",
        tone: "firm"
      },
      {
        id: "listen-f3",
        english: "Stop what you're doing and listen to me now.",
        french: "Arrête ce que tu fais et écoute-moi maintenant.",
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
        french: "Je vois que tu es très en colère. Calmons-nous ensemble.",
        mandarin: "我看到你很生气。我们一起冷静下来吧。",
        pinyin: "Wǒ kàn dào nǐ hěn shēngqì. Wǒmen yīqǐ lěngjìng xiàlái ba.",
        tone: "gentle"
      },
      {
        id: "aggro-g2",
        english: "It's okay to feel angry, but it's not okay to hurt.",
        french: "C'est normal d'être en colère, mais ce n'est pas bien de faire mal.",
        mandarin: "生气是可以的，但是伤害别人是不可以的。",
        pinyin: "Shēngqì shì kěyǐ de, dànshì shānghài biérén shì bù kěyǐ de.",
        tone: "gentle"
      },
      {
        id: "aggro-g3",
        english: "Let's find another way to show how you feel.",
        french: "Trouvons une autre façon de montrer ce que tu ressens.",
        mandarin: "我们找另一种方式来表达你的感受吧。",
        pinyin: "Wǒmen zhǎo lìng yī zhǒng fāngshì lái biǎodá nǐ de gǎnshòu ba.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "aggro-n1",
        english: "Hands are not for hitting.",
        french: "Les mains ne sont pas faites pour frapper.",
        mandarin: "手不是用来打人的。",
        pinyin: "Shǒu bùshì yòng lái dǎ rén de.",
        tone: "neutral"
      },
      {
        id: "aggro-n2",
        english: "Use your words, not your hands.",
        french: "Utilise tes mots, pas tes mains.",
        mandarin: "用你的话语，不要用你的手。",
        pinyin: "Yòng nǐ de huàyǔ, bùyào yòng nǐ de shǒu.",
        tone: "neutral"
      },
      {
        id: "aggro-n3",
        english: "Take a step back and breathe.",
        french: "Recule d'un pas et respire.",
        mandarin: "退后一步，深呼吸。",
        pinyin: "Tuìhòu yī bù, shēn hūxī.",
        tone: "neutral"
      },
      // Firm
      {
        id: "aggro-f1",
        english: "Stop. Hitting is not allowed.",
        french: "Arrête. Frapper n'est pas permis.",
        mandarin: "停下。打人是不允许的。",
        pinyin: "Tíng xià. Dǎ rén shì bù yǔnxǔ de.",
        tone: "firm"
      },
      {
        id: "aggro-f2",
        english: "I won't let you hurt anyone.",
        french: "Je ne te laisserai pas faire de mal à qui que ce soit.",
        mandarin: "我不会让你伤害任何人。",
        pinyin: "Wǒ bù huì ràng nǐ shānghài rènhé rén.",
        tone: "firm"
      },
      {
        id: "aggro-f3",
        english: "We need to go to a quiet place right now.",
        french: "On doit aller dans un endroit calme maintenant.",
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
        french: "Encore cinq minutes, puis on doit y aller.",
        mandarin: "再玩五分钟，然后我们就要走了。",
        pinyin: "Zài wán wǔ fēnzhōng, ránhòu wǒmen jiù yào zǒu le.",
        tone: "gentle"
      },
      {
        id: "leave-g2",
        english: "I know it's hard to leave when you're having fun.",
        french: "Je sais que c'est difficile de partir quand tu t'amuses.",
        mandarin: "我知道玩得开心时很难离开。",
        pinyin: "Wǒ zhīdào wán de kāixīn shí hěn nán líkāi.",
        tone: "gentle"
      },
      {
        id: "leave-g3",
        english: "We can come back another day.",
        french: "On pourra revenir un autre jour.",
        mandarin: "我们可以改天再来。",
        pinyin: "Wǒmen kěyǐ gǎitiān zài lái.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "leave-n1",
        english: "It's time to go now.",
        french: "C'est l'heure de partir maintenant.",
        mandarin: "现在是时候走了。",
        pinyin: "Xiànzài shì shíhòu zǒu le.",
        tone: "neutral"
      },
      {
        id: "leave-n2",
        english: "Say goodbye and let's go.",
        french: "Dis au revoir et allons-y.",
        mandarin: "说再见，我们走吧。",
        pinyin: "Shuō zàijiàn, wǒmen zǒu ba.",
        tone: "neutral"
      },
      {
        id: "leave-n3",
        english: "Put your shoes on, please.",
        french: "Mets tes chaussures, s'il te plaît.",
        mandarin: "请穿上你的鞋子。",
        pinyin: "Qǐng chuān shàng nǐ de xiézi.",
        tone: "neutral"
      },
      // Firm
      {
        id: "leave-f1",
        english: "We're leaving now. No more discussion.",
        french: "On part maintenant. Pas de discussion.",
        mandarin: "我们现在就走。不要再讨论了。",
        pinyin: "Wǒmen xiànzài jiù zǒu. Bùyào zài tǎolùn le.",
        tone: "firm"
      },
      {
        id: "leave-f2",
        english: "You have two choices: walk or be carried.",
        french: "Tu as deux choix : marcher ou être porté.",
        mandarin: "你有两个选择：自己走或者我抱着你走。",
        pinyin: "Nǐ yǒu liǎng gè xuǎnzé: zìjǐ zǒu huòzhě wǒ bào zhe nǐ zǒu.",
        tone: "firm"
      },
      {
        id: "leave-f3",
        english: "I'm counting to three, then we go.",
        french: "Je compte jusqu'à trois, puis on part.",
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
        mandarin: "过来。",
        pinyin: "guò lái.",
        tone: "neutral"
      },
      {
        id: "everyday-f2",
        english: "Come here",
        french: "Viens ici, tout de suite.",
        mandarin: "马上过来。",
        pinyin: "mǎ shàng guò lái.",
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
        french: "Je sais que c'est difficile de partager tes choses préférées.",
        mandarin: "我知道分享你最喜欢的东西很难。",
        pinyin: "Wǒ zhīdào fēnxiǎng nǐ zuì xǐhuān de dōngxī hěn nán.",
        tone: "gentle"
      },
      {
        id: "share-g2",
        english: "How about taking turns?",
        french: "Et si on faisait chacun son tour ?",
        mandarin: "我们轮流玩怎么样？",
        pinyin: "Wǒmen lúnliú wán zěnmeyàng?",
        tone: "gentle"
      },
      {
        id: "share-g3",
        english: "Sharing can make playing even more fun.",
        french: "Partager peut rendre le jeu encore plus amusant.",
        mandarin: "分享可以让玩耍更有趣。",
        pinyin: "Fēnxiǎng kěyǐ ràng wánshuǎ gèng yǒuqù.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "share-n1",
        english: "Your friend would like a turn too.",
        french: "Ton ami aimerait aussi avoir son tour.",
        mandarin: "你的朋友也想玩一下。",
        pinyin: "Nǐ de péngyǒu yě xiǎng wán yīxià.",
        tone: "neutral"
      },
      {
        id: "share-n2",
        english: "You can have it back in five minutes.",
        french: "Tu pourras le reprendre dans cinq minutes.",
        mandarin: "五分钟后你就可以拿回来。",
        pinyin: "Wǔ fēnzhōng hòu nǐ jiù kěyǐ ná huílái.",
        tone: "neutral"
      },
      {
        id: "share-n3",
        english: "Let's set a timer for taking turns.",
        french: "Mettons un minuteur pour faire chacun son tour.",
        mandarin: "我们设个计时器来轮流吧。",
        pinyin: "Wǒmen shè gè jìshíqì lái lúnliú ba.",
        tone: "neutral"
      },
      // Firm
      {
        id: "share-f1",
        english: "If you can't share, we'll put it away.",
        french: "Si tu ne peux pas partager, on le range.",
        mandarin: "如果你不能分享，我们就把它收起来。",
        pinyin: "Rúguǒ nǐ bù néng fēnxiǎng, wǒmen jiù bǎ tā shōu qǐlái.",
        tone: "firm"
      },
      {
        id: "share-f2",
        english: "It's not fair to keep it all to yourself.",
        french: "Ce n'est pas juste de tout garder pour toi.",
        mandarin: "把所有东西都留给自己是不公平的。",
        pinyin: "Bǎ suǒyǒu dōngxī dōu liú gěi zìjǐ shì bù gōngpíng de.",
        tone: "firm"
      },
      {
        id: "share-f3",
        english: "Give your friend a turn now.",
        french: "Donne son tour à ton ami maintenant.",
        mandarin: "现在让你的朋友玩一下。",
        pinyin: "Xiànzài ràng nǐ de péngyǒu wán yīxià.",
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
        french: "Ces mots peuvent faire mal. Comment penses-tu qu'ils se sont sentis ?",
        mandarin: "那些话会伤害人。你觉得他们听了会怎么想？",
        pinyin: "Nàxiē huà huì shānghài rén. Nǐ juéde tāmen tīng le huì zěnme xiǎng?",
        tone: "gentle"
      },
      {
        id: "unkind-g2",
        english: "I know you didn't mean to hurt them.",
        french: "Je sais que tu ne voulais pas leur faire de mal.",
        mandarin: "我知道你不是故意要伤害他们的。",
        pinyin: "Wǒ zhīdào nǐ bùshì gùyì yào shānghài tāmen de.",
        tone: "gentle"
      },
      {
        id: "unkind-g3",
        english: "Let's think of a kinder way to say that.",
        french: "Réfléchissons à une façon plus gentille de le dire.",
        mandarin: "我们想想有没有更友善的说法。",
        pinyin: "Wǒmen xiǎng xiǎng yǒu méiyǒu gèng yǒushàn de shuōfǎ.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "unkind-n1",
        english: "That wasn't a kind thing to say.",
        french: "Ce n'était pas gentil de dire ça.",
        mandarin: "那样说话不太友善。",
        pinyin: "Nàyàng shuōhuà bù tài yǒushàn.",
        tone: "neutral"
      },
      {
        id: "unkind-n2",
        english: "How would you feel if someone said that to you?",
        french: "Comment te sentirais-tu si quelqu'un te disait ça ?",
        mandarin: "如果有人对你说那样的话，你会怎么想？",
        pinyin: "Rúguǒ yǒu rén duì nǐ shuō nàyàng de huà, nǐ huì zěnme xiǎng?",
        tone: "neutral"
      },
      {
        id: "unkind-n3",
        english: "We use kind words in this family.",
        french: "Dans notre famille, on utilise des mots gentils.",
        mandarin: "在我们家，我们说友善的话。",
        pinyin: "Zài wǒmen jiā, wǒmen shuō yǒushàn de huà.",
        tone: "neutral"
      },
      // Firm
      {
        id: "unkind-f1",
        english: "That's not okay. You need to apologize.",
        french: "Ce n'est pas acceptable. Tu dois t'excuser.",
        mandarin: "那样说话是不对的。你需要道歉。",
        pinyin: "Nàyàng shuōhuà shì bùduì de. Nǐ xūyào dàoqiàn.",
        tone: "firm"
      },
      {
        id: "unkind-f2",
        english: "I don't allow name-calling.",
        french: "Je n'accepte pas les insultes.",
        mandarin: "我不允许骂人。",
        pinyin: "Wǒ bù yǔnxǔ mà rén.",
        tone: "firm"
      },
      {
        id: "unkind-f3",
        english: "Stop and think before you speak.",
        french: "Arrête-toi et réfléchis avant de parler.",
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
        french: "Je suis là avec toi. Tu es en sécurité.",
        mandarin: "我在这里陪着你。你是安全的。",
        pinyin: "Wǒ zài zhèlǐ péi zhe nǐ. Nǐ shì ānquán de.",
        tone: "gentle"
      },
      {
        id: "scared-g2",
        english: "It's okay to feel scared. I feel scared sometimes too.",
        french: "C'est normal d'avoir peur. Moi aussi j'ai peur parfois.",
        mandarin: "害怕是正常的。我有时候也会害怕。",
        pinyin: "Hàipà shì zhèngcháng de. Wǒ yǒu shíhòu yě huì hàipà.",
        tone: "gentle"
      },
      {
        id: "scared-g3",
        english: "I'll hold your hand.",
        french: "Je vais te tenir la main.",
        mandarin: "我会握着你的手。",
        pinyin: "Wǒ huì wò zhe nǐ de shǒu.",
        tone: "gentle"
      },
      {
        id: "scared-g4",
        english: "Would you like me to stay with you?",
        french: "Tu veux que je reste avec toi ?",
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
        french: "Respirons profondément ensemble.",
        mandarin: "我们一起深呼吸吧。",
        pinyin: "Wǒmen yīqǐ shēn hūxī ba.",
        tone: "neutral"
      },
      {
        id: "scared-n3",
        english: "What would help you feel better?",
        french: "Qu'est-ce qui t'aiderait à te sentir mieux ?",
        mandarin: "什么能让你感觉好一点？",
        pinyin: "Shénme néng ràng nǐ gǎnjué hǎo yīdiǎn?",
        tone: "neutral"
      },
      // Firm
      {
        id: "scared-f1",
        english: "I understand you're scared, but we still need to do this.",
        french: "Je comprends que tu as peur, mais on doit quand même le faire.",
        mandarin: "我理解你很害怕，但我们还是需要做这件事。",
        pinyin: "Wǒ lǐjiě nǐ hěn hàipà, dàn wǒmen háishì xūyào zuò zhè jiàn shì.",
        tone: "firm"
      },
      {
        id: "scared-f2",
        english: "I'll be right here, but you can do this.",
        french: "Je serai juste là, mais tu peux y arriver.",
        mandarin: "我就在这里，但你可以做到的。",
        pinyin: "Wǒ jiù zài zhèlǐ, dàn nǐ kěyǐ zuò dào de.",
        tone: "firm"
      },
      {
        id: "scared-f3",
        english: "Being brave doesn't mean not being scared. It means doing it anyway.",
        french: "Être courageux ne veut pas dire ne pas avoir peur. Ça veut dire le faire quand même.",
        mandarin: "勇敢不是不害怕，而是害怕了还是去做。",
        pinyin: "Yǒnggǎn bùshì bù hàipà, érshì hàipà le háishì qù zuò.",
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
        french: "Mettons-nous bien au chaud et lisons une histoire.",
        mandarin: "我们舒舒服服地躺下来读个故事吧。",
        pinyin: "Wǒmen shūshu fúfú de tǎng xiàlái dú gè gùshì ba.",
        tone: "gentle"
      },
      {
        id: "bed-g2",
        english: "I'll stay with you until you feel sleepy.",
        french: "Je reste avec toi jusqu'à ce que tu aies sommeil.",
        mandarin: "我会陪着你直到你困了。",
        pinyin: "Wǒ huì péi zhe nǐ zhídào nǐ kùn le.",
        tone: "gentle"
      },
      {
        id: "bed-g3",
        english: "Your body needs rest to grow big and strong.",
        french: "Ton corps a besoin de repos pour grandir et devenir fort.",
        mandarin: "你的身体需要休息才能长得又高又壮。",
        pinyin: "Nǐ de shēntǐ xūyào xiūxi cáinéng zhǎng de yòu gāo yòu zhuàng.",
        tone: "gentle"
      },
      // Neutral
      {
        id: "bed-n1",
        english: "It's time for bed. Let's start our routine.",
        french: "C'est l'heure de dormir. Commençons notre routine.",
        mandarin: "该睡觉了。我们开始睡前准备吧。",
        pinyin: "Gāi shuìjiào le. Wǒmen kāishǐ shuì qián zhǔnbèi ba.",
        tone: "neutral"
      },
      {
        id: "bed-n2",
        english: "Brush your teeth, then we'll tuck you in.",
        french: "Brosse-toi les dents, puis on te bordrera.",
        mandarin: "刷完牙，我们就帮你盖好被子。",
        pinyin: "Shuā wán yá, wǒmen jiù bāng nǐ gài hǎo bèizi.",
        tone: "neutral"
      },
      {
        id: "bed-n3",
        english: "One more story, then lights out.",
        french: "Encore une histoire, puis on éteint.",
        mandarin: "再讲一个故事，然后就关灯。",
        pinyin: "Zài jiǎng yīgè gùshì, ránhòu jiù guān dēng.",
        tone: "neutral"
      },
      // Firm
      {
        id: "bed-f1",
        english: "It's bedtime. No more getting up.",
        french: "C'est l'heure de dormir. Plus de lever.",
        mandarin: "该睡觉了。不要再起来了。",
        pinyin: "Gāi shuìjiào le. Bùyào zài qǐlái le.",
        tone: "firm"
      },
      {
        id: "bed-f2",
        english: "You need to stay in bed now.",
        french: "Tu dois rester au lit maintenant.",
        mandarin: "你现在必须待在床上。",
        pinyin: "Nǐ xiànzài bìxū dāi zài chuáng shàng.",
        tone: "firm"
      },
      {
        id: "bed-f3",
        english: "If you keep getting up, you'll lose story time tomorrow.",
        french: "Si tu continues à te lever, tu n'auras pas d'histoire demain.",
        mandarin: "如果你继续起来，明天就没有故事时间了。",
        pinyin: "Rúguǒ nǐ jìxù qǐlái, míngtiān jiù méiyǒu gùshì shíjiān le.",
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
